import { Theme } from '@/styles/themes';
import { useTheme } from '@shopify/restyle';

export default function useProducts() {
  const theme = useTheme<Theme>();
  return theme;
}
