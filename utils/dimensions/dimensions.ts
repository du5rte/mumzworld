export const calculateGridLayout = (
  screenWidth: number,
  gap: number = 8
): { numColumns: number; itemWidth: number } => {
  const targetItemWidth = 180;
  const numColumns = Math.floor((screenWidth + gap) / (targetItemWidth + gap));
  const itemWidth = (screenWidth - gap * (numColumns + 1)) / numColumns;

  return { numColumns, itemWidth };
};
