import React from 'react';

import { StyleSheet } from 'react-native';

import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Box, { BoxProps } from '../box';
import useTheme from '@/hooks/useTheme';

interface SkeletonProps extends BoxProps {}

export function Skeleton(props: SkeletonProps) {
  const theme = useTheme();

  const animatedPlaceholder = useAnimatedStyle(() => {
    return {
      backgroundColor: theme.colors.skeleton,
      opacity: withRepeat(
        withSequence(withTiming(0, { duration: 500 }), withTiming(1, { duration: 1000 })),
        Infinity,
        true
      ),
    };
  }, []);

  return (
    <Box backgroundColor="skeletonBackground" overflow="hidden" {...props}>
      <Animated.View style={[animatedPlaceholder, StyleSheet.absoluteFill]} />
    </Box>
  );
}

export default Skeleton;
