import { useTranslation } from 'react-i18next';
import { useBottomTabBarPadding } from '@/hooks/useBottomTabBarPadding';
import ScreenPlaceholder from '@/components/screen-placeholder';

export default function BagTab() {
  const { t } = useTranslation('translation', { keyPrefix: 'bag' });
  const paddingBottom = useBottomTabBarPadding();

  return (
    <ScreenPlaceholder
      icon="shopping-bag"
      description={t('description')}
      style={{ paddingBottom }}
    />
  );
}
