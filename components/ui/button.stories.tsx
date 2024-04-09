import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      exclude: ['asChild'],
    },
  },
};

type Story = StoryObj<typeof Button>;

const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

export { Playground };

export default meta;
