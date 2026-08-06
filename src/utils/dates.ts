// fourteenDayLabel — "14 days from today" as a real, non-stale date, computed
// at build time so it never drifts from a hardcoded value. Shared by the
// homepage closing section and the exit-intent popup so both quote the same date.
export function fourteenDayLabel(from: Date = new Date()): string {
  const target = new Date(from.getTime() + 14 * 24 * 60 * 60 * 1000);
  const ordinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
  };
  return `${target.toLocaleDateString('en-US', { month: 'long' })} ${ordinal(target.getDate())}`;
}
