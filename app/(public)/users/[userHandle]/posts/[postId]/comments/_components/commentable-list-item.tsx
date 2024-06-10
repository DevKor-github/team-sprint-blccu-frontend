import Link from 'next/link';

import { EventHandler, type MouseEventHandler } from 'react';

import { EllipsisVertical } from 'lucide-react';

import {
  type ChildrenComment,
  type UserResponseDto,
} from '@/__generated__/data-contracts';
import { ReportCommentBottomActionSheet } from '@/app/(public)/users/[userHandle]/posts/[postId]/comments/_components/report-comment-bottom-action-sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

type CommentableListItemProps = {
  comment: ChildrenComment;
  me: UserResponseDto | undefined;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CommentableListItem = ({
  comment: { id, user, content, postsId, date_deleted },
  me,
  isSelected,
  onClick,
}: CommentableListItemProps) => {
  const isSignedIn = me !== undefined;
  const isMe = me?.kakaoId === user.kakaoId;

  const isDeleted = date_deleted !== null;

  return (
    <>
      {isDeleted ? (
        <p className="text-sm font-medium text-blccu-neutral-600">
          삭제된 댓글입니다.
        </p>
      ) : (
        <div
          className={cn(
            'flex flex-col px-2 py-1',
            isSelected && 'rounded-lg bg-blccu-neutral-200',
          )}
          onClick={onClick}
        >
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
      )}
    </>
  );
};

export { CommentableListItem };
