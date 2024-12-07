import { canMakeReportSafe } from './part-two';

describe('Day 3', () => {
  describe('canMakeReportSafe', () => {
    it('should be Safe without removing any level', () => {
      expect(canMakeReportSafe([7, 6, 4, 2, 1])).toBeTruthy();
    });

    it('should be Unsafe regardless of which level is removed', () => {
      expect(canMakeReportSafe([1, 2, 7, 8, 9])).toBeFalsy();
    });

    it('should be Unsafe regardless of which level is removed', () => {
      expect(canMakeReportSafe([9, 7, 6, 2, 1])).toBeFalsy();
    });

    it('should be Safe by removing the second level, 3', () => {
      expect(canMakeReportSafe([1, 3, 2, 4, 5])).toBeTruthy();
    });

    it('should be Safe by removing the third level, 4', () => {
      expect(canMakeReportSafe([8, 6, 4, 4, 1])).toBeTruthy();
    });

    it('should be Safe without removing any level', () => {
      expect(canMakeReportSafe([1, 3, 6, 7, 9])).toBeTruthy();
    });
  });
});
