import React from 'react';
import { View, useWindowDimensions, StyleSheet, LayoutRectangle } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';
import { Image } from 'expo-image';
import Box from '../box';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { calculateBounds } from './light-box-utils';

import { MIN_SCALE, MAX_SCALE } from './light-box-constants';
import LightBoxDebugView from './light-box-debug-view';
import { Point } from 'react-native-svg/lib/typescript/elements/Shape';

export interface LightBoxProps {
  image: string;
  onReset?: () => void;
}

export function LightBox(props: LightBoxProps) {
  const { image, onReset } = props;

  const { width, height } = useWindowDimensions();

  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);

  const scale = useSharedValue(1);

  const handleReset = () => {
    if (onReset) onReset();
  };

  const scaleOffset = useDerivedValue(() => scale.value - 1);

  const centerPoint = useDerivedValue(() => ({
    x: width / 2,
    y: height / 2,
  }));

  const contentLayout = useDerivedValue<LayoutRectangle>(() => ({
    x: translationX.value - centerPoint.value.x * scaleOffset.value,
    y: translationY.value - centerPoint.value.y * scaleOffset.value,
    width: width * scale.value,
    height: height * scale.value,
  }));

  const containerLayout = useDerivedValue<LayoutRectangle>(() => ({
    x: -width * scaleOffset.value,
    y: -height * scaleOffset.value,
    width: width * 3 * scaleOffset.value,
    height: height * 3 * scaleOffset.value,
  }));

  const clampTranslations = ({
    content = contentLayout.value,
    container = containerLayout.value,
    center = centerPoint.value,
    scale = scaleOffset.value,
  }: {
    content?: LayoutRectangle;
    container?: LayoutRectangle;
    center?: Point;
    scale?: number;
  } = {}) => {
    'worklet';

    const contentBounds = calculateBounds(content);
    const containerBounds = calculateBounds(container);

    const minX = container.x + center.x * scale;
    const maxX = -container.x - center.x * scale;
    const minY = container.y + center.y * scale;
    const maxY = -container.y - center.y * scale;

    if (contentBounds.left < containerBounds.left) {
      translationX.value = withTiming(minX);
      return true;
    } else if (contentBounds.right > containerBounds.right) {
      translationX.value = withTiming(maxX);
      return true;
    } else if (contentBounds.top < containerBounds.top) {
      translationY.value = withTiming(minY);
      return true;
    } else if (contentBounds.bottom > containerBounds.bottom) {
      translationY.value = withTiming(maxY);
      return true;
    }

    return false;
  };

  const resetPrevTranslations = () => {
    'worklet';
    prevTranslationX.value = 0;
    prevTranslationY.value = 0;
  };

  const resetTranslations = () => {
    'worklet';
    resetPrevTranslations();

    translationX.value = withTiming(0);
    translationY.value = withTiming(0);
  };

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      runOnJS(handleReset)();
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      // Toggle between zoom in and out
      if (scale.value <= MIN_SCALE) {
        // Zoom in
        scale.value = withTiming(MAX_SCALE);
      } else {
        // Zoom out
        scale.value = withTiming(MIN_SCALE);

        // If the image is dragged outside the bounds of the container, snap it back
        resetTranslations();
      }
    });

  const panGesture = Gesture.Pan()
    // .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
    })
    .onUpdate((event) => {
      // Move the image as it's panned but slow it down to make it feel more natural
      translationX.value = prevTranslationX.value + event.translationX;
      translationY.value = prevTranslationY.value + event.translationY;
    })
    .onEnd((event) => {
      // Reset the previous translation values
      resetPrevTranslations();

      // If the image is dragged outside the bounds of the container, snap it back
      const clamped = clampTranslations();

      // If not clamped, let the image continue moving with the velocity of the pan gesture
      if (!clamped) {
        if (Math.abs(event.velocityX) > 100) {
          translationX.value = withDecay({
            velocity: event.velocityX,
          });
        }
        if (Math.abs(event.velocityY) > 100) {
          translationY.value = withDecay({
            velocity: event.velocityY,
          });
        }
      }
    });

  const tapGestures = Gesture.Exclusive(doubleTap, singleTap);
  const gesture = Gesture.Exclusive(panGesture, tapGestures);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // Pan gesture
        { translateX: translationX.value },
        { translateY: translationY.value },
        { scale: scale.value },
      ],
    };
  });

  return (
    <FullWindowOverlay>
      <Box flex={1} backgroundColor="white">
        <GestureDetector gesture={gesture}>
          <Animated.View style={styles.flex} entering={FadeIn} exiting={FadeOut}>
            <Animated.View style={[styles.flex, styles.wrapper, animatedStyle]}>
              <Image
                source={{
                  uri: image,
                }}
                style={styles.flex}
                contentFit="contain"
              />
            </Animated.View>
          </Animated.View>
        </GestureDetector>

        {__DEV__ && (
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            <LightBoxDebugView
              {...{
                containerLayout,
                contentLayout,
                centerPoint,
              }}
            />
          </View>
        )}
      </Box>
    </FullWindowOverlay>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrapper: {
    padding: 36,
  },
});

export default LightBox;
