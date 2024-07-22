import React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useSharedValue } from 'react-native-reanimated';
import { FormattedProductImage } from '@/types/product';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Box from '../box';
import { PRODUCT_DETAILS_CAROUSEL_HEIGHT } from '../product-details/product-details-constants';

export interface ProductCarouselProps {
  data: FormattedProductImage[];
}

export function ProductCarousel(props: ProductCarouselProps) {
  const { data } = props;

  const ref = React.useRef<ICarouselInstance>(null);
  const { width } = useWindowDimensions();
  const progress = useSharedValue<number>(0);

  return (
    <Box backgroundColor="background">
      <Carousel
        ref={ref}
        width={width}
        height={PRODUCT_DETAILS_CAROUSEL_HEIGHT}
        data={data}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <Image
            key={index}
            source={{ uri: data[index].url }}
            style={StyleSheet.absoluteFill}
            contentFit="contain"
          />
        )}
      />
    </Box>
  );
}

export default ProductCarousel;
