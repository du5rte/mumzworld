import { fireEvent, render, screen } from '@/utils/test-utils';

import { Button } from './button';

describe('button', () => {
  const title = 'Test Button';

  it('should render text', () => {
    render(<Button title={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });

  it('should call onPress when pressed', () => {
    const title = 'Test Button';

    const onPressMock = jest.fn();

    render(<Button title={title} onPress={onPressMock} />);

    fireEvent.press(screen.getByText(title));

    expect(onPressMock).toHaveBeenCalled();
  });
});

/**
 * Example of testing multiple design variations of a component using Storybook stories
 * This is a more intuitive way of testing that the component matches the design
 *
 * Alternatively this could also be done using visual regression testing
 * https://storybook.js.org/docs/writing-tests/visual-testing

import { composeStories } from '@storybook/react';

import * as stories from './button.stories';

const { Primary, Secondary, Highlight } = composeStories(stories);

describe('button stories', () => {
  it('should render Primary story correctly', () => {
    render(<Primary />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should render Secondary story correctly', () => {
    render(<Secondary />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should render Highlight story correctly', () => {
    render(<Highlight />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});

*/
