import { type Meta, type StoryObj } from '@storybook/react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { LeaveAlertDialog } from '@/features/set-reason-step/leave-alert-dialog';

const meta: Meta<typeof AlertDialogContent> = {
  title: 'Components/AlertDialog',
  component: AlertDialogContent,
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: { type: 'radio' },
    },
    side: {
      options: ['center', 'bottom'],
      control: { type: 'radio' },
    },
  },
};

type Story = StoryObj<typeof AlertDialogContent>;

const Playground: Story = {
  args: {},
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger>열기</AlertDialogTrigger>
      <AlertDialogContent {...args}>
        <AlertDialogHeader>
          <AlertDialogDescription>
            이 글을 삭제하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소하기</AlertDialogCancel>
          <AlertDialogAction>삭제하기</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

const Example: Story = {
  render: () => (
    <>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>회원 탈퇴</AppBarTitle>
      </AppBar>
      <div className="flex h-[calc(100dvh-32px)] flex-col justify-between">
        <div className="px-4 pt-14">
          <p className="pt-4 text-lg font-bold">회원 탈퇴 이유를 알려주세요.</p>
          <p className="text-sm text-blccu-neutral-600">
            더 나은 서비스를 위해 노력하겠습니다.
          </p>
          <RadioGroup defaultValue="excessive-error" className="mt-4">
            <Label
              htmlFor="r1"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">과도한 오류</p>
              <RadioGroupItem value="excessive-error" id="r1" />
            </Label>
            <Label
              htmlFor="r2"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">탈퇴 후 재가입</p>
              <RadioGroupItem value="rejoin-after-leave" id="r2" />
            </Label>
            <Label
              htmlFor="r3"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">기타 문제</p>
              <RadioGroupItem value="other" id="r3" />
            </Label>
          </RadioGroup>
          <Textarea
            className="mt-4"
            placeholder="자세한 탈퇴 이유를 작성해주세요."
          />
        </div>
        <div className="flex w-full gap-2 px-4 pb-4">
          <LeaveAlertDialog
            trigger={
              <Button variant="destructive" className="flex-1">
                탈퇴하기
              </Button>
            }
          />
          <Button className="flex-1">취소하기</Button>
        </div>
      </div>
    </>
  ),
};

export { Example, Playground };
export default meta;
