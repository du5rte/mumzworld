import { StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DATA from '@/data/colors.json';
import { bottomTabBarContentHidden } from '@/context/bottom-tab-bar-content-hidden';
import Button from '@/components/button';
import Box from '@/components/box';
import { TAB_BAR_MARGIN } from '@/components/bottom-tab-bar/bottom-tab-bar-constants';

function getItemById(id: string) {
  return DATA.find((item) => item.id === id);
}

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [, setBottomTabBarContentHidden] = useRecoilState(bottomTabBarContentHidden);

  const insets = useSafeAreaInsets();

  const PADDING_BOTTOM = Math.max(insets.bottom, TAB_BAR_MARGIN);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const handleGoBack = () => {
    setBottomTabBarContentHidden(false);

    router.back();
  };

  const gesture = Gesture.Pan()
    .onUpdate((value) => {
      translateX.value = value.translationX * 0.8;
      translateY.value = value.translationY * 0.8;

      // Calculate the distance from the start point
      // TODO: calculate from original position
      const distance = Math.sqrt(
        value.translationX * value.translationX + value.translationY * value.translationY
      );

      // Calculate a min and max value
      const scaleValue = Math.min(Math.max(distance / 100, 1), 0.9);

      // scale the view down to 90% when the distance is 100
      // TODO: just use distance or spring
      scale.value = withTiming(scaleValue, { duration: 100 });
    })
    .onEnd(() => {
      // If the view is dragged than 50px from original position close the modal
      if (translateY.value > 50 || translateX.value > 90) {
        opacity.value = 0;
        runOnJS(handleGoBack)();
      }
      // Else return to original position
      else {
        translateX.value = withTiming(0, { duration: 300 });
        translateY.value = withTiming(0, { duration: 300 });
        scale.value = withTiming(1, { duration: 300 });
        opacity.value = withTiming(1, { duration: 400 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
      backgroundColor: interpolateColor(opacity.value, [0, 1], ['transparent', 'white']),
      borderRadius: interpolate(opacity.value, [0, 1], [0, 20]),
      overflow: 'hidden',
    };
  });

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const item = getItemById(id!);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[{ flex: 1 }, animatedStyle]} sharedTransitionTag={id + 'parent'}>
        <Animated.View
          style={[styles.image, { backgroundColor: item?.color }]}
          sharedTransitionTag={id + 'child'}
        />

        <Animated.View style={animatedContentStyle}></Animated.View>

        <Box
          position="absolute"
          bottom={PADDING_BOTTOM}
          left={0}
          right={0}
          flexDirection="row"
          gap={'m'}
          justifyContent="center"
          alignItems="center">
          <Button icon="share" variant="secondary" size="xl" shape="circle" />
          <Button
            title="Add to bag"
            icon="shopping-cart"
            variant="primary"
            shape="round"
            size="xl"
            onPress={handleGoBack}
            sharedTransitionTag={'bottom-tab-bar'}
          />
          <Button icon="heart" variant="secondary" size="xl" shape="circle" />
        </Box>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    overflow: 'hidden',
  },
  contentContainer: {
    padding: 32,
    gap: 16,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
