import React from 'react';
import StarIcon from '@/components/custom-icons/star';
import Box from '../box';
import Text from '../text';

export interface ProductRatingProps {
  rating: string;
  reviews?: string;
}

export function ProductRating(props: ProductRatingProps) {
  const { rating, reviews } = props;
  return (
    <Box flexDirection="row" alignItems="center" gap="xs" key="ratings">
      <StarIcon />

      <Text variant="details">{rating}</Text>

      {'reviews' in props && (
        <Text variant="details" color={'divider'}>
          ({reviews})
        </Text>
      )}
    </Box>
  );
}

export default ProductRating;
