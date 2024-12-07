import { isSafeReport } from './index';

describe('Day 3', () => {
  describe('isSafeReport', () => {
    it('should be safe because the levels are all decreasing by 1 or 2', () => {
      expect(isSafeReport([7, 6, 4, 2, 1])).toBeTruthy();
    });

    it('should be Unsafe because 2 7 is an increase of 5', () => {
      expect(isSafeReport([1, 2, 7, 8, 9])).toBeFalsy();
    });

    it('should be Unsafe because 6 2 is a decrease of 4', () => {
      expect(isSafeReport([9, 7, 6, 2, 1])).toBeFalsy();
    });

    it('should be Unsafe because 1 3 is increasing but 3 2 is decreasing', () => {
      expect(isSafeReport([1, 3, 2, 4, 5])).toBeFalsy();
    });

    it('should be Unsafe because 4 4 is neither an increase or a decrease', () => {
      expect(isSafeReport([8, 6, 4, 4, 1])).toBeFalsy();
    });

    it('should be Safe because the levels are all increasing by 1, 2, or 3', () => {
      expect(isSafeReport([1, 3, 6, 7, 9])).toBeTruthy();
    });
  });
});
