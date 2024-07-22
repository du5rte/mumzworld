import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    children: 'Hello, world!',
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular: Story = {
  args: {
    children: 'Regular',
  },
};
export const Header: Story = {
  args: {
    children: 'Header',
    variant: 'header',
  },
};
export const Title: Story = {
  args: {
    children: 'Title',
    variant: 'title',
  },
};
export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
};
export const Description: Story = {
  args: {
    children: 'Description',
    variant: 'description',
  },
};
export const Detail: Story = {
  args: {
    children: 'Detail',
    variant: 'detail',
  },
};
