import { parseInput } from './input';
import { isSafeReport } from './part-one';

function main(): void {
  const reports = parseInput();

  let safeReportsCount = 0;

  for (const report of reports) {
    if (canMakeReportSafe(report)) {
      safeReportsCount += 1;
    }
  }

  console.log(safeReportsCount);
}

export function canMakeReportSafe(report: number[]): boolean {
  let i = 0;
  let hasSafeVersion = false;

  while (!hasSafeVersion && i < report.length) {
    const reportCopy = [...report];
    reportCopy.splice(i, 1);

    hasSafeVersion = isSafeReport(reportCopy);

    i += 1;
  }
  return hasSafeVersion;
}

main();
