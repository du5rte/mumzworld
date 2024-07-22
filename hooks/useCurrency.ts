import { useAtom } from 'jotai';
import { currencyAtom } from '@/context/currency-atom';

export default function useColorScheme() {
  return useAtom(currencyAtom);
}
