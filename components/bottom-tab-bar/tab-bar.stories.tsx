import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useArgs } from '@storybook/preview-api';

import { TabBar } from './bottom-tab-bar';

import type { TabBarProps } from './bottom-tab-bar';
import { tabs } from './tabs-mock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TabBar> = {
  title: 'Formations/TabBar',
  component: TabBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    currentTabIndex: {
      control: { type: 'range', min: 0, max: tabs.length, step: 1 },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    tabs,
    currentTabIndex: 1,
    onTabPress: fn(),
    onTabLongPress: fn(),
  },
  // render: (args) => <WrappedRender {...args} />,
  render: function Render(args: TabBarProps) {
    const [, updateArgs] = useArgs();

    return <TabBar {...args} onTabPress={(i) => updateArgs({ currentTabIndex: i })} />;
  },
};

export default meta;

type Story = StoryObj<typeof TabBar>;

export const Default: Story = {};
