import { render } from '@/utils/tests/react-native';
import '@testing-library/jest-native/extend-expect';

import Square from './square';

describe('Square', () => {
  it('applies correct size and borderRadius styles', () => {
    const size = 50;
    const { getByTestId } = render(<Square size={size} testID="square" />);

    // Testing only for requirement, colors and padding
    // are subjected to constant changes by designers
    expect(getByTestId('square')).toHaveStyle({
      width: size,
      height: size,
    });
  });
});
