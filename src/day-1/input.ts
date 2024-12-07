import fs from 'fs';
import path from 'path';

export function parseInput(): [number[], number[]] {
  const filepath = path.join(__dirname, 'input.txt');
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const rows = fileContent.split('\n');

  const rightList: number[] = [];
  const leftList: number[] = [];

  for (const row of rows) {
    const [right, left] = row.split('   ');
    rightList.push(Number.parseInt(right));
    leftList.push(Number.parseInt(left));
  }

  return [rightList, leftList];
}
