import { mapSimpleProductMapper } from './product';
import { SimpleProduct } from '@/schema';
import { ProductSummary } from '@/types/product-summary';

describe('mapSimpleProductMapper', () => {
  const mockI18n = {
    language: 'en',
    t: (key: string, { val }: { val?: number }) => `$${val}`,
  };

  it('should map all fields correctly for a complete product', () => {
    const product: SimpleProduct = {
      id: 1,
      name: 'Test Product',
      brand_info: { title: 'Test Brand' },
      sku: 'SKU123',
      usd_price_range: {
        minimum_price: {
          final_price: { value: 100 },
          regular_price: { value: 120 },
        },
      },
      small_image: { url: 'http://example.com/image.jpg' },
    };

    const expected: Partial<ProductSummary> = {
      id: 1,
      name: 'Test Product',
      brand: 'Test Brand',
      sku: 'SKU123',
      finalPrice: '$100',
      regularPrice: '$120',
      image: 'http://example.com/image.jpg',
    };

    expect(mapSimpleProductMapper(product, mockI18n)).toEqual(expected);
  });

  it('should omit undefined fields', () => {
    const product: SimpleProduct = {
      id: 2,
      name: 'Another Product',
      // brand_info is undefined
      sku: 'SKU456',
      // usd_price_range is undefined
      // small_image is undefined
    };

    const expected: Partial<ProductSummary> = {
      id: 2,
      name: 'Another Product',
      sku: 'SKU456',
      // No price or image
    };

    expect(mapSimpleProductMapper(product, mockI18n)).toEqual(expected);
  });

  it('should handle currency formatting correctly', () => {
    const product: SimpleProduct = {
      id: 3,
      usd_price_range: {
        minimum_price: {
          final_price: { value: 200 },
          regular_price: { value: 200 }, // Same as final_price
        },
      },
    };

    const expected: Partial<ProductSummary> = {
      id: 3,
      finalPrice: '$200',
      // No regularPrice since it's the same as finalPrice
    };

    expect(mapSimpleProductMapper(product, mockI18n)).toEqual(expected);
  });

  it('should use usd_price_range for English language', () => {
    const product: SimpleProduct = {
      id: 4,
      name: 'Product English',
      usd_price_range: {
        minimum_price: {
          final_price: { value: 300 },
          regular_price: { value: 350 },
        },
      },
    };

    const expected: Partial<ProductSummary> = {
      id: 4,
      name: 'Product English',
      finalPrice: '$300',
      regularPrice: '$350',
    };

    expect(mapSimpleProductMapper(product, mockI18n)).toEqual(expected);
  });
});
