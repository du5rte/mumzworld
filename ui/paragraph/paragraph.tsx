import { SizableText } from 'tamagui';
import { styled } from '@tamagui/core';
import type { GetProps } from '@tamagui/core';

/**
 *
 * Read more: https://tamagui.dev/ui/headings#heading
 */
export const Paragraph = styled(SizableText, {
  name: 'Paragraph',
  color: '$primary',
  variants: {
    variant: {
      body: {
        fontFamily: '$body',
        fontWeight: 400,
        size: '$3',
      },
      header: {
        fontFamily: '$heading',
        fontWeight: 500,
        size: '$5',
      },
      title: {
        fontFamily: '$heading',
        fontWeight: 500,
        size: '$3',
      },
      price: {
        fontFamily: '$mono',
        fontWeight: 500,
        size: '$3',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'body',
  },
});

export default Paragraph;

export type ParagraphProps = GetProps<typeof Paragraph>;
