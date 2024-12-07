import { loadInput } from '../utils/load-input';

export function parseInput(): [number[], number[]] {
  const rightList: number[] = [];
  const leftList: number[] = [];

  loadInput(1)
    .split('\n')
    .forEach((row) => {
      const [right, left] = row.split('   ').map(Number);

      rightList.push(right);
      leftList.push(left);
    });

  return [rightList, leftList];
}
