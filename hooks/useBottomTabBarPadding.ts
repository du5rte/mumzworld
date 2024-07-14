import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  TAB_BAR_HEIGHT,
  TAB_BAR_MARGIN,
} from '@/components/bottom-tab-bar/bottom-tab-bar-constants';

export function useBottomTabBarPadding() {
  const insets = useSafeAreaInsets();
  return Math.max(insets.bottom, TAB_BAR_MARGIN) + TAB_BAR_HEIGHT + TAB_BAR_MARGIN;
}
