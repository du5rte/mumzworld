import { render, screen } from '@/utils/test-utils';

import Icon from './icon';

describe('icon.tsx', () => {
  it('should render correctly', () => {
    render(<Icon name="shopping-bag" size={28} color="primary" />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
