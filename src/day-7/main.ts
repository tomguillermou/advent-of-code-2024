import { loadInput } from '../utils/load-input';

export function parseInput(input: string) {
  return input
    .split('\n')
    .map((row) => row.split(':'))
    .map(([equation, testValues]) => ({
      equation: Number(equation),
      testValues: testValues
        .split(' ')
        .filter((value) => value)
        .map(Number),
    }));
}

export function reduceCombination(input: number[], pos: number[]): number {
  let [result] = input;

  for (let i = 1; i < input.length; i += 1) {
    const value = input[i];

    if (pos.includes(i)) {
      result *= value;
    } else {
      result += value;
    }
  }
  return result;
}

parseInput(loadInput(7));
