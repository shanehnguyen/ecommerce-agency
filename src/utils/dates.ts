// fourteenDayLabel — "N days from today" (14 by default) as a real, non-stale
// date, for the homepage closing's "live in 14 days" countdown.
export function fourteenDayLabel(from: Date = new Date(), days = 14): string {
  const target = new Date(from.getTime() + days * 24 * 60 * 60 * 1000);
  const ordinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
  };
  return `${target.toLocaleDateString('en-US', { month: 'long' })} ${ordinal(target.getDate())}`;
}
