import { useTranslation } from 'react-i18next';
import { useBottomTabBarPadding } from '@/hooks/useBottomTabBarPadding';
import ScreenPlaceholder from '@/components/screen-placeholder';

export default function FavouritesTab() {
  const { t } = useTranslation('translation', { keyPrefix: 'favourites' });
  const paddingBottom = useBottomTabBarPadding();

  return (
    <ScreenPlaceholder icon="heart" description={t('description')} style={{ paddingBottom }} />
  );
}
