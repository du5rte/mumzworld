import { render, screen } from '@/utils/test-utils';

import Text from './text';

describe('text', () => {
  it('should render correctly', () => {
    render(<Text />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
