import { render, screen } from '@/utils/test-utils';

import Text from './text';

describe('text', () => {
  it('should render children correctly', () => {
    render(<Text>Child Component</Text>);
    expect(screen.getByText('Child Component')).toBeDefined();
  });
});
