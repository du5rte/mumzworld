import mockResponse from '@/data/lite.json';
import { SimpleProduct } from '@/schema';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Box from '../box';
import ProductList, { ProductListProps } from './product-list';

const singleProducts = mockResponse.data.products.items as SimpleProduct[];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProductList> = {
  title: 'Product/ProductList',
  component: ProductList,
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
    list: singleProducts,
    onItemPress: fn(),
  },

  render: function Render(args: ProductListProps) {
    return (
      <Box flex={1} backgroundColor="surface">
        <ProductList {...args} />
      </Box>
    );
  },
};

export default meta;

type Story = StoryObj<typeof ProductList>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // children: 'Press me',
  },
};
