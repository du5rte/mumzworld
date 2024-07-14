import { render, screen } from '@/utils/test-utils';

import Box from './box';

describe('box', () => {
  it('should renders correctly', () => {
    render(<Box />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
