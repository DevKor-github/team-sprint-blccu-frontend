import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

type Story = StoryObj<typeof RadioGroup>;

const Example: Story = {
  render: () => (
    <RadioGroup defaultValue="excessive-error">
      <Label htmlFor="r1" className="flex items-center justify-between py-2">
        <p className="font-normal">과도한 오류</p>
        <RadioGroupItem value="excessive-error" id="r1" />
      </Label>
      <Label htmlFor="r2" className="flex items-center justify-between py-2">
        <p className="font-normal">탈퇴 후 재가입</p>
        <RadioGroupItem value="rejoin-after-leave" id="r2" />
      </Label>
      <Label htmlFor="r3" className="flex items-center justify-between py-2">
        <p className="font-normal">기타 문제</p>
        <RadioGroupItem value="other" id="r3" />
      </Label>
      <Label htmlFor="r4" className="flex items-center justify-between py-2">
        <p className="font-normal">선택 못함</p>
        <RadioGroupItem value="disabled" id="r4" disabled />
      </Label>
    </RadioGroup>
  ),
};

export { Example };

export default meta;
