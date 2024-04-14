import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/components/ui/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      options: [true, false, 'intermediate'],
      control: { type: 'radio' },
    },
  },
};

type Story = StoryObj<typeof Checkbox>;

const Playground: Story = {
  args: {
    checked: true,
  },
};

const Example: Story = {
  render: () => (
    <section>
      <div className="flex items-center justify-between py-2">
        <p className="text-sm">이용약관 동의 (필수)</p>
        <Checkbox />
      </div>
      <div className="flex items-center justify-between py-2">
        <p className="text-sm">개인정보 수집 및 이용동의 (필수)</p>
        <Checkbox />
      </div>
      <div className="flex items-center justify-between py-2">
        <p className="text-sm">광고성 정보 수신 동의 (선택)</p>
        <Checkbox />
      </div>
      <div className="flex items-center justify-between py-2">
        <p className="text-sm">동의 못함 (선택)</p>
        <Checkbox disabled />
      </div>
    </section>
  ),
};

export { Example, Playground };

export default meta;
