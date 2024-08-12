import { useCallback, useMemo, useState } from 'react';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import Animated from 'react-native-reanimated';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useBottomTabBarPadding } from '@/hooks/useBottomTabBarPadding';
import ScreenPlaceholder from '@/components/screen-placeholder';
import Box from '@/components/box';
import TextInput from '@/components/text-input';

import Fuse, { FuseOptionKey, FuseResult } from 'fuse.js';
import { useProducts } from '@/hooks/useProducts';
import { FormattedSimpleProduct } from '@/types/product';
import ProductSearchItem from '@/components/product-search-item';

const options: FuseOptionKey<FormattedSimpleProduct>[] = [
  {
    name: 'name',
    weight: 3,
  },
  {
    name: 'brand',
    weight: 1,
  },
  {
    name: 'sku',
    weight: 1,
  },
];

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export default function ShopTab() {
  const { t } = useTranslation('translation', { keyPrefix: 'shop' });

  const paddingBottom = useBottomTabBarPadding();

  const { products } = useProducts();

  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState<FuseResult<FormattedSimpleProduct>[]>([]);

  const fuse = useMemo(
    () =>
      new Fuse<FormattedSimpleProduct>(products, {
        threshold: 0.4,
        includeMatches: true,
        includeScore: true,
        keys: options,
      }),
    [products]
  );

  const handleInputChange = (text: string) => {
    if (text === '') {
      setSearchResults([]);
      return;
    }

    search(text);
  };

  const search = debounce((text: string) => {
    if (text.length > 0) {
      setInputText(text);

      const results = fuse.search(text);

      if (results?.length > 0) {
        setSearchResults(results);
      }
    }
  }, 500);

  const handleRouteToProduct = (product: FormattedSimpleProduct) => {
    router.navigate({
      pathname: '/product/[id]',
      params: {
        id: product.id,
      },
    });
  };

  const keyExtractor = (item: FuseResult<FormattedSimpleProduct>) =>
    item?.item.id.toString() as string;

  const itemSeparator = useCallback(() => {
    return <Box height={1} backgroundColor="divider" />;
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: FuseResult<FormattedSimpleProduct> }) => {
      return (
        <ProductSearchItem
          search={inputText}
          product={item.item}
          onProductPress={handleRouteToProduct}
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchResults]
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box flex={1}>
        <TextInput
          placeholder="Search for you product"
          onChangeText={handleInputChange}
          onSubmitEditing={Keyboard.dismiss}
        />

        {searchResults?.length === 0 ? (
          <Box flex={1} style={StyleSheet.absoluteFill} pointerEvents="none">
            <ScreenPlaceholder
              icon="search"
              description={t('description')}
              style={{ paddingBottom }}
            />
          </Box>
        ) : (
          <Animated.FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={itemSeparator}
            contentContainerStyle={{ paddingBottom }}
            maxToRenderPerBatch={10}
          />
        )}
      </Box>
    </TouchableWithoutFeedback>
  );
}
