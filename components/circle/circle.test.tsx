import { render } from '@/utils/test-utils';
import '@testing-library/jest-native/extend-expect';

import Circle from './circle';

describe('Circle', () => {
  it('applies correct size and borderRadius styles', () => {
    const size = 50;
    const { getByTestId } = render(<Circle size={size} testID="circle" />);

    expect(getByTestId('circle')).toHaveStyle({
      width: size,
      height: size,
      borderRadius: 9999,
    });
  });
});
