import { parseInput, reduceCombination } from './main';

describe('Day 7', () => {
  describe('parseInput', () => {
    it('should parse input', () => {
      const input = '190: 10 19\n3267: 81 40 27\n292: 11 6 16 20';

      expect(parseInput(input)).toEqual([
        { equation: 190, testValues: [10, 19] },
        { equation: 3267, testValues: [81, 40, 27] },
        { equation: 292, testValues: [11, 6, 16, 20] },
      ]);
    });
  });

  describe('reduceCombination', () => {
    it('should reduce combination with multipliers at given pos', () => {
      expect(reduceCombination([81, 40, 27, 13], [])).toBe(81 + 40 + 27 + 13);
    });

    it('should reduce combination with multipliers at given pos', () => {
      expect(reduceCombination([81, 40, 27, 13], [1, 3])).toBe((81 * 40 + 27) * 13);
    });
  });
});
