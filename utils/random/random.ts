export function generateRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomFloat(min: number, max: number, precision: number = 2): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}
