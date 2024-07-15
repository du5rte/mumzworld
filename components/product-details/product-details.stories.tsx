import type { Meta, StoryObj } from '@storybook/react';

import { ProductDetails } from './product-details';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProductDetails> = {
  title: 'Product/ProductDetails',
  component: ProductDetails,
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
    // onPress: fn()
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetails>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // children: 'Press me',
  },
};