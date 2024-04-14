import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@/components/ui/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

type Story = StoryObj<typeof Textarea>;

const Playground: Story = {
  args: {
    disabled: false,
    placeholder: '이런 점은 개선해주세요.',
  },
};

export { Playground };

export default meta;
