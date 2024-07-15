import Box from '@/components/box';
import ProductList from '@/components/product-list';
import { bottomTabBarContentHidden } from '@/context/bottom-tab-bar-content-hidden';
import { useBottomTabBarPadding } from '@/hooks/useBottomTabBarPadding';
import { ProductSummary } from '@/types/product-summary';
import { router } from 'expo-router';
import { useRecoilState } from 'recoil';
import { useProducts } from '@/hooks/useProducts';

export default function HomeScreen() {
  const [, setBottomTabBarContentHidden] = useRecoilState(bottomTabBarContentHidden);
  const bottomTabBarPadding = useBottomTabBarPadding();

  const { products, error, isLoading, refresh } = useProducts();

  function handleRouteToProduct(product: ProductSummary) {
    setBottomTabBarContentHidden(true);

    router.navigate({
      pathname: '/product/[id]',
      params: {
        id: product.id,
        image: product.image,
      },
    });
  }

  const contentContainerStyle = { paddingBottom: bottomTabBarPadding };

  // TODO: add skeleton loading
  if (error) return <Box flex={1} />;
  if (isLoading) return <Box flex={1} />;

  return (
    <Box flex={1} backgroundColor="surface">
      <ProductList
        list={products}
        onItemPress={handleRouteToProduct}
        refreshing={isLoading}
        onRefresh={refresh}
        contentContainerStyle={contentContainerStyle}
        // Used for reanimated shared transition
        productItemParentSharedTransitionTag={'parent'}
        productItemChildSharedTransitionTag={'child'}
      />
    </Box>
  );
}
