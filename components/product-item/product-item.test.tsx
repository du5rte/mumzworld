import React from 'react';
import { render, fireEvent, screen } from '@/utils/tests/react-native'; // Import 'screen' from testing library
import ProductItem from './product-item';

import product from '@/mocks/simple-product-en-usd.json';

describe('ProductItem', () => {
  it('should renders product name', () => {
    render(<ProductItem product={product} onPress={() => {}} />);
    expect(screen.getByText('$159.00')).toBeTruthy();
  });

  it('should renders product formatted price', () => {
    render(<ProductItem product={product} onPress={() => {}} />);
    expect(screen.getByText('$159.00')).toBeTruthy();
  });

  it('should calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    render(<ProductItem product={product} onPress={onPressMock} />);

    fireEvent.press(screen.getByText(product.name));

    expect(onPressMock).toHaveBeenCalledTimes(1);
    expect(onPressMock).toHaveBeenCalledWith(product);
  });
});
