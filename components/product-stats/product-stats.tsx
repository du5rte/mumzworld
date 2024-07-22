import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '../box';
import Text from '../text';

import StarIcon from '@/components/custom-icons/star';

export const variant = ['long', 'short'] as const;

export type Variants = (typeof variant)[number];

export interface ProductStatsProps {
  rating?: string;
  reviews?: string;
  sold?: string;
  compress?: boolean;
}

export function ProductStats(props: ProductStatsProps) {
  const { rating, reviews, sold } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'product' });

  const elements = [];

  if ('rating' in props) {
    elements.push(
      <Box flexDirection="row" alignItems="center" gap="xs" key="ratings">
        <StarIcon />
        <Text variant="info">{t('rating', { rating })}</Text>
      </Box>
    );
  }

  if ('reviews' in props) {
    elements.push(
      <Text variant="info" key="reviews">
        {t('reviews', { reviews })}
      </Text>
    );
  }

  if ('sold' in props) {
    elements.push(
      <Text variant="info" key="sold">
        {t('sold', { sold })}
      </Text>
    );
  }

  return (
    <Box>
      <Box flexDirection="row" alignItems="center" justifyContent="flex-start" gap="m">
        {elements.map((element, index) => (
          <React.Fragment key={index}>
            {element}
            {index < elements.length - 1 && <Text color={'divider'}>{'|'}</Text>}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default ProductStats;
