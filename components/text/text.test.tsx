import { render, screen } from '@/utils/tests/react-native';

import Text from './text';

describe('text', () => {
  it('should render children correctly', () => {
    render(<Text>Child Component</Text>);
    expect(screen.getByText('Child Component')).toBeDefined();
  });
});
