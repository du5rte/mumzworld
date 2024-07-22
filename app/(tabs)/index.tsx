import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import ProductList from '@/components/product-list';
import { useBottomTabBarPadding } from '@/hooks/useBottomTabBarPadding';
import { FormattedSimpleProduct } from '@/types/product';
import { useProducts } from '@/hooks/useProducts';
import ScreenPlaceholder from '@/components/screen-placeholder';
import ProductListSkeleton from '@/components/product-list/product-list-skeleton';

export default function HomeScreen() {
  const { t } = useTranslation('translation');
  const paddingBottom = useBottomTabBarPadding();

  const { products, error, loading, refresh } = useProducts();

  const handleRouteToProduct = (product: FormattedSimpleProduct) => {
    router.navigate({
      pathname: '/product/[id]',
      params: {
        id: product.id,
      },
    });
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

  if (loading) {
    return <ProductListSkeleton />;
  }

  return (
    <ProductList
      products={products}
      onItemPress={handleRouteToProduct}
      refreshing={loading}
      onRefresh={refresh}
      contentContainerStyle={{ paddingBottom }}
    />
  );
}
