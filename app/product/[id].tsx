import { StyleSheet } from 'react-native';
import { Button, Card, Stack } from 'tamagui';
import { ThemedText } from '@/components/ThemedText';
import { router, useLocalSearchParams } from 'expo-router';
import Animated, {
  FadeIn,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Feather from '@expo/vector-icons/Feather';

import DATA from '@/data/colors.json';
import { useRecoilState } from 'recoil';
import { bottomTabBarContentHidden } from '@/context/bottom-tab-bar-content-hidden';

const title = 'Product';

const product = {
  name: 'Product Name',
  price: '£20.00',
  description:
    'This innovative product offers exceptional quality and unparalleled performance, making it a must-have for anyone looking to enhance their experience.',
};

function getItemById(id: string) {
  return DATA.find((item) => item.id === id);
}

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [, setBottomTabBarContentHidden] = useRecoilState(bottomTabBarContentHidden);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

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
        runOnJS(router.back)();
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

  const handleGoBack = () => {
    setBottomTabBarContentHidden(false);

    router.back();
  };

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[{ flex: 1 }, animatedStyle]} sharedTransitionTag={id + 'parent'}>
        <Animated.View
          style={[styles.image, { backgroundColor: item?.color }]}
          sharedTransitionTag={id + 'child'}
        />

        <Animated.View style={animatedContentStyle}>
          <Animated.View entering={FadeIn.delay(400).duration(300)} style={styles.contentContainer}>
            <Stack style={styles.titleContainer}>
              <ThemedText type="title">{title}</ThemedText>
            </Stack>
            <Stack style={styles.sectionContainer}>
              <ThemedText type="subtitle">{product.name}</ThemedText>
              <ThemedText>
                Id: <ThemedText type="defaultSemiBold">{id}</ThemedText>
              </ThemedText>
              <ThemedText>
                Price: <ThemedText type="defaultSemiBold">{product.price}</ThemedText>
              </ThemedText>
            </Stack>

            <Button onPress={handleGoBack}>Go back</Button>
          </Animated.View>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            width: '100%',
            position: 'absolute',
            bottom: 30,
            flexDirection: 'row',
            padding: 12,
            gap: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Card elevation="$1" backgroundColor="white" padding={20} borderRadius={999}>
            <Feather name="share" size={24} color="black" />
          </Card>

          <Animated.View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 64,
              // borderRadius: 999,
              // backgroundColor: 'black',
            }}>
            {/**
             * This is a workaround to facilitate the shared transition
             * otherwise the content is visible during transition
             */}
            <Animated.View
              style={[
                StyleSheet.absoluteFill,
                {
                  borderRadius: 999,
                  backgroundColor: 'black',
                },
              ]}
              sharedTransitionTag={'bottom-tab-bar'}
            />
            {/* End of workaround */}
            <Animated.View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 8,
                padding: 20,
                paddingHorizontal: 24,
              }}
              entering={FadeIn.delay(600)}>
              <Feather name="shopping-bag" size={24} color="white" />
              <ThemedText style={{ color: 'white' }}>Add to bag</ThemedText>
            </Animated.View>
          </Animated.View>

          <Card elevation="$1" backgroundColor="white" padding={20} borderRadius={999}>
            <Feather name="heart" size={24} color="black" />
          </Card>
        </Animated.View>
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
