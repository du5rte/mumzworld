import { fireEvent, render, screen } from '@/utils/test-utils';
import ProductList from './product-list';

describe('ProductList', () => {
  const mockList = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  it('should render the list of products', () => {
    render(<ProductList list={mockList} onItemPress={() => {}} />);

    // Assert that each product item is rendered
    mockList.forEach((product) => {
      expect(screen.getByText(product.name)).toBeDefined();
    });
  });

  it('should call the onItemPress callback when a product item is pressed', () => {
    const mockOnItemPress = jest.fn();
    render(<ProductList list={mockList} onItemPress={mockOnItemPress} />);

    // Simulate pressing the first product item
    fireEvent.press(screen.getByText(mockList[0].name));

    // Assert that the onItemPress callback is called with the correct product
    expect(mockOnItemPress).toHaveBeenCalledWith(mockList[0]);
  });
});
