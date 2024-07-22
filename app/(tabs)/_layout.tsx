import { Tabs } from 'expo-router';

import BottomTabBar from '@/components/bottom-tab-bar';
import { headerStyle, headerTitleStyle } from '@/styles/navigation';
import { useTranslation } from 'react-i18next';
import CurrencyToggler from '@/components/currency-toggler';
import LogoSvg from '@/components/logo/logo';

export default function TabLayout() {
  const { t } = useTranslation('translation', { keyPrefix: 'navigation' });

  return (
    <Tabs
      // Fixes issue with the following error:
      // Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        headerStyle,
        headerTitleStyle,
        headerTitle: () => <LogoSvg />,
        headerRight: () => <CurrencyToggler />,
      }}
      initialRouteName="shop"
      backBehavior="history">
      <Tabs.Screen name="index" options={{ title: t('home') }} />
      <Tabs.Screen name="shop" options={{ title: t('shop') }} />
      <Tabs.Screen name="favourites" options={{ title: t('favourites') }} />
      <Tabs.Screen name="bag" options={{ title: t('bag') }} />
      <Tabs.Screen name="profile" options={{ title: t('profile'), tabBarShowLabel: false }} />
    </Tabs>
  );
}
