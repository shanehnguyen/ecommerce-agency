/* Google Apps Script: append new LEADS from /pulse into the "Leads" sheet.
 *
 * Rules:
 *   - Only LEADS: answered the questions and reached at least the calendar
 *     step (stage = calendar or booked). Bouncers never appear.
 *   - APPEND-ONLY. New leads become new rows at the bottom. Existing rows are
 *     never rewritten - your edits, colours, strikethroughs and extra columns
 *     (1st Contact, 2nd Contact, ...) are left alone.
 *   - One exception: if a lead already in the sheet later books, ONLY their
 *     Status cell flips "Lead" → "Booked". Nothing else is touched.
 *   - Header-driven: it reads row 1 and writes into whichever columns are
 *     titled Name / Email / Phone / Revenue / Status / Date (any order, case-
 *     insensitive, "Emaiil" typo tolerated). A title that isn't there is simply
 *     skipped - so add a "Revenue" column wherever you like and it starts
 *     filling for new leads.
 *   - Duplicates: matched by email (fallback: phone), so a returning visitor
 *     doesn't create a second row.
 *
 * Setup: Script properties → PULSE_TOKEN. Trigger: syncPulse every 10 min.
 */

var SPREADSHEET_ID = '1ABBrpP1UNxmM2oZftmYRGa7z9wljhxjDsauKX2_XDCI'; // "Leads" sheet
var SHEET_NAME = 'Sheet1';
var DEFAULT_URL = 'https://www.flipfixdigital.com/api/pulse';
var LEAD_STAGES = { calendar: true, booked: true };

// header keyword → field. Matched against lower-cased row-1 titles.
var FIELDS = [
  ['name',    'name'],
  ['mail',    'email'],
  ['phone',   'phone'],
  ['revenue', 'revenue'],
  ['status',  'status'],
  ['date',    'date'],
];

function normEmail(v) { return String(v || '').trim().toLowerCase(); }
function normPhone(v) { return String(v || '').replace(/\D/g, ''); }

function syncPulse() {
  var props = PropertiesService.getScriptProperties();
  var token = props.getProperty('PULSE_TOKEN');
  if (!token) throw new Error('Set PULSE_TOKEN in Project Settings → Script properties.');
  var url = (props.getProperty('PULSE_URL') || DEFAULT_URL) + '?token=' + encodeURIComponent(token);

  var res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) throw new Error('Pulse API ' + res.getResponseCode() + ': ' + res.getContentText().slice(0, 200));
  var data = JSON.parse(res.getContentText());
  var journeys = ((data && data.journeys) || []).filter(function (j) { return j && LEAD_STAGES[j.stage]; });

  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

  // Map fields → column index from the header row. Never writes headers.
  var lastCol = Math.max(sh.getLastColumn(), 1);
  var header = sh.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) { return String(h || '').toLowerCase(); });
  var col = {}; // field → 1-based column
  FIELDS.forEach(function (f) {
    for (var c = 0; c < header.length; c++) {
      if (header[c].indexOf(f[0]) >= 0 && !col[f[1]]) { col[f[1]] = c + 1; break; }
    }
  });
  if (!col.email && !col.phone) throw new Error('Row 1 needs an Email (or Phone) column so leads can be de-duplicated.');

  // Index existing rows by email / phone, remember their Status.
  var lastRow = sh.getLastRow();
  var keyToRow = {}, statusAt = {};
  if (lastRow > 1) {
    var vals = sh.getRange(2, 1, lastRow - 1, lastCol).getValues();
    for (var i = 0; i < vals.length; i++) {
      var r = i + 2;
      var kE = col.email && normEmail(vals[i][col.email - 1]) ? 'e:' + normEmail(vals[i][col.email - 1]) : '';
      var kP = col.phone && normPhone(vals[i][col.phone - 1]) ? 'p:' + normPhone(vals[i][col.phone - 1]) : '';
      var st = col.status ? String(vals[i][col.status - 1] || '') : '';
      if (kE) { keyToRow[kE] = r; statusAt[kE] = st; }
      if (kP) { keyToRow[kP] = r; statusAt[kP] = st; }
    }
  }

  // Oldest first so the sheet reads chronologically.
  journeys.sort(function (a, b) { return (Number(a.landedAt) || 0) - (Number(b.landedAt) || 0); });

  var appends = [], flipped = 0, seenNew = {};
  journeys.forEach(function (j) {
    var status = j.stage === 'booked' ? 'Booked' : 'Lead';
    var kE = normEmail(j.email) ? 'e:' + normEmail(j.email) : '';
    var kP = normPhone(j.phone) ? 'p:' + normPhone(j.phone) : '';
    var row = keyToRow[kE] || keyToRow[kP];
    if (row) {
      // Existing lead: only flip Lead → Booked, touch nothing else.
      var cur = statusAt[kE] || statusAt[kP] || '';
      if (col.status && status === 'Booked' && cur.toLowerCase() !== 'booked') {
        sh.getRange(row, col.status).setValue('Booked'); flipped++;
        if (kE) statusAt[kE] = 'Booked'; if (kP) statusAt[kP] = 'Booked';
      }
      return;
    }
    var k = kE || kP || ('id:' + j.id);
    if (k in seenNew) { // same person twice in this batch: keep the better status
      if (status === 'Booked' && col.status) appends[seenNew[k]][col.status - 1] = 'Booked';
      return;
    }
    var times = j.stageTimes || {};
    var when = Number(times.details) || Number(times.calendar) || Number(j.updatedAt) || Number(j.landedAt) || 0;
    var line = []; for (var c = 0; c < lastCol; c++) line.push('');
    if (col.name)    line[col.name - 1]    = j.fullName || '';
    if (col.email)   line[col.email - 1]   = j.email || '';
    if (col.phone)   line[col.phone - 1]   = j.phone || '';
    if (col.revenue) line[col.revenue - 1] = j.revenue || '';
    if (col.status)  line[col.status - 1]  = status;
    if (col.date)    line[col.date - 1]    = when ? new Date(when) : '';
    appends.push(line);
    seenNew[k] = appends.length - 1;
  });

  if (appends.length) {
    // Write only the mapped columns of each new row, so any other columns stay untouched.
    var start = sh.getLastRow() + 1;
    var mapped = Object.keys(col).map(function (f) { return col[f]; }).sort(function (a, b) { return a - b; });
    var minC = mapped[0], maxC = mapped[mapped.length - 1];
    var block = appends.map(function (line) { return line.slice(minC - 1, maxC); });
    sh.getRange(start, minC, block.length, maxC - minC + 1).setValues(block);
    if (col.date) sh.getRange(start, col.date, block.length, 1).setNumberFormat('M/d/yyyy');
  }
  Logger.log('Pulse sync: ' + appends.length + ' new lead(s), ' + flipped + ' flipped to Booked, ' + journeys.length + ' leads in window.');
}
