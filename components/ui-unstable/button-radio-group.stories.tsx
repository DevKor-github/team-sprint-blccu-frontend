import type { Meta, StoryObj } from '@storybook/react';

import {
  ButtonRadioGroup,
  ButtonRadioGroupItem,
} from '@/components/ui-unstable/button-radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const meta: Meta<typeof ButtonRadioGroup> = {
  title: 'Unstable/ButtonRadioGroup',
  component: ButtonRadioGroup,
};

type Story = StoryObj<typeof ButtonRadioGroup>;

const Example: Story = {
  render: () => (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">카테고리</h3>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="카테고리를 선택하세요." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">선택 안함</SelectItem>
            <SelectItem value="diary">일기</SelectItem>
            <SelectItem value="review">리뷰</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">공개 범위</h3>
        <ButtonRadioGroup className="flex gap-2" defaultValue="public">
          <ButtonRadioGroupItem value="public" className="flex-1">
            공개
          </ButtonRadioGroupItem>
          <ButtonRadioGroupItem value="friend" className="flex-1">
            팔로워 공개
          </ButtonRadioGroupItem>
          <ButtonRadioGroupItem value="private" className="flex-1">
            비공개
          </ButtonRadioGroupItem>
        </ButtonRadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">댓글 설정</h3>
        <ButtonRadioGroup className="flex gap-2" defaultValue="allow">
          <ButtonRadioGroupItem value="allow" className="flex-1">
            댓글 허용
          </ButtonRadioGroupItem>
          <ButtonRadioGroupItem value="disallow" className="flex-1">
            댓글 비허용
          </ButtonRadioGroupItem>
        </ButtonRadioGroup>
      </div>
    </section>
  ),
};

export { Example };
export default meta;
