'use client';

import { Fragment, type MouseEventHandler, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { CornerDownRight } from 'lucide-react';

import { type CommentDto } from '@/__generated__/data-contracts';
import { CommentableListItem } from '@/app/(public)/users/[userHandle]/articles/[articleId]/comments/_components/commentable-list-item';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { ChatInput } from '@/components/ui-unstable/chat-input';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { truncate } from '@/lib/utils';
import { queries } from '@/queries';

type CommentsPageProps = {
  params: {
    userHandle: string;
    articleId: number;
  };
};

const CommentsPage = ({
  params: { userHandle: _, articleId },
}: CommentsPageProps) => {
  const { isSignedIn, me } = useMeQuery();

  const { data } = useQuery(queries.articles.comments(articleId));

  const comments = data?.data ?? [];

  const [selectedComment, setSelectedComment] = useState<CommentDto | null>(
    null,
  );

  const getHandleCommentClick = (comment: CommentDto | null) => {
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
            articleId={articleId}
            parentId={selectedComment?.id ?? undefined}
            disabled={!isSignedIn}
          />
        </div>
      </div>
    </>
  );
};

export default CommentsPage;
