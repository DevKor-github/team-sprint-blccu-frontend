import Link from 'next/link';

import { type MouseEventHandler } from 'react';

import { EllipsisVertical } from 'lucide-react';

import {
  type CommentChildrenDto,
  type UserDto,
} from '@/__generated__/data-contracts';
import { ReportCommentBottomActionSheet } from '@/app/(public)/users/[userHandle]/articles/[articleId]/comments/_components/report-comment-bottom-action-sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

type CommentableListItemProps = {
  comment: CommentChildrenDto;
  me: UserDto | undefined;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CommentableListItem = ({
  comment: { id, user, content, articleId, dateDeleted },
  me,
  isSelected,
  onClick,
}: CommentableListItemProps) => {
  const isSignedIn = me !== undefined;
  const isMe = me?.id === user.id;

  const isDeleted = dateDeleted !== null;

  return (
    <>
      {isDeleted ? (
        <p className="py-2 text-sm font-medium text-blccu-neutral-600">
          삭제된 댓글입니다.
        </p>
      ) : (
        <div
          className={cn(
            'flex flex-col gap-1 rounded-lg px-3 py-2',
            isSelected && 'shadow-blccu-secondary',
          )}
          onClick={onClick}
        >
          <div className="flex items-center justify-between">
            <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
              <div className="flex items-center gap-2">
                <Avatar size="xs">
                  <AvatarImage src={user.profileImage} />
                  <AvatarFallback className="bg-blccu-neutral-400" />
                </Avatar>
                <p className="text-sm font-medium">{user.username}</p>
              </div>
            </Link>
            {isSignedIn && (
              <ReportCommentBottomActionSheet
                id={id}
                postId={articleId}
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
