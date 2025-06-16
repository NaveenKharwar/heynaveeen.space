export function calculateDuration(startDateStr: string): string {
  const [startMonthName, startYearStr] = startDateStr.split(" ");
  const startYear = parseInt(startYearStr, 10);

  const monthMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  if (!(startMonthName in monthMap) || isNaN(startYear)) return "";

  const startMonth = monthMap[startMonthName as keyof typeof monthMap];
  const startDate = new Date(startYear, startMonth, 1);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let result = "";
  if (years > 0) {
    result += years + (years === 1 ? " yr" : " yrs");
  }
  if (months > 0) {
    if (years > 0) result += " ";
    result += months + (months === 1 ? " mo" : " mos");
  }
  if (!result) result = "0 mo";

  return result;
}
