import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';

import useTheme from '@/hooks/useTheme';
import { ProductSummary } from '@/types/product-summary';
import { generateRandomFloat } from '@/utils/random';
import { generateRandomHumanIntegers } from '@/utils/random/random-human-readable';
import Box from '../box';
import { ProductPrice } from '../product-price';
import ProductRating from '../product-rating';
import Text from '../text';

export const PRODUCT_ITEM_CONTENT_HEIGHT = 54;

export interface ProductItemProps {
  width: number;
  height: number;
  product: ProductSummary;
  onPress: (product: ProductSummary) => void;
  productItemParentSharedTransitionTag?: string;
  productItemSharedTransitionTagChild?: string;
}

export function ProductItem(props: ProductItemProps) {
  const { product, width: itemWidth, height: itemHeight, onPress } = props;

  const theme = useTheme();

  // Generate a mock up rating between 3 and 5
  // e.g. 3.9 or 4.2 or 5.0
  const rating = useMemo(() => generateRandomFloat(3, 5, 1).toFixed(1), []);
  const reviews = useMemo(() => generateRandomHumanIntegers(16, 1568), []);
  // const sold = generateRandomHumanIntegers(82, 3780);

  return (
    <Pressable
      onPress={() => {
        if (onPress) onPress(product);
      }}>
      <Animated.View
        style={{
          width: itemWidth,
          height: itemHeight,
          borderRadius: theme.borderRadii.s,
          backgroundColor: theme.colors.background,
          overflow: 'hidden',
        }}
        sharedTransitionTag={props.productItemParentSharedTransitionTag}>
        <Animated.Image
          style={{
            width: itemWidth,
            height: itemWidth,
          }}
          source={product.image ? { uri: product.image } : undefined}
          sharedTransitionTag={props.productItemSharedTransitionTagChild}
        />

        <Box height={PRODUCT_ITEM_CONTENT_HEIGHT} padding="xs">
          <Text color="primary" numberOfLines={1} lineHeight={24}>
            {product.name}
          </Text>

          <Box flexDirection="row" alignItems="center" gap="xs">
            <ProductPrice finalPrice={product.finalPrice} regularPrice={product.regularPrice} />
            <ProductRating {...{ rating, reviews }} />
          </Box>
        </Box>
      </Animated.View>
    </Pressable>
  );
}

export default ProductItem;
