import fs from 'fs';
import path from 'path';

function main(): void {
  const filepath = path.join(__dirname, 'input.txt');

  let [rightList, leftList] = loadLists(filepath);

  rightList = rightList.sort();
  leftList = leftList.sort();

  let sum = 0;

  for (let i = 0; i < rightList.length; i += 1) {
    sum += Math.abs(rightList[i] - leftList[i]);
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

main();
