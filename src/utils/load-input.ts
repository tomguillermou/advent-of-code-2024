import fs from 'fs';
import path from 'path';

export function loadInput(dayNumber: number): string {
  const filepath = path.join(process.cwd(), 'inputs', `day-${dayNumber}.txt`);

  return fs.readFileSync(filepath, 'utf-8');
}
