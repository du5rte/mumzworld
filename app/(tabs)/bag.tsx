import Box from '@/components/box';
import Text from '@/components/text';
import { useTranslation } from 'react-i18next';

import Icon from '@/components/icon';
import { Circle } from '@/components/circle';
import { useBottomTabBarPadding } from '@/hooks/useBottomTabBarPadding';

export default function BagTab() {
  const { t } = useTranslation('translation', { keyPrefix: 'bag' });
  const paddingBottom = useBottomTabBarPadding();

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap="m"
      paddingHorizontal="2xl"
      style={{ paddingBottom }}>
      <Circle size={82} borderWidth={3} borderColor="primary">
        <Text color="primary" lineHeight={36}>
          <Icon name="shopping-bag" size={36} />
        </Text>
      </Circle>
      <Text color="primary" textAlign="center">
        {t('description')}
      </Text>
    </Box>
  );
}
