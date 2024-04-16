import { type Meta, type StoryObj } from '@storybook/react';
import { ChevronLeft, Pen } from 'lucide-react';

import {
  BottomActionSheet,
  BottomActionSheetContent,
  BottomActionSheetGroup,
  BottomActionSheetItem,
  BottomActionSheetSeparator,
  BottomActionSheetTrigger,
} from '@/components/ui-unstable/bottom-action-sheet';
import { IconButton } from '@/components/ui/icon-button';

const meta: Meta<typeof BottomActionSheet> = {
  title: 'Unstable/BottomActionSheet',
  component: BottomActionSheet,
};

type Story = StoryObj<typeof BottomActionSheet>;

const Example: Story = {
  render: () => (
    <div className="flex items-center justify-between">
      <IconButton>
        <ChevronLeft className="h-6 w-6" />
      </IconButton>
      <p className="text-lg font-bold">카테고리</p>
      <BottomActionSheet>
        <BottomActionSheetTrigger asChild>
          <IconButton>
            <Pen className="h-5 w-5" />
          </IconButton>
        </BottomActionSheetTrigger>
        <BottomActionSheetContent>
          <BottomActionSheetGroup>
            <BottomActionSheetItem>수정하기</BottomActionSheetItem>
            <BottomActionSheetSeparator />
            <BottomActionSheetItem className="text-blccu-red">
              삭제하기
            </BottomActionSheetItem>
            <BottomActionSheetSeparator />
          </BottomActionSheetGroup>
          <BottomActionSheetGroup>
            <BottomActionSheetItem>취소하기</BottomActionSheetItem>
          </BottomActionSheetGroup>
        </BottomActionSheetContent>
      </BottomActionSheet>
    </div>
  ),
};

export { Example };
export default meta;
