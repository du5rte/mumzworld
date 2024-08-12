import { Platform } from 'react-native';

/**
 * Inspired by shopify polaris
 * @see https://polaris.shopify.com/design/typography#section-display-styles
 */

export const body = {
  fontFamily: 'Inter-Regular',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
  }),
  color: 'primary' as const,
  fontSize: 16,
  lineHeight: 24,
};

export const semiBold = {
  fontFamily: 'Inter-SemiBold',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
  }),
};

export const bold = {
  fontFamily: 'Inter-Bold',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
  }),
};

export const header = {
  fontFamily: 'Inter-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  }),
  fontSize: 20,
  lineHeight: 24,
};

export const title = {
  fontFamily: 'Inter-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  }),
  fontSize: 16,
  lineHeight: 24,
};

export const price = {
  fontFamily: 'NunitoSans-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'NunitoSans, sans-serif',
    fontWeight: 'Medium',
  }),
  color: 'primary' as const,
  fontSize: 16,
  lineHeight: 24,
};

export const info = {
  fontFamily: 'Inter-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  }),
  color: 'secondary' as const,
  fontSize: 14,
  lineHeight: 16,
};

export const description = {
  fontSize: 14,
  lineHeight: 20,
};

export const detail = {
  fontSize: 12,
  lineHeight: 16,
};

export default {
  body,
  semiBold,
  bold,
  header,
  title,
  price,
  info,
  description,
  detail,
};
