import { useAtom } from 'jotai';
import { bottomTabBarShownAtom } from '@/context/bottom-tab-bar-shown';

export default function useBottomTabBarShown() {
  return useAtom(bottomTabBarShownAtom);
}
