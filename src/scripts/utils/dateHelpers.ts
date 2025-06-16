// utils/dateHelpers.ts
export function formatDate(dateInput: string | Date, locale: string = 'en-IN'): string {
  const date = new Date(dateInput);
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getTimeAgo(dateInput: string | Date): string {
  const date = new Date(dateInput);
  const now = new Date();

  const msInDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / msInDay);

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return '1 day ago';
  return `${diffInDays} days ago`;
}
