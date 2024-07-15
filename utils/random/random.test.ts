import { generateRandomInteger, generateRandomFloat } from './random';

describe('generateRandomInteger', () => {
  test('should generate a random integer between min and max (inclusive)', () => {
    const result = generateRandomInteger(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('should return min when min and max are the same', () => {
    const result = generateRandomInteger(5, 5);
    expect(result).toBe(5);
  });
});

describe('generateRandomFloat', () => {
  test('should generate a random float between min and max (inclusive)', () => {
    const result = generateRandomFloat(1.5, 5.5);
    expect(result).toBeGreaterThanOrEqual(1.5);
    expect(result).toBeLessThanOrEqual(5.5);
    expect(typeof result).toBe('number');
  });

  test('should return min when min and max are the same', () => {
    const result = generateRandomFloat(3.14, 3.14);
    expect(result).toBe(3.14);
  });

  test('should round the result to the specified precision', () => {
    const result = generateRandomFloat(1, 10, 3);
    const decimalPlaces = result.toString().split('.')[1]?.length || 0;
    expect(decimalPlaces).toBeLessThanOrEqual(3);
  });
});
