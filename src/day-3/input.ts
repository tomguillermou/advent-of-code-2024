import fs from 'fs';
import path from 'path';

export function parseInput() {
  const filepath = path.join(__dirname, 'input.txt');
  return fs.readFileSync(filepath, 'utf-8');
}
