import { parseInput } from './input';

function main(): void {
  const [rightList, leftList] = parseInput();

  const occurences = getOccurences(leftList);

  let sum = 0;

  for (const value of rightList) {
    sum += value * (occurences[value] ?? 0);
  }

  console.log(sum);
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
