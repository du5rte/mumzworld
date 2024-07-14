import { View } from 'react-native';
import { createBox } from '@shopify/restyle';

import { Theme } from '@/styles/themes';

export const Box = createBox<Theme>(View);

export type BoxProps = React.ComponentProps<typeof Box>;

export default Box;
