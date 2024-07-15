import { PRODUCT_ITEM_CONTENT_HEIGHT, ProductItem } from '@/components/product-item';
import { SimpleProduct } from '@/schema';
import { ProductSummary } from '@/types/product-summary';
import { calculateGridLayout } from '@/utils/dimensions';
import { mapSimpleProductMapper } from '@/utils/product';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, FlatListProps, useWindowDimensions } from 'react-native';

export interface ProductListProps
  extends Omit<FlatListProps<SimpleProduct>, 'data' | 'renderItem'> {
  list: SimpleProduct[];
  onItemPress: (product: ProductSummary) => void;
  productItemParentSharedTransitionTag?: string;
  productItemChildSharedTransitionTag?: string;
}

function ProductList(props: ProductListProps) {
  const {
    list,
    onItemPress,
    contentContainerStyle: contentContainerStyleExternal,
    productItemParentSharedTransitionTag: parentTag,
    productItemChildSharedTransitionTag: childTag,
    ...rest
  } = props;

  const { i18n } = useTranslation();
  const { width } = useWindowDimensions();

  // Define the gap between grid items
  const gap = 8;
  // Calculate the number of columns and the width of each item depending on the screen width
  const { numColumns, itemWidth } = calculateGridLayout(width, 8);
  // Style FlatList with the calculated values, `bottomTabBarPadding` makes sure the last item is visible
  const contentContainerStyle = [
    { paddingTop: gap, paddingLeft: gap, gap },
    contentContainerStyleExternal,
  ];
  const columnWrapperStyle = { gap };

  // (the default) will render the visible screen area plus up to 10 screens above and 10 below the viewport. Reducing this number will reduce memory consumption and may improve performance, but will increase the chance that fast scrolling may reveal momentary blank areas of unrendered content.
  // Optimizing the render by reducing the number of:
  // Maximum items to render per batch
  const maxToRenderPerBatch = 10;
  // Initial items to render
  const initialNumToRender = 20;
  // Window size (number of screens above and below the viewport)
  const windowSize = 5;

  // Defined outside the render method
  const keyExtractor = (item: SimpleProduct) => item?.id?.toString() as string;

  // Calculate the height of each item based on the width of the screen and content
  const itemHeight = itemWidth + PRODUCT_ITEM_CONTENT_HEIGHT;

  // Manually setting the layout to avoid the measurement process
  const getItemLayout = (data: ArrayLike<SimpleProduct> | null | undefined, index: number) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  });

  // Defined the render method outside for performance
  const renderItem = ({ item }: { item: SimpleProduct }) => {
    // Map the graph product schema to a simpler product list item
    const product = mapSimpleProductMapper(item, i18n) as ProductSummary;

    const handlePress = () => {
      if (onItemPress) onItemPress(product);
    };

    return (
      <ProductItem
        product={product}
        width={itemWidth}
        height={itemHeight}
        onPress={handlePress}
        // Used for reanimated shared transition
        {...(parentTag && {
          productItemParentSharedTransitionTag: item.id + parentTag,
        })}
        {...(childTag && {
          productItemSharedTransitionTagChild: item.id + childTag,
        })}
      />
    );
  };

  return (
    <FlatList
      data={list}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      numColumns={numColumns}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={columnWrapperStyle}
      maxToRenderPerBatch={maxToRenderPerBatch}
      initialNumToRender={initialNumToRender}
      windowSize={windowSize}
      {...rest}
    />
  );
}

export default ProductList;
