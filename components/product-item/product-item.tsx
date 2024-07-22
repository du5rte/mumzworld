import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FormattedSimpleProduct } from '@/types/product';
import StarIcon from '@/components/custom-icons/star';
import { Image } from 'expo-image';
import Box from '../box';
import Text from '../text';
import { PRODUCT_ITEM_HEIGHT, PRODUCT_ITEM_IMAGE_HEIGHT } from './product-item-constants';
import Price from '../price';

export interface ProductItemProps {
  product: FormattedSimpleProduct;
  onPress: (product: FormattedSimpleProduct) => void;
}

export function ProductItem(props: ProductItemProps) {
  const { product, onPress } = props;
  const handlePress = () => {
    if (onPress) onPress(product);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Box flex={1} backgroundColor="background" borderRadius="s" height={PRODUCT_ITEM_HEIGHT}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          placeholderContentFit="fill"
          contentFit="contain"
          priority="high"
        />

        <Box padding="s" gap="s">
          <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text variant="detail" color="secondary">
              {product.brand}
            </Text>

            <Box flexDirection="row" alignItems="center" gap="xs">
              <StarIcon />
              <Text variant="price" lineHeight={20}>
                {product.rating}
              </Text>
            </Box>
          </Box>

          <Text variant="title" numberOfLines={2} lineHeight={20}>
            {product.name}
          </Text>

          <Box>
            <Price
              value={product.finalPrice}
              variant={product.regularPrice ? 'sale' : 'regular'}
              lineHeight={20}
            />
            {product.regularPrice && (
              <Price value={product.regularPrice} variant="line-through" lineHeight={20} />
            )}
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: PRODUCT_ITEM_HEIGHT,
  },
  image: {
    height: PRODUCT_ITEM_IMAGE_HEIGHT,
  },
});

export default ProductItem;
