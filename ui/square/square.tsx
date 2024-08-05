import { ThemeableStack } from '@tamagui/stacks';
import type { GetProps } from '@tamagui/core';
import { styled } from '@tamagui/core';

import { getShapeSize } from '@tamagui/shapes';

export const Square = styled(ThemeableStack, {
  name: 'Square',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    size: {
      '...size': getShapeSize,
      ':number': getShapeSize,
    },
  } as const,
});

export type SquareProps = GetProps<typeof Square>;

export default Square;
