import { render, screen } from '@/utils/test-utils';
import { composeStories } from '@storybook/testing-react';

import { Button } from './button';
import * as stories from './button.stories';

describe('button', () => {
  it('should render correctly', () => {
    const value = 'Hello World!';
    render(<Button title={value} />);
    expect(screen.toJSON()).toBeDefined();
  });

  it('should render text', () => {
    const value = 'Hello World!';
    render(<Button title={value} />);
    expect(screen.getByText(value)).toBeDefined();
  });
});

const { Primary, Secondary, Highlight } = composeStories(stories);

describe('button stories', () => {
  it('should render Primary story correctly', () => {
    render(<Primary />);
    expect(screen.toJSON()).toBeDefined();
  });

  it('should render Secondary story correctly', () => {
    render(<Secondary />);
    expect(screen.toJSON()).toBeDefined();
  });

  it('should render Highlight story correctly', () => {
    render(<Highlight />);
    expect(screen.toJSON()).toBeDefined();
  });
});
