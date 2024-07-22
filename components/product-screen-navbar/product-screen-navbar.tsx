import React from 'react';

import Box from '../box';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';

export interface ProductScreenNavbarProps {
  onPurchage?: () => void;
}

export function ProductScreenNavbar(props: ProductScreenNavbarProps) {
  const { onPurchage } = props;

  const { t } = useTranslation('translation', { keyPrefix: 'product' });

  return (
    <Box flexDirection="row" gap={'m'} justifyContent="center" alignItems="center">
      <Button icon="share" variant="secondary" size="xl" shape="circle" />
      <Button
        title={t('addToBag')}
        icon="shopping-bag"
        variant="primary"
        shape="round"
        size="xl"
        onPress={onPurchage}
      />
      <Button icon="heart" variant="secondary" size="xl" shape="circle" />
    </Box>
  );
}

export default ProductScreenNavbar;
