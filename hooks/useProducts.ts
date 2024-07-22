import { useMemo } from 'react';
import useSWR from 'swr';
import { useDebounce } from '@uidotdev/usehooks';
import { SimpleProduct } from '@/schema';
import { product_list_large } from '@/constants/endpoints';
import { mapSimpleProductMapper } from '@/utils/mapper';
import { FormattedSimpleProduct } from '@/types/product';
import useCurrency from './useCurrency';

const ENDPOINT = product_list_large;

export function useProducts() {
  const [currency] = useCurrency();

  const { data, error, isLoading, mutate } = useSWR(ENDPOINT);

  // Mapping the data to a simpler product list item here
  // instead of doing calculations and passing useHook inside each ListItem
  // also memorizing the result to avoid re-calculating
  const products = useMemo(
    () =>
      data?.data?.products?.items?.map((product: SimpleProduct, i: number) => {
        return mapSimpleProductMapper(product, currency) as FormattedSimpleProduct;
      }),
    [data, currency]
  );

  const loading = useDebounce(isLoading, 500);

  const refresh = () => {
    mutate(ENDPOINT);
  };

  return {
    products,
    loading,
    refresh,
    error,
  };
}
