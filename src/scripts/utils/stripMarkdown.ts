export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/!\[(.*?)\]\(.*?\)/g, "") // remove images
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // replace links with link text
    .replace(/[#_*~`>-]/g, "") // remove markdown syntax chars
    .replace(/\n+/g, " ") // replace new lines with space
    .trim();
}
