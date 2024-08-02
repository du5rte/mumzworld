import { render, screen } from '@/utils/tests/react-native';

import Paragraph from './paragraph';

describe('paragraph', () => {
  it('should render children correctly', () => {
    render(<Paragraph>Child Component</Paragraph>);
    expect(screen.getByText('Child Component')).toBeDefined();
  });
});
