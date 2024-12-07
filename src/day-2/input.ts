import fs from 'fs';
import path from 'path';

export function parseInput(): number[][] {
  const filepath = path.join(__dirname, 'input.txt');
  const fileContent = fs.readFileSync(filepath, 'utf-8');

  return fileContent
    .split('\n')
    .map((row) => row.split(' ').map((value) => Number.parseInt(value)));
}
