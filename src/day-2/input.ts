import { loadInput } from '../utils/load-input';

export function parseInput(): number[][] {
  return loadInput(2)
    .split('\n')
    .map((row) => row.split(' ').map((value) => Number.parseInt(value)));
}
