import React from 'react';
import { useWindowDimensions, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useSharedValue } from 'react-native-reanimated';
import { FormattedProductImage } from '@/types/product';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Box from '../box';
import { PRODUCT_DETAILS_CAROUSEL_HEIGHT } from '../product-details/product-details-constants';

export interface ProductCarouselProps {
  data: FormattedProductImage[];
  onImagePress?: (url: string) => void;
}

export function ProductCarousel(props: ProductCarouselProps) {
  const { data, onImagePress } = props;

  const ref = React.useRef<ICarouselInstance>(null);
  const { width } = useWindowDimensions();
  const progress = useSharedValue<number>(0);

  const handleImagePress = (index: number) => () => {
    if (onImagePress) {
      const img = data[index].url;
      onImagePress(img);
    }
  };

  return (
    <Box backgroundColor="background">
      <Carousel
        ref={ref}
        width={width}
        height={PRODUCT_DETAILS_CAROUSEL_HEIGHT}
        data={data}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <Pressable key={index} style={StyleSheet.absoluteFill} onPress={handleImagePress(index)}>
            <Image
              source={{ uri: data[index].url }}
              style={StyleSheet.absoluteFill}
              contentFit="contain"
            />
          </Pressable>
        )}
      />
    </Box>
  );
}

export default ProductCarousel;
