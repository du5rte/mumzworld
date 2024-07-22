import React from 'react';

import { fireEvent, render, screen } from '@/utils/tests/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabBar, TabBar } from './bottom-tab-bar';
import { tabs } from './tabsMock';

jest.useFakeTimers();

// Mock necessary modules
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ bottom: 0 }),
}));
jest.mock('@react-navigation/bottom-tabs/src/types', () => ({
  // Mock other necessary parts from react-navigation
}));

describe('TabBar', () => {
  it('should contain a `tab-bar` test id', () => {
    render(<TabBar currentTabIndex={1} tabs={tabs} />);

    expect(screen.getByTestId('tab-bar')).toBeDefined();
  });

  it('should contain multiple `tab-bar-item` test ids', () => {
    render(<TabBar currentTabIndex={1} tabs={tabs} />);

    expect(screen.getAllByTestId(/tab-item/).length).toEqual(5);
  });

  it('should contain one focused `tab-item` test ids', () => {
    render(<TabBar currentTabIndex={1} tabs={tabs} />);

    expect(screen.getByTestId(/tab-item-\w+-focused/)).toBeDefined();
  });
});

describe('BottomTabBar', () => {
  const Tab = createBottomTabNavigator();

  // Helper function to setup the test environment
  const setup = () => {
    const screen = render(
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
          <Tab.Screen name="Home" component={() => null} />
          <Tab.Screen name="Settings" component={() => null} />
        </Tab.Navigator>
      </NavigationContainer>
    );
    return { screen };
  };

  it('renders correctly', () => {
    const { screen } = setup();
    expect(screen.getByTestId('bottom-tab-bar')).toBeTruthy();
  });

  it('navigates to the correct screen on tab press', () => {
    const { screen } = setup();
    const settingsTab = screen.getByTestId('tab-item-Settings');
    fireEvent.press(settingsTab);
    expect(screen.getByText('Settings')).toBeTruthy();
  });

  it('adjusts for safe area insets', () => {
    // Assuming useSafeAreaInsets returns { bottom: 34 } for this test
    jest.mock('react-native-safe-area-context', () => ({
      useSafeAreaInsets: () => ({ bottom: 34 }),
    }));
    const { screen } = setup();
    const tabBarStyle = screen.getByTestId('bottom-tab-bar').props.style;
    expect(tabBarStyle.paddingBottom).toBeGreaterThan(0);
  });

  // Add more tests as needed
});
