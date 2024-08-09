import { render, screen } from '@/utils/tests/react-native';
import { ThemeProvider } from '@shopify/restyle';

import Text from './text';
import { themes, themeVariants } from '@/styles/themes';
import { body } from '@/styles/fonts';

describe('text', () => {
  const text = 'Hello World';

  it('should render text correctly', () => {
    render(<Text>{text}</Text>);

    expect(screen.getByText(text)).toBeDefined();
  });

  it.each(themeVariants)(
    'should render default text styles correctly for %p theme',
    (themeVariant) => {
      const theme = themes[themeVariant];

      render(
        <ThemeProvider theme={theme}>
          <Text>{text}</Text>
        </ThemeProvider>
      );

      expect(screen.getByText(text)).toHaveStyle({
        fontSize: body.fontSize,
        lineHeight: body.lineHeight,
        color: theme.colors[body.color],
      });
    }
  );

  it('should render no text styles when using unstyled', () => {
    render(<Text variant="unstyled">{text}</Text>);

    expect(screen.getByText(text)).toHaveStyle({});
  });
});
