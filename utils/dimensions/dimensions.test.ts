import { calculateGridLayout } from './dimensions';

describe('calculateGridLayout', () => {
  it('should return the correct layout for phone dimensions', () => {
    const screenWidth = 393;
    const gap = 8;
    const expectedLayout = { numColumns: 2, itemWidth: 184.5 };

    expect(calculateGridLayout(screenWidth, gap)).toEqual(expectedLayout);
  });

  it('should return the correct layout for iPad dimensions', () => {
    const screenWidth = 768;
    const gap = 8;
    const expectedLayout = { numColumns: 4, itemWidth: 182 };

    expect(calculateGridLayout(screenWidth, gap)).toEqual(expectedLayout);
  });
});
