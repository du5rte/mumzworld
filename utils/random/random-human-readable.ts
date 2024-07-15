import numbro from 'numbro';
import { generateRandomInteger } from './random';

export function generateRandomHumanIntegers(min: number, max: number): string {
  const value = generateRandomInteger(min, max);
  return numbro(value).format({
    spaceSeparated: false,
    average: true,
  });
}
