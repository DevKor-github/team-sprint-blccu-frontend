import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';
import { Info } from 'lucide-react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { queries } from '@/queries';
import { type PropsWithOnNext } from '@/types/util';

const WatchRecordsStep = ({ onNext }: PropsWithOnNext) => {
  const router = useRouter();

  const { me } = useMeQuery();
  const { data: articleData } = useQuery({
    ...queries.articles.userLatest(me?.id),
    enabled: me !== undefined,
  });
  const { data: commentsData } = useQuery({
    ...queries.users.comments,
    enabled: me !== undefined,
  });

  if (me === undefined) {
    return null;
  }

  const articles = articleData?.data.data;
  const comments = commentsData?.data;

  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>회원 탈퇴</AppBarTitle>
      </AppBar>
      <div className="flex h-dvh flex-col justify-between gap-4">
        {/* FIXME: ScrollArea가 아니라 하단 버튼을 fixed로 바꾸는게 맞음  */}
        <ScrollArea>
          <div className="flex flex-col gap-4 px-6 pt-14">
            <p className="pt-4 text-lg font-bold">
              탈퇴하기 전 꼭 확인해주세요.
            </p>
            <div className="flex flex-col gap-4 rounded-md bg-blccu-neutral-200 p-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                  <h3 className="font-medium">
                    {me.username}님의 모든 게시글이 사라져요.
                  </h3>
                  <Info className="h-6 w-6 text-blccu-neutral-600" />
                </div>
                <p className="text-sm text-blccu-neutral-600">
                  지금까지 총 {articles?.length.toLocaleString() ?? 0}개의
                  게시글을 작성했어요.
                </p>
              </div>
              {articles?.map((article) => (
                <div
                  key={article.id}
                  className="flex flex-col gap-2 border-l-2 border-blccu-neutral-600 px-4 py-2"
                >
                  <p className="text-sm text-blccu-neutral-800">
                    {article.title}
                  </p>
                  <p className="text-xs text-blccu-neutral-600">
                    {article.mainDescription}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 rounded-md bg-blccu-neutral-200 p-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                  <h3 className="font-medium">
                    {me.username}님의 모든 댓글이 사라져요.
                  </h3>
                  <Info className="h-6 w-6 text-blccu-neutral-600" />
                </div>
                <p className="text-sm text-blccu-neutral-600">
                  지금까지 총 {comments?.length.toLocaleString() ?? 0}개의
                  댓글을 작성했어요.
                </p>
              </div>
              {comments?.map((comment) => (
                <div
                  key={comment.id}
                  className="flex flex-col gap-2 border-l-2 border-blccu-neutral-600 px-4 py-2"
                >
                  <p className="text-sm text-blccu-neutral-800">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
        <div className="flex w-full gap-2 px-4 pb-4">
          <Button
            size="lg"
            variant="destructive"
            className="flex-1"
            onClick={onNext}
          >
            탈퇴 계속하기
          </Button>
          <Button
            size="lg"
            className="flex-1"
            onClick={() => router.push(ROUTES.MANAGE_ACCOUNT)}
          >
            취소하기
          </Button>
        </div>
      </div>
    </>
  );
};

export { WatchRecordsStep };
