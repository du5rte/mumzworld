import { render, screen } from '@testing-library/react-native';

import ProductScreen from '../[id]';

it('renders textual children', () => {
  render(<ProductScreen />);
  expect(screen.getByText('Product')).toBeDefined();
});
