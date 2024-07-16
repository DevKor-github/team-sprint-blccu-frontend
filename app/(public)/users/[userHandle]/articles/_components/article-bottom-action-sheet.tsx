'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type UserDto } from '@/__generated__/data-contracts';
import {
  BottomActionSheet,
  BottomActionSheetContent,
  BottomActionSheetGroup,
  BottomActionSheetItem,
  BottomActionSheetSeparator,
  BottomActionSheetTrigger,
} from '@/components/ui-unstable/bottom-action-sheet';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import { type PropsWithTrigger } from '@/types/util';

type ArticleBottomActionSheetProps = {
  id: number;
  me: UserDto;
  isMe: boolean;
} & PropsWithTrigger;

const ArticleBottomActionSheet = ({
  id,
  me,
  isMe,
  trigger,
}: ArticleBottomActionSheetProps) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (articleId: number) =>
      api.articles.articlesDeleteControllerSoftDelete(articleId, {}),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.DELETE_POST_SUCCESS);

      /* 나만 삭제가 가능하기 때문에, 내 게시물 목록으로 이동합니다. */
      router.push(ROUTES.USER_HANDLE_OF(me.handle));
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.DELETE_POST_FAIL);
    },
  });

  return (
    <BottomActionSheet>
      <BottomActionSheetTrigger asChild>{trigger}</BottomActionSheetTrigger>
      <BottomActionSheetContent>
        <BottomActionSheetGroup>
          {isMe ? (
            <>
              <BottomActionSheetItem>수정하기</BottomActionSheetItem>
              <BottomActionSheetSeparator />
              <BottomActionSheetItem
                className="text-blccu-red"
                onClick={() => mutate(id)}
              >
                삭제하기
              </BottomActionSheetItem>
            </>
          ) : (
            <Link href={ROUTES.REPORT_ARTICLE_ID_OF(id)}>
              <BottomActionSheetItem className="text-blccu-red">
                신고하기
              </BottomActionSheetItem>
            </Link>
          )}
        </BottomActionSheetGroup>
        <BottomActionSheetGroup>
          <BottomActionSheetItem>취소하기</BottomActionSheetItem>
        </BottomActionSheetGroup>
      </BottomActionSheetContent>
    </BottomActionSheet>
  );
};

export { ArticleBottomActionSheet };
