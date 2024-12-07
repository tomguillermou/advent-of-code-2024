import { parseInput } from './input';

function main(): void {
  const memory = parseInput();

  console.log(parseMemory(memory));
}

export function parseMemory(memory: string): number {
  return getMuls(memory).reduce((sum, mul) => sum + computeMul(mul), 0);
}

export function getMuls(memory: string): string[] {
  const mulRegex = new RegExp(/mul\([0-9]*,[0-9]*\)/, 'g');

  return memory.match(mulRegex) ?? [];
}

export function computeMul(mul: string): number {
  const [a, b] = mul.replace('mul(', '').replace(')', '').split(',');

  return Number.parseInt(a) * Number.parseInt(b);
}

main();
