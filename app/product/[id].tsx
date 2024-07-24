import { useState } from 'react';
import { Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Portal } from '@gorhom/portal';
import { TAB_BAR_MARGIN } from '@/components/bottom-tab-bar/bottom-tab-bar-constants';
import Box from '@/components/box';
import { useProduct } from '@/hooks/useProduct';
import ProductDetails from '@/components/product-details';
import ProductDetailsSkeleton from '@/components/product-details/product-details-skeleton';
import { useBottomTabBarPadding } from '@/hooks/useBottomTabBarPadding';
import ProductCarousel from '@/components/product-carousel';
import ProductScreenNavbar from '@/components/product-screen-navbar';
import ScreenPlaceholder from '@/components/screen-placeholder';
import { useTranslation } from 'react-i18next';
import LightBox from '@/components/light-box';

export default function ProductScreen() {
  const insets = useSafeAreaInsets();
  const paddingBottom = useBottomTabBarPadding();
  const { t } = useTranslation('translation', { keyPrefix: 'devmenu' });

  const [fullImage, setFullImage] = useState<string | null>(null);

  const { product, error, loading } = useProduct();

  // Because of modal navigation on iOS this view has inset but on Android it does
  const insetTop = Platform.OS ? 0 : insets.top;
  const bottomPosition = Math.max(insets.bottom, TAB_BAR_MARGIN);

  const handleGoBack = () => {
    router.back();
  };

  const handleResetFullImage = () => {
    setFullImage(null);
  };

  if (error) {
    return (
      <ScreenPlaceholder
        icon="alert-triangle"
        description={t('error.loading')}
        style={{ paddingBottom }}
      />
    );
  }

  return (
    <Box flex={1} style={{ paddingTop: insetTop }}>
      {loading || !product ? (
        <ProductDetailsSkeleton />
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom }}>
          <ProductCarousel data={product.mediaGallery} onImagePress={setFullImage} />
          <ProductDetails product={product} />
        </ScrollView>
      )}

      <Box position="absolute" left={0} right={0} style={{ bottom: bottomPosition }}>
        <ProductScreenNavbar onPurchage={handleGoBack} />
      </Box>

      <Portal>{fullImage && <LightBox image={fullImage} onReset={handleResetFullImage} />}</Portal>
    </Box>
  );
}
