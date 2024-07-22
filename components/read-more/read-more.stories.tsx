import type { Meta, StoryObj } from '@storybook/react';

import { ReadMore } from './read-more';

const content =
  'Healthy food preparation, respecting the environment and the nutritional quality of foods\nUniform texture of preparations and adapted to the different stages of food diversification for baby\n1250 ml capacity stainless steel basket with ergonomic handle to easily transfer food at the end of the cooking cycle\nHigh quality glass bowl which does not degrade with time and preserves flavors\nHigh quality double level stainless steel blade to uniform tailored mixing \nStainless steel tank with wide opening for practical access and good filling level visibility\nSoft steam modulation cooking to preserve nutritional quality of foods, to collect the right amount of cooking juice, and to limit water consumption\nMade in France';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ReadMore> = {
  title: 'Components/ReadMore',
  component: ReadMore,
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
    content,
  },
};

export default meta;

type Story = StoryObj<typeof ReadMore>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // children: 'Press me',
  },
};
