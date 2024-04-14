import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};

type Story = StoryObj<typeof Select>;

const Disabled: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-full" disabled>
        <SelectValue placeholder="카테고리를 선택하세요." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">선택 안함</SelectItem>
        <SelectItem value="diary">일기</SelectItem>
        <SelectItem value="review">리뷰</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * TODO: replace Button -> RadioGroup (variant: button)
 */
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
        <div className="flex gap-2">
          <Button className="flex-1">공개</Button>
          <Button variant="secondary" className="flex-1">
            친구 공개
          </Button>
          <Button variant="secondary" className="flex-1">
            비공개
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">댓글 설정</h3>
        <div className="flex gap-2">
          <Button className="flex-1">댓글 허용</Button>
          <Button variant="secondary" className="flex-1">
            댓글 비허용
          </Button>
        </div>
      </div>
    </section>
  ),
};

export { Disabled, Example };
export default meta;
