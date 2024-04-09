import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/ui/input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

type Story = StoryObj<typeof Input>;

const Playground: Story = {
  args: {
    type: 'text',
    disabled: false,
    placeholder: 'Write something...',
  },
};

export { Playground };

export default meta;
