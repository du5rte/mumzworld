import React from 'react';
import { render, fireEvent, screen } from '@/utils/test-utils'; // Import 'screen' from testing library
import ProductItem from './product-item';
import { ProductSummary } from '@/types/product-summary';

describe('ProductItem', () => {
  const product: Partial<ProductSummary> = {
    name: 'Test Product',
    image: 'https://example.com/image.jpg',
    finalPrice: '9.99',
    regularPrice: '19.99',
  };

  it('should renders product name', () => {
    render(
      <ProductItem
        width={100}
        height={100}
        product={product as ProductSummary}
        onPress={() => {}}
      />
    );
    expect(screen.getByText('Test Product')).toBeTruthy();
  });

  it('should calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    render(
      <ProductItem
        width={100}
        height={100}
        product={product as ProductSummary}
        onPress={onPressMock}
      />
    );

    fireEvent.press(screen.getByText('Test Product'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
    expect(onPressMock).toHaveBeenCalledWith(product);
  });
});
