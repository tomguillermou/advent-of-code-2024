import {
  countBackwardOccurences,
  countForwardOccurences,
  countHorizontalOccurences,
  countVerticalOccurences,
  getColumns,
  getDiagonals,
  getRows,
} from './main';

describe('Day 4', () => {
  describe('countForwardOccurences', () => {
    it('should return forward occurences', () => {
      expect(countForwardOccurences('XMASAMX\nXMASAMX')).toBe(2);
    });
  });

  describe('countBackwardOccurences', () => {
    it('should return backward occurences', () => {
      expect(countBackwardOccurences('XMASAMX\nXMASAMX')).toBe(2);
    });
  });

  describe('countHorizontalOccurences', () => {
    it('should return horizontal occurences', () => {
      const text = 'XMASAMX\nXMASAMX';

      expect(countHorizontalOccurences(text)).toBe(4);
    });
  });

  describe('countVerticalOccurences', () => {
    it('should return vertical occurences', () => {
      const text = 'XS..\nMA..\nAM..\nSX..';

      expect(countVerticalOccurences(text)).toBe(2);
    });
  });

  describe('getRows', () => {
    it('should return rows', () => {
      expect(getRows('XS..\nMA..\nAM..\nSX..')).toEqual(['XS..', 'MA..', 'AM..', 'SX..']);
    });
  });

  describe('getColumns', () => {
    it('should return the columns', () => {
      expect(getColumns('XS..\nMA..\nAM..\nSX..')).toEqual(['XMAS', 'SAMX', '....', '....']);
    });
  });

  describe('getDiagonals', () => {
    it('should return diagonals', () => {
      const text = 'X..S\n.MA.\n.MA.\nX..S';
      const diagonals = getDiagonals(text);

      expect(diagonals).toEqual([
        'XMAS',
        '.A.',
        '..',
        'S',
        'SAMX',
        '.M.',
        '..',
        'X',
        '..',
        'X',
        '.M.',
        '..',
        'X',
        '.M.',
        '..',
        'X',
      ]);
    });
  });
});
