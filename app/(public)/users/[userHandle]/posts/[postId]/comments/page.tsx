'use client';

import { Fragment, type MouseEventHandler, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { CornerDownRight } from 'lucide-react';

import { type FetchCommentDto } from '@/__generated__/data-contracts';
import { CommentableListItem } from '@/app/(public)/users/[userHandle]/posts/[postId]/comments/_components/commentable-list-item';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { ChatInput } from '@/components/ui-unstable/chat-input';
import { truncate } from '@/lib/utils';
import { queries } from '@/queries';

type CommentsPageProps = {
  params: {
    userHandle: string;
    postId: number;
  };
};

const CommentsPage = ({
  params: { userHandle: _, postId },
}: CommentsPageProps) => {
  const { data: commentsData } = useQuery(queries.posts.comments(postId));

  const { data: meData } = useQuery({ ...queries.users.me, retry: false });

  const comments = commentsData?.data ?? [];

  const me = meData?.data;

  const [selectedComment, setSelectedComment] =
    useState<FetchCommentDto | null>(null);

  const getHandleCommentClick = (comment: FetchCommentDto | null) => {
    const handleCommentClick: MouseEventHandler<HTMLDivElement> = (event) => {
      event.stopPropagation();
      setSelectedComment(comment);
    };

    return handleCommentClick;
  };

  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>댓글</AppBarTitle>
      </AppBar>
      <div className="flex flex-col px-2 pb-28 pt-16">
        {comments.map((comment, index) => (
          <div key={index}>
            <CommentableListItem
              comment={comment}
              me={me}
              isSelected={
                selectedComment !== null && selectedComment.id === comment.id
              }
              onClick={getHandleCommentClick(comment)}
            />
            <div className="relative ml-7 flex flex-col">
              {comment.children.map((child, index) => (
                <Fragment key={index}>
                  {index === 0 && (
                    <CornerDownRight className="absolute -left-3 top-3 h-4 w-4 text-blccu-neutral-400" />
                  )}
                  <CommentableListItem
                    comment={child}
                    me={me}
                    onClick={getHandleCommentClick(comment)}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 mx-auto w-full max-w-screen-sm bg-blccu-white/80 backdrop-blur">
        {selectedComment && (
          <div className="flex items-center justify-between px-4 pt-1">
            <p className="text-sm font-medium text-blccu-neutral-600">
              <span className="rounded-lg bg-blccu-neutral-200 px-1">
                {truncate(selectedComment.content, 20)}
              </span>{' '}
              에 대한 답글
            </p>
            <button
              className="text-blccu-primary-500 text-sm font-medium"
              onClick={() => setSelectedComment(null)}
            >
              취소
            </button>
          </div>
        )}
        <div className="h-16 w-full">
          <ChatInput
            postId={postId}
            parentId={selectedComment?.id ?? undefined}
          />
        </div>
      </div>
    </>
  );
};

export default CommentsPage;
