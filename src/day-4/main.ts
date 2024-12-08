import { loadInput } from '../utils/load-input';

export function countForwardOccurences(text: string): number {
  return text.match(new RegExp(/XMAS/, 'g'))?.length ?? 0;
}

export function countBackwardOccurences(text: string): number {
  return text.match(new RegExp(/SAMX/, 'g'))?.length ?? 0;
}

export function countHorizontalOccurences(text: string): number {
  const rows = getRows(text);

  let occurences = 0;

  for (const row of rows) {
    occurences += countForwardOccurences(row) + countBackwardOccurences(row);
  }
  return occurences;
}

export function countVerticalOccurences(text: string): number {
  const columns = getColumns(text);

  let occurences = 0;

  for (const column of columns) {
    occurences += countForwardOccurences(column) + countBackwardOccurences(column);
  }
  return occurences;
}

export function getRows(text: string): string[] {
  return text.split('\n');
}

export function getColumns(text: string): string[] {
  const rows = getRows(text);
  const columns = [];

  for (let i = 0; i < rows.length; i += 1) {
    const column = rows.map((row) => row[i]).join('');
    columns.push(column);
  }
  return columns;
}

function getMatrixDiagonals(matrix: string[]) {
  return matrix.map((_, i) =>
    matrix
      .map((elem, j) => elem[i + j])
      .filter((elem) => elem)
      .join('')
  );
}

function reverseText(text: string): string {
  return text.split('').reverse().join('');
}

export function getDiagonals(text: string): string[] {
  const rows = getRows(text);
  const rowsReversed = rows.map(reverseText);
  const columns = getColumns(text);
  const columnsReversed = columns.map(reverseText);

  return getMatrixDiagonals(rows)
    .concat(getMatrixDiagonals(rowsReversed))
    .concat(getMatrixDiagonals(columns))
    .concat(getMatrixDiagonals(columnsReversed));
}

function partOne(): void {
  const text = loadInput(4);
  const occurences = countHorizontalOccurences(text) + countVerticalOccurences(text);

  console.log('occurences:', occurences);
}

// partOne();
