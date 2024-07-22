import { colorSchemeAtom } from '@/context/color-scheme-atom';
import { useAtom } from 'jotai';

export default function useColorScheme() {
  return useAtom(colorSchemeAtom);
}
