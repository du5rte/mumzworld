import { render, screen } from '@/utils/tests/react-native';

import TextHighlighter from './text-highlighter';

describe('TextHighlighter', () => {
  const text = 'Hello World';
  const searchText = 'World';

  it('should render text correctly', () => {
    render(<TextHighlighter>{text}</TextHighlighter>);

    expect(screen.getByText(text)).toBeDefined();
  });

  it('should render text correctly with empty highlight', () => {
    render(<TextHighlighter highlight="">{text}</TextHighlighter>);

    expect(screen.getByText(text)).toBeDefined();
  });

  it('should render text correctly with highlight', () => {
    render(<TextHighlighter highlight={searchText}>{text}</TextHighlighter>);

    expect(screen.getByText(text)).toBeDefined();
    expect(screen.getByText(searchText)).toHaveStyle({
      fontFamily: 'Inter-Bold',
    });
  });

  it('should render text correctly with multiple matches', () => {
    const multipleSearchText = 'o';

    render(<TextHighlighter highlight={multipleSearchText}>{text}</TextHighlighter>);

    expect(screen.getByText(text)).toBeDefined();
    expect(screen.getAllByText(multipleSearchText)).toBeDefined();
  });
});
