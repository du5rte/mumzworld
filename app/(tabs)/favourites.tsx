import Box from '@/components/box';
import Text from '@/components/text';
import { useTranslation } from 'react-i18next';

import Icon from '@/components/icon';
import { Circle } from '@/components/circle';
import { useBottomTabBarPadding } from '@/hooks/useBottomTabBarPadding';

export default function FavouritesTab() {
  const { t } = useTranslation('translation', { keyPrefix: 'favourites' });
  const paddingBottom = useBottomTabBarPadding();

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap="m"
      paddingHorizontal="2xl"
      style={{ paddingBottom }}>
      <Circle size={82} borderWidth={3}>
        <Icon name="heart" size={36} />
      </Circle>
      <Text color="primary" textAlign="center" numberOfLines={2}>
        {t('description')}
      </Text>
    </Box>
  );
}
