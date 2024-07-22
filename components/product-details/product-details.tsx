import React from 'react';
import { Image } from 'expo-image';
import { useTranslation, Trans } from 'react-i18next';
import useCurrency from '@/hooks/useCurrency';
import Box, { BoxProps } from '../box';
import Text from '../text';
import ProductStats from '../product-stats';
import { FormattedProduct } from '@/types/product';
import Icon from '../icon';
import ReadMore from '@/components/read-more';
import { ProductSaleBadge } from '../product-sale-badge';
import Price from '../price';
import useTheme from '@/hooks/useTheme';

export interface ProductDetailsProps extends BoxProps {
  product: FormattedProduct;
}

export function ProductDetails(props: ProductDetailsProps) {
  const { product } = props;

  const theme = useTheme();

  const { t } = useTranslation('translation', { keyPrefix: 'product' });
  const [currency] = useCurrency();

  return (
    <Box gap="m" padding="m" paddingHorizontal="xl" {...props}>
      <Text style={{ fontSize: 18, lineHeight: 32 }} color="primary">
        {product.name}
      </Text>

      <Box flexDirection="row" alignItems="center" gap="s">
        <Price
          value={product.finalPrice}
          size={currency === 'USD' ? 'xl' : 'l'}
          variant={product.regularPrice ? 'sale' : 'regular'}
        />
        {product.regularPrice && (
          <Price
            value={product.regularPrice}
            variant="line-through"
            size={currency === 'USD' ? 'xl' : 'l'}
          />
        )}
      </Box>

      <ProductStats {...product} />

      <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Image
          source={product.brandImage ? { uri: product.brandImage } : undefined}
          style={{ height: 24, width: 45 }}
          contentFit="contain"
        />
        <Text variant={'info'} color={'secondary'}>
          {t('exploreMoreBrand', { brand: product.brand })}
        </Text>
      </Box>

      <Box height={1} backgroundColor="surface" />

      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text variant="header">{t('description')}</Text>
        {product.percentOff && <ProductSaleBadge percent={product.percentOff} />}
      </Box>

      {product.features && <ReadMore content={product.features} numberOfLines={2} />}

      <Box
        height={100}
        flexDirection="row"
        alignItems="center"
        backgroundColor="surface"
        borderRadius="xl">
        <Box flex={1} alignItems="center" gap="s">
          <Icon name="star" size={24} color={theme.colors.primary} />
          <Text>
            <Trans
              i18nKey="fraction"
              values={{ val: product.rating }}
              components={{ secondary: <Text color="inactive" /> }}
            />
          </Text>
        </Box>
        <Box width={1} height={50} backgroundColor="divider" />
        <Box flex={1} alignItems="center" gap="s">
          <Icon name="tag" size={24} color={theme.colors.primary} />
          <Text variant="info">{t('value')}</Text>
        </Box>
        <Box width={1} height={50} backgroundColor="divider" />
        <Box flex={1} alignItems="center" gap="s">
          <Icon name="shield" size={24} color={theme.colors.primary} />
          <Text variant="info">{t('durable')}</Text>
        </Box>
        <Box width={1} height={50} backgroundColor="divider" />
        <Box flex={1} alignItems="center" gap="s">
          <Icon name="truck" size={24} color={theme.colors.primary} />
          <Text variant="info">{t('fast')}</Text>
        </Box>
      </Box>

      <Box height={400} backgroundColor="surface" borderRadius="xl" />

      <Box height={100} backgroundColor="surface" borderRadius="xl" />
    </Box>
  );
}

export default ProductDetails;
