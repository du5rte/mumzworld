import React from 'react';

import Box from '../box';
import Text from '../text';

export interface ProductPriceProps {
  finalPrice: string;
  regularPrice?: string;
}

export function ProductPrice(props: ProductPriceProps) {
  const { finalPrice, regularPrice } = props;

  return (
    <Box flexDirection="row" alignItems="center" gap="xs">
      {regularPrice && (
        <Text variant="price" color="error" numberOfLines={1}>
          {regularPrice}
        </Text>
      )}
      <Text
        variant="price"
        color={regularPrice ? 'secondary' : 'primary'}
        textDecorationLine={regularPrice ? 'line-through' : 'none'}
        numberOfLines={1}>
        {finalPrice}
      </Text>
    </Box>
  );
}

export default ProductPrice;
