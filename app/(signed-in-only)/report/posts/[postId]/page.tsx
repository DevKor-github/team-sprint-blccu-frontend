'use client';

import { useRouter } from 'next/navigation';

import { type UUID } from 'crypto';
import { toast } from 'sonner';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { generatePost } from '@/lib/utils';

const post = generatePost();

const { author, id: postId } = post;

type ReportPostIdPageProps = {
  params: {
    postId: UUID;
  };
};

const ReportPostIdPage = ({ params: { postId: _ } }: ReportPostIdPageProps) => {
  const router = useRouter();

  const handleClick = () => {
    toast.success(TOAST_MESSAGES.REPORT_POST_SUCCESS);

    router.push(ROUTES.POST_OF(author.handle, postId));
  };

  return (
    <>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>게시글 신고</AppBarTitle>
      </AppBar>
      <div className="flex h-dvh flex-col justify-between">
        <div className="px-4 pt-14">
          <RadioGroup defaultValue="spam" className="mt-4">
            <Label
              htmlFor="r1"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">스팸성 게시물</p>
              <RadioGroupItem value="spam" id="r1" />
            </Label>
            <Label
              htmlFor="r2"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">사기 또는 거짓의 게시물</p>
              <RadioGroupItem value="fraud" id="r2" />
            </Label>
            <Label
              htmlFor="r3"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">성적인 게시물</p>
              <RadioGroupItem value="sexual" id="r3" />
            </Label>
            <Label
              htmlFor="r4"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">기타 문제</p>
              <RadioGroupItem value="other" id="r3" />
            </Label>
          </RadioGroup>
          <Textarea
            className="mt-4"
            placeholder="자세한 신고 이유를 작성해주세요."
          />
        </div>
        <div className="flex w-full gap-2 px-4 pb-4">
          <Button
            variant="destructive"
            className="flex-1"
            onClick={handleClick}
          >
            신고하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default ReportPostIdPage;
