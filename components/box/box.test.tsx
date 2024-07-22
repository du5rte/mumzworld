import { Text } from 'react-native';
import { render, screen } from '@/utils/tests/react-native';

import Box from './box';

describe('box', () => {
  it('should render children correctly', () => {
    render(
      <Box>
        <Text>Child Component</Text>
      </Box>
    );
    expect(screen.getByText('Child Component')).toBeDefined();
  });
});
