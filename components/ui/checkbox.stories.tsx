import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/components/ui/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

type Story = StoryObj<typeof Checkbox>;

const Example: Story = {};

export { Example };

export default meta;
