import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true, headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          title: 'Bag',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-basket" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
