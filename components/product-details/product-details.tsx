import React from 'react';

import Box, { BoxProps } from '../box';
import Text from '../text';
import ProductStats from '../product-stats';
import { generateRandomFloat } from '@/utils/random';
import { generateRandomHumanIntegers } from '@/utils/random/random-human-readable';

export interface ProductDetailsProps extends BoxProps {}

export function ProductDetails(props: ProductDetailsProps) {
  // Generate a random rating between 3 and 5 as it's not a real product
  // e.g. 3.9 or 4.2 or 5.0
  const rating = generateRandomFloat(3, 5, 1).toFixed(1);
  const reviews = generateRandomHumanIntegers(16, 1568);
  const sold = generateRandomHumanIntegers(82, 3780);

  return (
    <Box gap="m" {...props}>
      <Text>Product Details</Text>
      <ProductStats {...{ rating, reviews, sold }} />
    </Box>
  );
}

export default ProductDetails;
