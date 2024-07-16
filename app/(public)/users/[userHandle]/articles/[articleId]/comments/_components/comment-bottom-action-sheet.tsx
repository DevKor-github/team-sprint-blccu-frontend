'use client';

import Link from 'next/link';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

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
import { queries } from '@/queries';
import { type PropsWithTrigger } from '@/types/util';

type CommentBottomActionSheetProps = {
  id: number;
  postId: number;
  isMe: boolean;
} & PropsWithTrigger;

const CommentBottomActionSheet = ({
  id,
  postId,
  isMe,
  trigger,
}: CommentBottomActionSheetProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (commentId: number) =>
      api.articles.commentsControllerDeleteComment(postId, commentId),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.DELETE_COMMENT_SUCCESS);

      /* FIXME: why not working? */
      queryClient.invalidateQueries({
        queryKey: queries.articles.comments(postId).queryKey,
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.DELETE_COMMENT_FAIL);
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
            <Link href={ROUTES.REPORT_COMMENT_ID_OF(id)}>
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

export { CommentBottomActionSheet };
