import React, { useMemo } from 'react';
import { LayoutChangeEvent, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import Feather from '@expo/vector-icons/Feather';
import { Circle as _Circle, styled } from 'tamagui';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';

import {
  TAB_PADDING,
  TAB_SIZE,
  TAB_BAR_HEIGHT,
  TAB_BAR_MARGIN,
  TAB_ICON_SIZE,
} from './bottom-tab-bar-constants';
import { useRecoilState } from 'recoil';
import { bottomTabBarShown } from '@/context/bottom-tab-bar-shown';
import { bottomTabBarContentHidden } from '@/context/bottom-tab-bar-content-hidden';

/**
 * Separate `TabBar` and `BottomTabBar` components has they have 2 different purposes:
 *
 * `TabBar` is a dumb component that only renders the tab bar
 *
 * `BottomTabBar`'s main concern is adpating to react-navigation's API
 * and rendering the tab bar at the bottom of the screen
 *
 * This separation allows for better testing and separation of concerns
 */

export type FeatherIconName = keyof typeof Feather.glyphMap;

export interface Tab {
  id: string;
  label: string;
  icon: FeatherIconName;
  onPress?: () => void;
  onLongPress?: () => void;
}

const Circle = styled(_Circle, {
  variants: {
    centered: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
} as const);

export interface TabItemProps extends Tab {
  id: string;
  label: string;
  icon: FeatherIconName;
  focused: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

export function TabItem(props: TabItemProps) {
  const { label, icon, focused, onPress, onLongPress } = props;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      accessibilityLabel={label}
      testID={`tab-item-${props.id}${focused ? '-focused' : ''}`}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Circle centered size={TAB_SIZE}>
        <Feather
          name={icon}
          size={TAB_ICON_SIZE}
          color={focused ? 'hsla(0, 100%, 0%, 1)' : 'hsla(0, 100%, 100%, 0.66)'}
        />
      </Circle>
    </TouchableOpacity>
  );
}

export interface TabBarProps {
  tabs: Tab[];
  currentTabIndex: number;
  onTabPress?: (index: number, tabs: Tab) => void;
  onTabLongPress?: (index: number, tabs: Tab) => void;
  hideTabs?: boolean;
  sharedTransitionTag?: string;
}

export function TabBar(props: TabBarProps) {
  const {
    tabs,
    currentTabIndex = 0,
    onTabPress,
    onTabLongPress,
    hideTabs,
    sharedTransitionTag,
  } = props;

  // Used to store the x position of each tab button
  const tabsPositionsX = useSharedValue<number[]>([0, 0, 0, 0, 0]);

  // Register each tab button's x position in the shared value
  // to be used by the indicator animation
  const handleRegisterLayout = (index: number) => (event: LayoutChangeEvent) => {
    const tabX = event.nativeEvent.layout.x;
    tabsPositionsX.modify((value) => {
      'worklet';
      value[index] = tabX;
      return value;
    });
  };

  // Animate the indicator to the current tab's x position
  const indicatorAnimatedStyles = useAnimatedStyle(() => {
    const currentX = tabsPositionsX.value[currentTabIndex];
    return {
      position: 'absolute',
      transform: [
        { translateX: withTiming(currentX, { duration: 200, easing: Easing.out(Easing.quad) }) },
      ],
    };
  });

  const contentAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: hideTabs ? withTiming(0, { duration: 200 }) : withDelay(400, withTiming(1)),
    };
  });

  return (
    <Animated.View
      testID={'tab-bar'}
      style={{
        flex: 1,
        minWidth: TAB_SIZE * tabs.length + (tabs.length - 1) * 8 + TAB_PADDING * 2,
        maxWidth: TAB_SIZE * tabs.length + (tabs.length - 1) * 36 + TAB_PADDING * 2,
        flexGrow: 1,

        padding: TAB_PADDING,
        height: TAB_BAR_HEIGHT,
        borderRadius: TAB_BAR_HEIGHT,
        backgroundColor: 'black',
      }}
      sharedTransitionTag={sharedTransitionTag}>
      <Animated.View
        style={[
          {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          contentAnimatedStyles,
        ]}>
        <Animated.View style={indicatorAnimatedStyles}>
          <Circle size={TAB_SIZE} backgroundColor="white" />
        </Animated.View>

        {tabs.map((tab, index) => {
          const isFocused = currentTabIndex === index;

          const onPress = () => {
            if (tab.onPress) tab.onPress();
            else if (onTabPress) onTabPress(index, tab);
          };

          const onLongPress = () => {
            if (tab.onLongPress) tab.onLongPress();
            else if (onTabLongPress) onTabLongPress(index, tab);
          };

          return (
            <View key={tab.id} onLayout={handleRegisterLayout(index)}>
              <TabItem
                id={tab.id}
                label={tab.label}
                icon={tab.icon}
                focused={isFocused}
                onPress={onPress}
                onLongPress={onLongPress}
              />
            </View>
          );
        })}
      </Animated.View>
    </Animated.View>
  );
}

export function routeNameToIconName(name: string) {
  return {
    index: 'home',
    shop: 'search',
    favourites: 'heart',
    bag: 'shopping-bag',
    profile: 'user',
  }[name] as FeatherIconName;
}

export function BottomTabBar(props: BottomTabBarProps) {
  const { state, descriptors, navigation } = props;

  const insets = useSafeAreaInsets();

  const [isBottomTabBarForcedShown] = useRecoilState(bottomTabBarShown);
  const [isBottomTabBarContentHidden] = useRecoilState(bottomTabBarContentHidden);

  const currentTabIndex = state.index;

  // Determine if the tab bar should be shown
  // by checking if the current route has `tabBarShowLabel` set to `false`
  const tabBarShow = useMemo(() => {
    const currentRoute = state.routes[currentTabIndex];
    const currentDescriptor = descriptors[currentRoute.key];
    const { tabBarShowLabel } = currentDescriptor.options;

    return tabBarShowLabel || isBottomTabBarForcedShown;
  }, [state, descriptors, currentTabIndex, isBottomTabBarForcedShown]);

  const PADDING_BOTTOM = Math.max(insets.bottom, TAB_BAR_MARGIN);

  // Hide the tab bar if `tabBarShow` is set to `false`
  // by pushing it out the bottom of the screen
  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      transform: [
        {
          translateY: tabBarShow
            ? withTiming(0, {
                duration: 300,
                easing: Easing.out(Easing.sin),
              })
            : withTiming(TAB_BAR_HEIGHT + PADDING_BOTTOM, {
                duration: 200,
                easing: Easing.out(Easing.quad),
              }),
        },
      ],
    };
  });

  // Example taken from https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar
  const tabs = state.routes.map((route, index) => {
    const { options } = descriptors[route.key];

    const label = (
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
          ? options.title
          : route.name
    ) as string;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return {
      id: route.name,
      label,
      icon: routeNameToIconName(route.name)!,
      onPress,
      onLongPress,
    };
  });

  return (
    <View
      style={{
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        padding: TAB_BAR_MARGIN, // TODO: adjust for smaller devices
        paddingBottom: PADDING_BOTTOM,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      testID={'bottom-tab-bar'}>
      <Animated.View style={animatedContainerStyles}>
        <TabBar
          tabs={tabs}
          currentTabIndex={currentTabIndex}
          hideTabs={isBottomTabBarContentHidden}
          sharedTransitionTag={'bottom-tab-bar'}
        />
      </Animated.View>
    </View>
  );
}
export default BottomTabBar;
