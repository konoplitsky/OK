import { describe } from 'vitest';

import { formatQuantity } from './formatQuantity.ts';

describe('formatQuantity', () => {
  it('formats number less than or equal to 99 correctly', () => {
    expect(formatQuantity(5)).toBe('5');
    expect(formatQuantity(99)).toBe('99');
  });

  it('formats number greater than 99 as "99+"', () => {
    expect(formatQuantity(100)).toBe('99+');
  });

  it('formats string of 3 characters or less correctly', () => {
    expect(formatQuantity('abc')).toBe('abc');
    expect(formatQuantity('ab')).toBe('ab');
    expect(formatQuantity('a')).toBe('a');
  });

  it('formats string longer than 3 characters by slicing it to 3', () => {
    expect(formatQuantity('abcd')).toBe('abc');
  });
});
