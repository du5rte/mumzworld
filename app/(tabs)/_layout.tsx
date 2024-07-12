import { Tabs } from 'expo-router';

import BottomTabBar from '@/components/bottom-tab-bar';

export default function TabLayout() {
  return (
    <Tabs
      // Fixes issue with the following error:
      // Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{ tabBarShowLabel: true, headerShown: true }}
      initialRouteName="shop"
      backBehavior="history">
      <Tabs.Screen name="index" options={{ title: 'Home ' }} />
      <Tabs.Screen name="shop" options={{ title: 'Shop ' }} />
      <Tabs.Screen name="favourites" options={{ title: 'Favourites ' }} />
      <Tabs.Screen name="bag" options={{ title: 'Bag' }} />
      <Tabs.Screen name="profile" options={{ title: 'Cart', tabBarShowLabel: false }} />
    </Tabs>
  );
}
