import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './skeleton';
import Box from '../box';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onPress: fn()
    width: 100,
    height: 100,
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // children: 'Press me',
  },
};

export const Example = () => (
  <Box flex={1} gap="l" padding="m" paddingHorizontal="xl">
    <Skeleton height={24} width={120} borderRadius="m" />

    <Skeleton height={60} borderRadius="m" />
    <Skeleton height={200} borderRadius="m" />
    <Skeleton height={400} borderRadius="m" />
  </Box>
);
