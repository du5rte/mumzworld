import { Text as RNText } from 'react-native';
import { createText } from '@shopify/restyle';

import { Theme } from '@/styles/themes';

export const Text = createText<Theme>(RNText);

Text.defaultProps = {
  variant: 'body',
};

export type TextProps = React.ComponentProps<typeof Text>;

export default Text;
