import { render, screen } from '@/utils/test-utils';

import { TabBar } from './bottom-tab-bar';
import { tabs } from './tabsMock';

describe('bottom-tab-bar', () => {
  it('should render correctly', () => {
    render(<TabBar currentTabIndex={1} tabs={tabs} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
  it('should contain a `tab-bar` test id', () => {
    render(<TabBar currentTabIndex={1} tabs={tabs} />);

    expect(screen.getByTestId('tab-bar')).toBeDefined();
  });

  it('should contain multiple `tab-bar-item` test ids', () => {
    render(<TabBar currentTabIndex={1} tabs={tabs} />);

    expect(screen.getAllByTestId(/tab-item/).length).toEqual(5);
  });

  it('should contain one focused `tab-item` test ids', () => {
    render(<TabBar currentTabIndex={1} tabs={tabs} />);

    expect(screen.getByTestId(/tab-item-\w+-focused/)).toBeDefined();
  });
});
