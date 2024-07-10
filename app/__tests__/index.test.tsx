import { render, screen } from '@testing-library/react-native';

import Index from '../index';

it('renders textual children', () => {
  render(<Index />);
  expect(screen.getByText('Products List')).toBeDefined();
});
