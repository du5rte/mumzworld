import { LayoutRectangle } from 'react-native';
import { SLOWDOWN_FACTOR } from './light-box-constants';

export function slowDown(val: number, factor: number = SLOWDOWN_FACTOR) {
  'worklet';
  return val * factor;
}

export function clamp(val: number, min: number, max: number) {
  'worklet';
  return Math.min(Math.max(val, min), max);
}

export function distance(x: number, y: number) {
  'worklet';

  return Math.sqrt(x * x + y * y);
}

export interface Bounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export function calculateBounds(rect: LayoutRectangle): Bounds {
  'worklet';

  const { x, y, width, height } = rect;
  const left = x;
  const top = y;
  const right = x + width;
  const bottom = y + height;

  return { left, top, right, bottom };
}

export function resist(val: number, min: number, max: number, resistanceFactor: number = 0.2) {
  'worklet';
  // const resistanceFactor = 0.2; // Adjust this to control the resistance strength

  if (val < min) {
    // Calculate how far beyond the min the value is
    const excess = min - val;
    // Apply linear interpolation to calculate resistance
    const interpolated = min - excess * resistanceFactor;
    return interpolated;
  } else if (val > max) {
    // Calculate how far beyond the max the value is
    const excess = val - max;
    // Apply linear interpolation to calculate resistance
    const interpolated = max + excess * resistanceFactor;
    return interpolated;
  }

  // If the value is within bounds, return it directly
  return val;
}
