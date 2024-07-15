import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProductItem } from './product-item';
import { ProductSummary } from '@/types/product-summary';

const productItemMock = {
  id: 60484,
  name: 'Play And Go - Playmat & Storage Bag World Map Print - White',
  brand: 'Play & Go',
  sku: 'CNS-PGMAP',
  finalPrice: '$51.46',
  image: '',
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProductItem> = {
  title: 'Product/ProductItem',
  component: ProductItem,
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
    product: productItemMock as ProductSummary,
    onPress: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof ProductItem>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // children: 'Press me',
  },
};
