import { useAtom } from 'jotai';
import { languageAtom } from '@/context/language-atom';

export default function useColorScheme() {
  return useAtom(languageAtom);
}
