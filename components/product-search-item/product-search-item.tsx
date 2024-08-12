import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { FormattedSimpleProduct } from '@/types/product';

import Box from '../box';
import Text from '../text';
import { Price } from '../price';
import { Trans } from 'react-i18next';
import TextHighlighter from '../text-highlighter';

export interface ProductSearchItemProps {
  product: FormattedSimpleProduct;
  search?: string;
  onProductPress: (product: FormattedSimpleProduct) => void;
}

export function ProductSearchItem(props: ProductSearchItemProps) {
  const { search, product, onProductPress } = props;

  const handlePress = () => {
    onProductPress(product);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Box padding="m" flexDirection="row" gap="l">
        <Image source={{ uri: product.image }} style={{ width: 80, height: 80 }} />
        <Box flex={1} gap="s">
          <TextHighlighter highlight={search}>{product.name}</TextHighlighter>

          <Box flexDirection="row" gap="xs">
            <Price value={product.finalPrice} variant={product.regularPrice ? 'sale' : 'regular'} />
            {product.regularPrice && <Price value={product.regularPrice} variant="line-through" />}

            <Box flex={1} />

            {product.percentOff && (
              <Text variant="price" color="highlight">
                <Trans i18nKey="promo" values={{ val: product.percentOff }} />
              </Text>
            )}
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

export default ProductSearchItem;
