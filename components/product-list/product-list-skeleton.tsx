import Box from '@/components/box';
import Skeleton from '@/components/skeleton';

import {
  PRODUCT_ITEM_HEIGHT,
  PRODUCT_ITEM_IMAGE_HEIGHT,
} from '@/components/product-item/product-item-constants';

export default function ProductListSkeleton() {
  return (
    <Box flex={1} gap="s" padding="s" backgroundColor="surface">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Box key={i} flexDirection="row" gap="s" width={'100%'} height={PRODUCT_ITEM_HEIGHT}>
          {[1, 2].map((i) => (
            <Box flex={1} key={i} borderRadius="s" backgroundColor="background" overflow="hidden">
              <Skeleton height={PRODUCT_ITEM_IMAGE_HEIGHT} />
              <Box padding="s" gap="m">
                <Box flexDirection="row" justifyContent="space-between">
                  <Skeleton height={12} width="50%" borderRadius="s" />
                  <Skeleton height={12} width={12} borderRadius="s" />
                </Box>

                <Skeleton height={16} width="100%" borderRadius="s" />

                <Skeleton height={16} width="50%" borderRadius="s" />
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
