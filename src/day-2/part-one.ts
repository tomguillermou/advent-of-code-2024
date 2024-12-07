import { parseInput } from './input';

function main(): void {
  const reports = parseInput();

  let safeReportsCount = 0;

  for (const report of reports) {
    if (isSafeReport(report)) {
      safeReportsCount += 1;
    }
  }

  console.log(safeReportsCount);
}

export function isSafeReport(report: number[]): boolean {
  let i = 1;
  let safe = true;
  let previousIncrease = null;

  while (safe && i < report.length) {
    const previousValue = report[i - 1];
    const value = report[i];

    const increase = value - previousValue;

    if (
      (previousIncrease && !hasSameSign(previousIncrease, increase)) ||
      Math.abs(increase) < 1 ||
      Math.abs(increase) > 3
    ) {
      safe = false;
    }

    previousIncrease = increase;
    i += 1;
  }
  return safe;
}

function hasSameSign(a: number, b: number): boolean {
  return (a >= 0 && b >= 0) || (a <= 0 && b <= 0);
}

main();
