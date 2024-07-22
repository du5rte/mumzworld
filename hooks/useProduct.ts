import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import { useDebounce } from '@uidotdev/usehooks';
import { product_url } from '@/constants/endpoints';
import { mapProductMapper } from '@/utils/mapper';
import { FormattedProduct } from '@/types/product';
import { Product } from '@/schema';
import useCurrency from './useCurrency';

const ENDPOINT = product_url;

export function useProduct(id?: string) {
  const { i18n } = useTranslation();
  const [currency] = useCurrency();

  const { data, isLoading, error, mutate } = useSWR(ENDPOINT);

  // Mapping the data to a simpler product list item here
  // instead of doing calculations inside each ListItem
  // also memorizing the result to avoid re-calculating
  const product = useMemo(() => {
    if (data?.data?.product) {
      const prod = data?.data?.product?.find(
        (p: Product) => p.language === i18n.language
      ) as Product;

      return mapProductMapper(prod, currency) as FormattedProduct;
    }
  }, [data, currency, i18n]);

  const loading = useDebounce(isLoading, 500);

  const refresh = () => {
    mutate(ENDPOINT);
  };

  return {
    product,
    loading,
    refresh,
    error,
  };
}
