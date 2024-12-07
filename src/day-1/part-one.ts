import { parseInput } from './input';

function main(): void {
  let [rightList, leftList] = parseInput();

  rightList = rightList.sort();
  leftList = leftList.sort();

  let sum = 0;

  for (let i = 0; i < rightList.length; i += 1) {
    sum += Math.abs(rightList[i] - leftList[i]);
  }

  console.log(sum);
}

main();
