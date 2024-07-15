import useSWR from 'swr';

import { SimpleProduct } from '@/schema';
import { product_list_lite } from '@/constants/endpoints';

const ENDPOINT = product_list_lite; // TODO: replace with product_list_large

export function useProducts() {
  const { data, isLoading, error, mutate } = useSWR(ENDPOINT);

  const singleProducts = data?.data?.products?.items as SimpleProduct[];

  const refresh = () => {
    // refresh posts
    mutate(ENDPOINT);
  };

  return {
    products: singleProducts,
    isLoading,
    refresh,
    error,
  };
}
