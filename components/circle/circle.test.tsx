import { render, screen } from '@/utils/test-utils';

import Circle from './circle';

describe('circle', () => {
  it('should renders correctly', () => {
    render(<Circle size={100} backgroundColor="primary" />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
