import { SimpleProduct } from '@/schema';
import { ProductSummary } from '@/types/product-summary';

export function mapSimpleProductMapper(product: SimpleProduct, i18n: any) {
  const en = i18n.language === 'en';
  const isNumber = (val: any) => typeof val === 'number';
  const formatCurrency = (val?: number | null): string =>
    isNumber(val) ? i18n.t('currency', { val }) : '';

  const price_range = product?.[en ? 'usd_price_range' : 'price_range'];
  const { final_price, regular_price } = price_range?.minimum_price || {};

  // Initialize an empty object for the result
  let result: Partial<ProductSummary> = {};

  // Dynamically add properties if they exist
  if (product.id) result.id = product.id;
  if (product.name) result.name = product.name;
  if (product.brand_info?.title) result.brand = product.brand_info.title;
  if (product.sku) result.sku = product.sku;
  if (final_price?.value) result.finalPrice = formatCurrency(final_price.value);
  if (regular_price && regular_price.value !== final_price?.value) {
    result.regularPrice = formatCurrency(regular_price.value);
  }
  if (product.small_image?.url) result.image = product.small_image.url;

  return result;
}
