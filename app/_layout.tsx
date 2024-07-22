import { PropsWithChildren, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SWRConfig } from 'swr';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as JotaiProvider } from 'jotai';
import { ThemeProvider } from '@shopify/restyle';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import useColorScheme from '@/hooks/useColorScheme';
import '@/locales/i18next';
import { darkTheme, lightTheme } from '@/styles/themes';
import { fetcher } from '@/utils/fetcher';
import store from '@/context/store';
import { lightNavigationTheme, darkNavigationTheme } from '@/styles/navigation';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout(props: PropsWithChildren) {
  const [colorScheme, setColorScheme] = useColorScheme();

  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'NunitoSans-Medium': require('../assets/fonts/NunitoSans_10pt-Medium.ttf'),
  });

  useEffect(() => {
    const onThemeChange = (preferences: { colorScheme: ColorSchemeName }) => {
      // Override the color scheme with the system preference.
      setColorScheme(preferences.colorScheme);
    };
    Appearance.addChangeListener(onThemeChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <NavigationThemeProvider
        value={colorScheme === 'dark' ? darkNavigationTheme : lightNavigationTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <SWRConfig value={{ fetcher }}>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="product/[id]" options={{ presentation: 'modal' }} />
              </Stack>
            </SWRConfig>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </NavigationThemeProvider>
    </ThemeProvider>
  );
}

function Root(props: PropsWithChildren) {
  return (
    <JotaiProvider store={store}>
      <RootLayout>{props.children}</RootLayout>
    </JotaiProvider>
  );
}

export default Root;
