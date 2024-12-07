import { computeMul, getMuls, parseMemory } from './part-one';

describe('Day 3 - Part one', () => {
  describe('parseMemory', () => {
    it('should return the sum of every muls from given string', () => {
      expect(
        parseMemory('xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))')
      ).toBe(161);
    });
  });

  describe('getMuls', () => {
    it('should return muls from given string', () => {
      expect(
        getMuls('xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))')
      ).toEqual(['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)']);
    });
  });

  describe('computeMul', () => {
    it('should return 0', () => {
      expect(computeMul('mul(2,0)')).toBe(0);
    });
    it('should return 8', () => {
      expect(computeMul('mul(2,4)')).toBe(8);
    });
    it('should return 2024', () => {
      expect(computeMul('mul(44,46)')).toBe(2024);
    });
    it('should return 492', () => {
      expect(computeMul('mul(123,4)')).toBe(492);
    });
  });
});
