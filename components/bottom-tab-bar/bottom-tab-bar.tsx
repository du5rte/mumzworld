import React, { useMemo } from 'react';
import { I18nManager, LayoutChangeEvent, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import Feather from '@expo/vector-icons/Feather';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import useTheme from '@/hooks/useTheme';
import useBottomTabBarShown from '@/hooks/useBottomTabBarShownAtom';
import { withEaseOutQuad, withEaseOutSin } from '@/styles/timings';
import {
  TAB_SIZE,
  TAB_BAR_HEIGHT,
  TAB_BAR_MARGIN,
  TAB_ICON_SIZE,
} from './bottom-tab-bar-constants';
import Circle from '../circle';
import Box from '../box';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export type FeatherIconName = keyof typeof Feather.glyphMap;

export interface Tab {
  id: string;
  label: string;
  icon: FeatherIconName;
  onPress?: () => void;
  onLongPress?: () => void;
}

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

  const theme = useTheme();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      accessibilityLabel={label}
      testID={`tab-item-${props.id}${focused ? '-focused' : ''}`}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Circle size={TAB_SIZE}>
        <Feather
          name={icon}
          size={TAB_ICON_SIZE}
          color={focused ? theme.colors.primary : theme.colors.inactive}
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
}

export function TabBar(props: TabBarProps) {
  const {
    tabs,
    currentTabIndex = I18nManager.isRTL ? tabs.length - 1 : 0,
    onTabPress,
    onTabLongPress,
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

    // On RTL languages, we need to start from -300 to 0
    const startFrom = I18nManager.isRTL ? -tabsPositionsX.value[0] : 0;

    return {
      position: 'absolute',
      transform: [{ translateX: withEaseOutQuad(startFrom + currentX) }],
    };
  });

  return (
    <AnimatedBox
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="s"
      height={TAB_BAR_HEIGHT}
      borderRadius="circle"
      maxWidth={540}
      backgroundColor="black"
      testID={'tab-bar'}>
      <Box flex={1} flexDirection="row" justifyContent="space-between" borderRadius={'circle'}>
        <Animated.View style={indicatorAnimatedStyles}>
          <Circle size={TAB_SIZE} backgroundColor="primaryInvert" />
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
      </Box>
    </AnimatedBox>
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
export function BottomTabBar(props: BottomTabBarProps) {
  const { state, descriptors, navigation } = props;

  const insets = useSafeAreaInsets();

  const [isBottomTabBarForcedShown] = useBottomTabBarShown();

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
            ? withEaseOutSin(0)
            : withEaseOutQuad(TAB_BAR_HEIGHT + PADDING_BOTTOM),
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
        padding: TAB_BAR_MARGIN,
        paddingBottom: PADDING_BOTTOM,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      testID={'bottom-tab-bar'}>
      <Animated.View style={animatedContainerStyles}>
        <TabBar tabs={tabs} currentTabIndex={currentTabIndex} />
      </Animated.View>
    </View>
  );
}

export default BottomTabBar;
