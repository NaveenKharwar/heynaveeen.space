export function truncate(text: string, maxLength: number = 50): string {
  if (!text || text.length === 0) return "";

  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(" ");

  return trimmed.slice(0, lastSpace) + "...";
}
