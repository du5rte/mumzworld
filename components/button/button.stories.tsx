import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './button';
import Box from '../box';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    title: 'Button',
    onPress: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Variations = () => (
  <Box flexDirection="row" gap="s">
    <Button title="Primary" variant="primary" />
    <Button title="Secondary" variant="secondary" />
    <Button title="Highlight" variant="highlight" />
  </Box>
);

export const Sizes = () => (
  <Box flexDirection="row" gap="s" alignItems="center">
    <Button title="Small" size="s" />
    <Button title="Medium" size="m" />
    <Button title="Large" size="l" />
    <Button title="X Large" size="xl" />
  </Box>
);

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Highlight: Story = {
  args: {
    variant: 'highlight',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
