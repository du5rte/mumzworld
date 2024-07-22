import React, { useCallback, useRef } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { ProductItem } from '@/components/product-item';
import { FormattedSimpleProduct } from '@/types/product';
import useTheme from '@/hooks/useTheme';
import { PRODUCT_ITEM_HEIGHT } from '../product-item/product-item-constants';
import ProductListFooter from './product-list-footer';

/**
 * Because this component is used to render large lists of products,
 * it is important to optimize its performance.
 *
 * A. Avoid anonymous arrow function on renderItem props:
 *
 * Move out the renderItem function to the outside of render function, or wrap it with a `useCallback`
 * so it won't recreate itself each time render function called.
 *
 * B. Add initialNumToRender prop on your FlatList
 *
 * It will define how many items will be rendered for the first time
 *
 * C. Define the key prop on your Item Component
 *
 * It will avoid re-render on dynamically added/removed items with defined key on each item. Make sure it is unique, don't use index as the key! You can also using keyExtractor as an alternative.
 *
 * D. Optional optimization
 *
 * Try use `getItemLayout` to skip measurement of dynamic content. It will improve performance by avoiding the measurement process.
 */

export interface ProductListProps
  extends Omit<FlatListProps<FormattedSimpleProduct>, 'data' | 'renderItem'> {
  products: FormattedSimpleProduct[];
  onItemPress: (product: FormattedSimpleProduct) => void;
}

function ProductList(props: ProductListProps) {
  const {
    products,
    onItemPress,
    contentContainerStyle: contentContainerStyleExternal,
    ...rest
  } = props;

  const flatList = useRef<FlatList<FormattedSimpleProduct>>(null);

  const theme = useTheme();

  // Define the gap between grid items
  const gap = 8;
  const numColumns = 2;

  // Style FlatList with the calculated values, `bottomTabBarPadding` makes sure the last item is visible
  const contentContainerStyle = [
    {
      paddingTop: gap,
      paddingHorizontal: gap,
      gap,
      backgroundColor: theme.colors.surface,
    },
    contentContainerStyleExternal,
  ];
  const columnWrapperStyle = { gap };

  // Defined outside the render method for performance
  const keyExtractor = (item: FormattedSimpleProduct) => item?.id?.toString() as string;

  // Manually setting the layout to skip the measurement process and improve performance
  const getItemLayout = (
    data: ArrayLike<FormattedSimpleProduct> | null | undefined,
    index: number
  ) => ({
    length: PRODUCT_ITEM_HEIGHT,
    offset: PRODUCT_ITEM_HEIGHT * index,
    index,
  });

  const moveToTop = useCallback(() => flatList.current?.scrollToIndex({ index: 0 }), []);

  // Defined the render method outside for performance
  // Wrapping the function in `useCallback` to avoid re-rendering
  const renderItem = useCallback(
    ({ item }: { item: FormattedSimpleProduct }) => {
      return <ProductItem product={item} onPress={onItemPress} />;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products]
  );

  const listFooterComponent = useCallback(
    () => <ProductListFooter list={products} onPress={moveToTop} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products]
  );

  return (
    <FlatList
      ref={flatList}
      data={products}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      numColumns={numColumns}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={columnWrapperStyle}
      initialNumToRender={10}
      // Maximum items to render per batch
      // (the default) will render the visible screen area plus up to 10 screens above and 10 below the viewport.
      // Reducing this number will reduce memory consumption and may improve performance, but will increase the
      // chance that fast scrolling may reveal momentary blank areas of unrendered content.
      // This is a trade off between reducing the amount of items rendered at once and the performance of the list
      // Or increase the number of items rendered so user never see blank images at cost of performance
      maxToRenderPerBatch={10}
      // Window size (number of screens above and below the viewport)
      windowSize={5}
      ListFooterComponent={listFooterComponent}
      {...rest}
    />
  );
}

export default ProductList;
