import { parseInput } from './input';

function main(): void {
  const memory = parseInput();
  const commands = getCommands(memory);
  const sum = executeCommands(commands);

  console.log(sum);
}

export function getCommands(memory: string): string[] {
  const commandRegex = new RegExp(/do\(\)|don't\(\)|mul\([0-9]*,[0-9]*\)/, 'g');

  return memory.match(commandRegex) ?? [];
}

export function executeCommands(commands: string[]): number {
  let sum = 0;
  let mulEnabled = true;

  for (const command of commands) {
    const [verb] = command.split('(');

    if (verb === 'do') {
      mulEnabled = true;
    }
    if (verb === "don't") {
      mulEnabled = false;
    }
    if (verb === 'mul' && mulEnabled) {
      sum += computeMul(command);
    }
  }

  return sum;
}

export function computeMul(mul: string): number {
  const [a, b] = mul.replace('mul(', '').replace(')', '').split(',');

  return Number.parseInt(a) * Number.parseInt(b);
}

main();
