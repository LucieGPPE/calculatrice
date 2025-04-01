import { describe, expect, it } from 'vitest';
import { calculate, clearHistory, getHistory } from './calculator';

describe('Calculator', () => {
  it('should evaluate a simple addition', () => {
    const result = calculate('1 + 2');
    expect(result).toBe(3);
  });

  it('should evaluate a subtraction', () => {
    const result = calculate('5 - 3');
    expect(result).toBe(2);
  });

  it('should evaluate a multiplication', () => {
    const result = calculate('3 * 4');
    expect(result).toBe(12);
  });

  it('should evaluate multiple operations', () => {
    const result = calculate('2 + 3 * 4 + 2');
    expect(result).toBe(16);
  });

  it('should return null for an invalid expression', () => {
    const result = calculate('invalid + 2');
    expect(result).toBe('Invalid expression');
  });

  it('should return invalid expression for an divide by 0', () => {
    const result = calculate('2/0');
    expect(result).toBe('Invalid expression');
  });

  it('should store expressions in history', () => {
    clearHistory();
    calculate('1 + 2');
    expect(getHistory()).toContain('1 + 2 = 3');
  });

  it('should clear the history', () => {
    calculate('5 * 3');
    clearHistory();
    expect(getHistory()).toHaveLength(0);
  });
});
