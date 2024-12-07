import fs from 'fs';
import path from 'path';

function main(): void {
  const reports = loadReports();

  let safeReportsCount = 0;

  for (const report of reports) {
    if (isSafeReport(report)) {
      safeReportsCount += 1;
    }
  }

  console.log(safeReportsCount);
}

function loadReports(): number[][] {
  const filepath = path.join(__dirname, 'input.txt');
  const fileContent = fs.readFileSync(filepath, 'utf-8');

  return fileContent
    .split('\n')
    .map((row) => row.split(' ').map((value) => Number.parseInt(value)));
}

export function isSafeReport(report: number[]): boolean {
  let i = 1;
  let safe = true;
  let previousIncrease = null;

  while (safe && i < report.length) {
    const previousValue = report[i - 1];
    const value = report[i];

    const increase = value - previousValue;

    if (previousIncrease && !hasSameSign(previousIncrease, increase)) {
      safe = false;
    }
    if (Math.abs(increase) < 1 || Math.abs(increase) > 3) {
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
