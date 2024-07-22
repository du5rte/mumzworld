import { fireEvent, render, screen } from '@/utils/tests/react-native';
import ProductList from './product-list';

import product from '@/mocks/simple-products-en-usd.json';

describe('ProductList', () => {
  it('should render the list of products', () => {
    render(<ProductList products={product} onItemPress={() => {}} />);

    // Assert that each product item is rendered
    product.forEach((product) => {
      expect(screen.getByText(product.name)).toBeDefined();
    });
  });

  it('should call the onItemPress callback when a product item is pressed', () => {
    const mockOnItemPress = jest.fn();
    render(<ProductList products={product} onItemPress={mockOnItemPress} />);

    // Simulate pressing the first product item
    fireEvent.press(screen.getByText(product[0].name));

    // Assert that the onItemPress callback is called with the correct product
    expect(mockOnItemPress).toHaveBeenCalledWith(product[0]);
  });
});
