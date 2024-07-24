import { StyleSheet, View, LayoutRectangle, PointProp } from 'react-native';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import Box from '../box';

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface LightBoxDebugViewProps {
  containerLayout: SharedValue<LayoutRectangle>;
  contentLayout: SharedValue<LayoutRectangle>;
  centerPoint: SharedValue<PointProp>;
}

export function LightBoxDebugView(props: LightBoxDebugViewProps) {
  const { containerLayout, contentLayout, centerPoint } = props;

  const scaling = 10;

  const downScale = (value: number) => {
    'worklet';
    return value / scaling;
  };
  // const upScale = (value: number) => {
  //   'worklet';
  //   return value * scaling;
  // };

  const contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: downScale(contentLayout.value.y),
      left: downScale(contentLayout.value.x),
      width: downScale(contentLayout.value.width),
      height: downScale(contentLayout.value.height),
    };
  });

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: downScale(containerLayout.value.y),
      left: downScale(containerLayout.value.x),
      width: downScale(containerLayout.value.width),
      height: downScale(containerLayout.value.height),
    };
  });

  const centerAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: downScale(centerPoint.value.y),
      left: downScale(centerPoint.value.x),
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedBox
        height={downScale(852)}
        width={downScale(393)}
        borderWidth={1}
        style={[{ borderColor: 'hsla(0, 100%, 50%, 0.5)' }]}>
        <AnimatedBox
          position="absolute"
          borderWidth={1}
          style={[contentAnimatedStyle, { borderColor: 'hsla(230, 100%, 50%, 0.5)' }]}
        />
        <AnimatedBox
          position="absolute"
          borderWidth={1}
          style={[containerAnimatedStyle, { borderColor: 'hsla(120, 100%, 50%, 0.5)' }]}
        />
        <AnimatedBox
          position="absolute"
          style={[styles.circle, centerAnimatedStyle, { backgroundColor: 'hsla(0, 0%, 0%, 0.5)' }]}
        />
      </AnimatedBox>
    </View>
  );
}

const POINT_SIZE = 4;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 24,
  },
  circle: {
    width: POINT_SIZE,
    height: POINT_SIZE,
    borderRadius: POINT_SIZE,
    transform: [{ translateX: -POINT_SIZE / 2 }, { translateY: -POINT_SIZE / 2 }],
  },
});

export default LightBoxDebugView;
