import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
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
    placeholder: '이름을 입력해주세요.',
  },
};

const WithLabel: Story = {
  args: {
    id: 'username',
    placeholder: '이름을 입력해주세요.',
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Label htmlFor={args.id}>유저 이름</Label>
      <Input {...args} />
    </div>
  ),
};

export { Playground, WithLabel };

export default meta;
