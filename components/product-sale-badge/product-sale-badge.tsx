import React from 'react';
import { Trans } from 'react-i18next';

import Box from '../box';
import Text from '../text';

export interface ProductSaleBadgeProps {
  percent: number;
}

export function ProductSaleBadge(props: ProductSaleBadgeProps) {
  const { percent } = props;

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      paddingVertical="s"
      paddingHorizontal="m"
      borderRadius="circle"
      backgroundColor="highlight">
      <Text variant="price" color="primaryInvert">
        <Trans i18nKey="promo" values={{ val: percent }} />
      </Text>
    </Box>
  );
}

export default ProductSaleBadge;
