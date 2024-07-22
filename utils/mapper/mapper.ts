import { Product, SimpleProduct } from '@/schema';
import { Currency } from '@/types/currencies';
import { FormattedProduct, FormattedSimpleProduct } from '@/types/product';
import { generateRandomHumanIntegers } from '../random/random-human-readable';
import { generateRandomFloat } from '../random';

export function roundUpDiscountPercentage(discount: number) {
  return Math.floor(discount / 5) * 5;
}
export function generateMockDetails() {
  const rating = generateRandomFloat(3, 5, 1).toFixed(1);
  const reviews = generateRandomHumanIntegers(16, 1568);
  const sold = generateRandomHumanIntegers(82, 3780);

  return { rating, reviews, sold };
}

export function formatName(name: string) {
  const brandName = name.split(' - ')[0];
  const formattedName = name.replace(`${brandName} - `, '');
  return formattedName;
}

type FormatttedPrices = Pick<FormattedSimpleProduct, 'finalPrice' | 'regularPrice' | 'percentOff'>;

export function formatPrices(product: SimpleProduct | Product, currency: Currency) {
  const prices: Partial<FormatttedPrices> = {};

  const price_range = product?.[currency === 'AED' ? 'price_range' : 'usd_price_range'];

  const { final_price, regular_price, discount } = price_range?.minimum_price || {};

  if (final_price?.value) {
    prices.finalPrice = final_price.value!;
  }

  if (regular_price && regular_price.value !== final_price?.value) {
    prices.regularPrice = regular_price.value!;
  }

  if (discount?.percent_off) {
    prices.percentOff = roundUpDiscountPercentage(discount?.percent_off);
  }

  return prices as FormatttedPrices;
}

export function mapSimpleProductMapper(
  product: SimpleProduct | Product,
  currency: Currency
): FormattedSimpleProduct {
  const mocks = generateMockDetails();

  const id = product.id!;
  const brand = product.brand_info?.title!;
  const name = formatName(product.name!);
  const image = product.small_image?.url!;
  const sku = product.sku!;

  const prices = formatPrices(product, currency);

  return {
    id,
    name,
    brand,
    sku,
    image,
    ...mocks,
    ...prices,
  };
}

export function mapProductMapper(product: Product, currency: Currency): FormattedProduct {
  const pro: Partial<FormattedProduct> = mapSimpleProductMapper(product, currency);

  pro.features = product.features!;

  if (product.brand_info?.img_src) {
    pro.brandImage = product.brand_info?.img_src;
  }

  if (product.media_gallery) {
    pro.mediaGallery = product.media_gallery.map((item) => ({
      position: item?.position!,
      url: item?.url!,
    }));
  }

  return pro as FormattedProduct;
}
