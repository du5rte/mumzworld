import React from 'react';

import { fireEvent, render, screen } from '@/utils/tests/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabBar } from './bottom-tab-bar';

import { tabs } from './tabs-mock';

describe('BottomTabBar', () => {
  beforeEach(() => {
    const Tab = createBottomTabNavigator();

    render(
      <NavigationContainer>
        <Tab.Navigator initialRouteName="index" tabBar={(props) => <BottomTabBar {...props} />}>
          {tabs.map((tab) => (
            <Tab.Screen
              key={tab.id}
              name={tab.id}
              options={{ title: tab.label }}
              component={() => null}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    );
  });

  it('renders correctly', () => {
    expect(screen.getByTestId('bottom-tab-bar')).toBeTruthy();
  });

  it('navigates to the correct screen on tab press', () => {
    const settingsTab = screen.getByTestId('tab-item-shop');
    expect(settingsTab).toBeTruthy();
  });

  it.each(tabs)('navigates to the correct screen on tab press for tab %p', (tab) => {
    // Preferably use a getByText but in this case we only display icons so using testID
    const tabItem = screen.getByTestId(new RegExp(`tab-item-${tab.id}`));

    fireEvent.press(tabItem);

    // Testing the tab is focused
    expect(screen.getByTestId(`tab-item-${tab.id}-focused`)).toBeTruthy();
    // Testing the navigation header is set to the tab label
    expect(screen.getByText(tab.label)).toBeTruthy();
  });

  it('adjusts for safe area insets', () => {
    // Assuming useSafeAreaInsets returns { bottom: 34 } for this test
    jest.mock('react-native-safe-area-context', () => ({
      useSafeAreaInsets: () => ({ bottom: 34 }),
    }));
    const tabBarStyle = screen.getByTestId('bottom-tab-bar').props.style;
    expect(tabBarStyle.paddingBottom).toBeGreaterThan(0);
  });
});
