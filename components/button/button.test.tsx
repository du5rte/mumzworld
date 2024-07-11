import { render, screen } from '@/utils/test-utils';

import { Button } from './button';

describe('button.tsx', () => {
  it('renders correctly', () => {
    const value = 'Hello World!';
    render(<Button>{value}</Button>);
    expect(screen.getByText(value)).toBeDefined();
  });
});
