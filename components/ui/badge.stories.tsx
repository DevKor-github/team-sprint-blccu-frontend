import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline'],
      control: { type: 'radio' },
    },
  },
};

type Story = StoryObj<typeof Badge>;

const Playground: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export { Playground };

export default meta;
