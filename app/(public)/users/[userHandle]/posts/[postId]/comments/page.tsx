'use client';

import { Fragment } from 'react';

import { useQuery } from '@tanstack/react-query';
import { CornerDownRight } from 'lucide-react';

import { CommentableListItem } from '@/app/(public)/users/[userHandle]/posts/[postId]/comments/_components/commentable-list-item';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { ChatInput } from '@/components/ui-unstable/chat-input';
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

  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>댓글</AppBarTitle>
      </AppBar>
      <div className="flex flex-col gap-2 px-4 pb-20 pt-16">
        {comments.map((comment, index) => (
          <div key={index}>
            <CommentableListItem comment={comment} me={me} />
            <div className="relative ml-7 mt-2 flex flex-col gap-2">
              {comment.children.map((child, index) => (
                <Fragment key={index}>
                  {index === 0 && (
                    <CornerDownRight className="absolute -left-7 top-2 h-4 w-4 text-blccu-neutral-400" />
                  )}
                  <CommentableListItem comment={child} me={me} />
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 mx-auto h-20 w-full max-w-screen-sm bg-blccu-white/80 backdrop-blur">
        <ChatInput postId={postId} />
      </div>
    </>
  );
};

export default CommentsPage;
