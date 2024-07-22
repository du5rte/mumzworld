import React from 'react';

import { Trans } from 'react-i18next';
import useCurrency from '@/hooks/useCurrency';

import Text, { TextProps } from '../text';

export const priceSizes = ['m', 'l', 'xl'] as const;

export type PriceSizes = (typeof priceSizes)[number];

export const priceVariants = ['regular', 'sale', 'line-through'] as const;

export type PriceVariants = (typeof priceVariants)[number];

export interface PriceProps extends Omit<TextProps, 'variant'> {
  value: number;
  size?: PriceSizes;
  variant?: PriceVariants;
}

const sizeProps: Record<PriceSizes, TextProps> = {
  m: {
    fontSize: 16,
    lineHeight: 24,
  },
  l: {
    fontSize: 18,
    lineHeight: 32,
  },
  xl: {
    fontSize: 28,
    lineHeight: 32,
  },
};

const variantProps: Record<PriceVariants, TextProps> = {
  regular: {
    color: 'primary',
  },
  sale: {
    color: 'highlight',
  },
  'line-through': {
    color: 'inactive',
    textDecorationLine: 'line-through',
  },
};

export function Price(props: PriceProps) {
  const { value, size = 'm', variant = 'regular', ...rest } = props;

  const [currency] = useCurrency();

  return (
    <Text
      variant="price"
      numberOfLines={1}
      {...sizeProps[size]}
      {...variantProps[variant]}
      {...rest}>
      <Trans i18nKey="price" values={{ val: value, currency }} />
    </Text>
  );
}

export default Price;
