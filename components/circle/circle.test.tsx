import { render } from '@/utils/tests/react-native';
import '@testing-library/jest-native/extend-expect';

import Circle from './circle';

describe('Circle', () => {
  it('applies correct size and borderRadius styles', () => {
    const size = 50;
    const { getByTestId } = render(<Circle size={size} testID="circle" />);

    // Testing only for requirement, colors and padding
    // are subjected to constant changes by designers
    expect(getByTestId('circle')).toHaveStyle({
      width: size,
      height: size,
      borderRadius: 9999,
    });
  });
});
