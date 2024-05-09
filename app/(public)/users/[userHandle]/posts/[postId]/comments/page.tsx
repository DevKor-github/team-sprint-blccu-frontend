import { Fragment } from 'react';

import { randomInt } from 'crypto';
import { CornerDownRight } from 'lucide-react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { ChatInput } from '@/components/ui-unstable/chat-input';
import { CommentableListItem } from '@/features/comments-page/commentable-list-item';
import { generateCommentsWithReplies } from '@/lib/utils';

type CommentsPageProps = {
  params: {
    userHandle: string;
    postId: number;
  };
};

const commentWithRepliesCount = randomInt(1, 10);

const commentsWithReplies = generateCommentsWithReplies(
  commentWithRepliesCount,
);

const CommentsPage = ({
  params: { userHandle: _, postId: __ },
}: CommentsPageProps) => {
  return (
    <>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>댓글</AppBarTitle>
      </AppBar>
      <div className="flex flex-col gap-2 px-4 pb-20 pt-14">
        <div className="h-2" />
        {commentsWithReplies.map((commentWithReplies, index) => (
          <div key={index}>
            <CommentableListItem
              username={commentWithReplies.comment.user.username}
              handle={commentWithReplies.comment.user.handle}
              profileImage={commentWithReplies.comment.user.profileImage}
              content={commentWithReplies.comment.content}
            />
            <div className="relative ml-10 mt-2 flex flex-col gap-2">
              {commentWithReplies.replies.map((reply, index) => (
                <Fragment key={index}>
                  {index === 0 && (
                    <CornerDownRight className="absolute -left-7 top-2 h-4 w-4 text-blccu-neutral-400" />
                  )}
                  <CommentableListItem
                    username={reply.user.username}
                    handle={reply.user.handle}
                    profileImage={reply.user.profileImage}
                    content={reply.content}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 mx-auto h-20 w-full max-w-md bg-blccu-white/80 backdrop-blur">
        <ChatInput />
      </div>
    </>
  );
};

export default CommentsPage;
