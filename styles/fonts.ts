import { Platform } from 'react-native';

/**
 * Inspired by shopify polaris
 * @see https://polaris.shopify.com/design/typography#section-display-styles
 */

const body = {
  fontFamily: 'Inter-Regular',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
  }),
  color: 'primary',
  fontSize: 16,
  lineHeight: 24,
};

const header = {
  fontFamily: 'Inter-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  }),
  fontSize: 20,
  lineHeight: 24,
};

const title = {
  fontFamily: 'Inter-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  }),
  fontSize: 16,
  lineHeight: 24,
};

const price = {
  fontFamily: 'NunitoSans-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'NunitoSans, sans-serif',
    fontWeight: 'Medium',
  }),
  color: 'primary',
  fontSize: 16,
  lineHeight: 24,
};

const info = {
  fontFamily: 'Inter-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  }),
  color: 'secondary',
  fontSize: 14,
  lineHeight: 16,
};

const description = {
  fontSize: 14,
  lineHeight: 20,
};

const detail = {
  fontSize: 12,
  lineHeight: 16,
};

export default {
  body,
  header,
  title,
  price,
  info,
  description,
  detail,
};
