import Box from '@/components/box';
import Skeleton from '@/components/skeleton';
import { PRODUCT_DETAILS_CAROUSEL_HEIGHT } from '../product-details/product-details-constants';

export default function ProductDetailsSkeleton() {
  return (
    <Box flex={1}>
      <Skeleton width="100%" height={PRODUCT_DETAILS_CAROUSEL_HEIGHT} />
      <Box flex={1} gap="l" padding="m" paddingHorizontal="xl">
        <Skeleton height={18} borderRadius="s" />

        <Skeleton width={120} height={40} borderRadius="l" />

        <Skeleton height={24} borderRadius="l" />
        <Skeleton height={24} borderRadius="m" />

        <Skeleton width="100%" height={1} borderRadius="round" />

        <Skeleton height={24} width={120} borderRadius="m" />

        <Skeleton height={60} borderRadius="m" />
        <Skeleton height={200} borderRadius="m" />
      </Box>
    </Box>
  );
}
