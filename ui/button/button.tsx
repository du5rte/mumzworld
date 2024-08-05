import { PressableProps } from 'react-native';
import { View, styled, withStaticProperties } from '@tamagui/core';

import Icon, { FeatherIconNames } from '@/components/icon';

import Text from '../text';

/**
 * Read guide: [How to build a button](https://tamagui.dev/docs/guides/how-to-build-a-button)
 */

const ButtonFrame = styled(View, {
  name: 'Button',

  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$s',
  animation: 'fast',
  pressStyle: {
    scale: 0.95,
  },

  variants: {
    size: {
      xs: {
        height: '$xs',
        paddingHorizontal: 14,
        borderRadius: 8,
      },
      s: {
        height: '$s',
        paddingHorizontal: 16,
        borderRadius: 10,
      },
      m: {
        height: '$m',
        paddingHorizontal: 18,
        borderRadius: 12,
      },
      l: {
        height: '$l',
        paddingHorizontal: 24,
        borderRadius: 15,
      },
      xl: {
        height: '$xl',
        paddingHorizontal: 32,
        borderRadius: 24,
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        },
      },
      secondary: {
        backgroundColor: '$background',
      },
      highlight: {
        backgroundColor: '$highlight',
        hoverStyle: {
          backgroundColor: '$highlightHover',
        },
        pressStyle: {
          backgroundColor: '$highlightPress',
        },
      },
    },
  } as const,
  defaultVariants: {
    size: 'm',
    variant: 'primary',
  },
});

const ButtonText = styled(Text, {
  name: 'ButtonText',

  fontWeight: '500',
  numberOfLines: 1,
  userSelect: 'none',

  animation: 'fast',

  variants: {
    size: {
      xs: {
        fontSize: 13,
      },
      s: {
        fontSize: 14,
      },
      m: {
        fontSize: 15,
      },
      l: {
        fontSize: 16,
      },
      xl: {
        fontSize: 17,
      },
    },
    variant: {
      primary: {
        color: '$contrast',
      },
      secondary: {
        color: '$primary',
        // hoverStyle: {
        //   color: '$secondary',
        // },
        // pressStyle: {
        //   color: '$secondaryPress',
        // },
      },
      highlight: {
        color: '$contrast',
        // pressStyle: {
        //   color: '$highlightPressContrast',
        // },
      },
    },
  } as const,
});

// export const Button = withStaticProperties(ButtonFrame, {
//   Text: ButtonText,
// });

export interface ButtonProps extends PressableProps {
  text?: string;
  // variant?: ButtonVariants;
  // size?: ButtonSizes;
  // shape?: ButtonShapes;
  disabled?: boolean;
  icon?: FeatherIconNames;
  // iconPosition?: ButtonIconPositions;
  elevate?: number;
  onPress?: PressableProps['onPress'];
}

export function Button(props: ButtonProps) {
  const { text, size = 'm', variant = 'primary', disabled, textProps, onPress, ...rest } = props;

  return (
    <ButtonFrame {...{ size, variant, disabled }} {...rest}>
      <ButtonText {...{ size, variant, disabled }} {...textProps}>
        {text}
      </ButtonText>
    </ButtonFrame>
  );
}

export default Button;
