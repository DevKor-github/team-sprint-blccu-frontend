import Link from 'next/link';

import { EllipsisVertical } from 'lucide-react';

import {
  type ChildrenComment,
  type UserResponseDto,
} from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { ReportCommentBottomActionSheet } from '@/features/comments-page/report-comment-bottom-action-sheet';

type CommentableListItemProps = {
  comment: ChildrenComment;
  me: UserResponseDto | undefined;
};

const CommentableListItem = ({
  comment: { id, user, content, postsId },
  me,
}: CommentableListItemProps) => {
  const isSignedIn = me !== undefined;
  const isMe = me?.kakaoId === user.kakaoId;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
          <div className="flex items-center gap-2">
            <Avatar size="xs">
              <AvatarImage src={user.profile_image} />
              <AvatarFallback className="bg-blccu-neutral-400" />
            </Avatar>
            <p className="text-sm font-medium">{user.username}</p>
          </div>
        </Link>
        {isSignedIn && (
          <ReportCommentBottomActionSheet
            id={id}
            postId={postsId}
            isMe={isMe}
            trigger={
              <IconButton>
                <EllipsisVertical className="h-4 w-4 text-blccu-neutral-400" />
              </IconButton>
            }
          />
        )}
      </div>
      <p className="text-sm text-blccu-neutral-600">{content}</p>
    </div>
  );
};

export { CommentableListItem };
