import fs from 'fs';
import path from 'path';

function main(): void {
  const filepath = path.join(__dirname, 'input.txt');
  const [rightList, leftList] = loadLists(filepath);
  const occurences = getOccurences(leftList);

  let sum = 0;

  for (const value of rightList) {
    sum += value * (occurences[value] ?? 0);
  }

  console.log(sum);
}

function loadLists(filepath: string): [number[], number[]] {
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

function getOccurences(list: number[]): Record<number, number> {
  const occurences: Record<number, number> = {};

  for (const value of list) {
    if (occurences[value]) {
      occurences[value] += 1;
    } else {
      occurences[value] = 1;
    }
  }
  return occurences;
}

main();
