import { render, screen } from '@/utils/test-utils';

import ProductPrice from './product-price';

describe('product-price', () => {
  it('should render the price and reduced correctly', () => {
    const price = '10.99';
    const reduced = '2.00';
    render(<ProductPrice finalPrice={price} regularPrice={reduced} />);

    const priceElement = screen.getByText(price);
    const reducedElement = screen.getByText(reduced);

    expect(priceElement).toBeDefined();
    expect(reducedElement).toBeDefined();
  });
});
