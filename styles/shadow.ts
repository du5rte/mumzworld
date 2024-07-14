import { Platform } from 'react-native';
import theme from './themes';
import { SharedValue } from 'react-native-reanimated';
import { withEaseOutQuad, withEaseOutSin } from './timings';

// This function is used to generate shadow by elevation
// See more: https://github.com/tamagui/tamagui/blob/master/code/ui/stacks/src/getElevation.tsx
export function generateElevation(amount: number = 10, shadowColor = theme.colors.shadowColor) {
  const [height, shadowRadius] = [Math.round(amount / 4 + 1), Math.round(amount / 2 + 2)];
  const shadow = {
    shadowColor: shadowColor,
    shadowRadius,
    shadowOffset: { height, width: 0 },
    ...(Platform.OS === 'android' && {
      elevationAndroid: 2 * height,
    }),
    ...(Platform.OS === 'web' && {
      boxShadow: `0 ${height}px ${shadowRadius}px ${shadowColor}`,
      transition: 'box-shadow 0.3s ease-out',
    }),
  };
  return shadow;
}

export function interactiveElevationChange(
  amount: number,
  { press, hover }: { press?: SharedValue<boolean>; hover?: SharedValue<boolean> }
) {
  'worklet';

  const height = Math.round(amount / 4 + 1);
  const shadowRadius = Math.round(amount / 2 + 2);
  const elevation = 2 * height;

  return {
    shadowColor: 'hsl(0, 0%, 0%)',
    // Press increases the shadow radius making it seem the light is being diffused
    shadowRadius: press?.value ? withEaseOutQuad(shadowRadius * 2) : withEaseOutSin(shadowRadius),
    // Press shifts the shadow closer to the button making it seem the button is being pressed against the surface
    shadowOffset: {
      height: press?.value ? withEaseOutQuad(0) : withEaseOutSin(height),
      width: 0,
    },
    // Press turns down the opacity making it seem button is being pressed against the surface
    shadowOpacity: press?.value ? withEaseOutQuad(0) : withEaseOutSin(0.085),
    ...(Platform.OS === 'android' && {
      elevation: press?.value ? withEaseOutQuad(0) : withEaseOutSin(elevation),
    }),
    ...(Platform.OS === 'web' && {
      // Hover shifts the shadow away from the button making it seem the button is floating
      // Press shifts the shadow closer to the button making it seem the button is being pressed against the surface
      boxShadow: `0 ${press?.value ? 0 : hover?.value ? height * 2 : height}px ${press?.value ? shadowRadius * 2 : shadowRadius}px ${press?.value ? theme.colors.shadowColorPress : theme.colors.shadowColor}`,
      transition: 'box-shadow 0.3s ease-out',
    }),
  };
}
