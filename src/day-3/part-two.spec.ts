import { computeMul, executeCommands, getCommands } from './part-two';

describe('Day 3 - Part two', () => {
  describe('parseMemory', () => {
    it('should return the commands from given memory', () => {
      const memory = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
      const commands = getCommands(memory);

      expect(commands).toEqual([
        'mul(2,4)',
        "don't()",
        'mul(5,5)',
        'mul(11,8)',
        'do()',
        'mul(8,5)',
      ]);
    });
  });

  describe('executeCommands', () => {
    it('should return the result of given commands', () => {
      const result = executeCommands([
        'mul(2,4)',
        "don't()",
        'mul(5,5)',
        'mul(11,8)',
        'do()',
        'mul(8,5)',
      ]);

      expect(result).toBe(48);
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
