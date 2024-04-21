import Link from 'next/link';

import { EllipsisVertical } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { ReportCommentBottomActionSheet } from '@/features/comments-page/report-comment-bottom-action-sheet';

type CommentableListItemProps = {
  username: string;
  handle: string;
  profileImage: string;
  content: string;
};

const CommentableListItem = ({
  username,
  handle,
  profileImage,
  content,
}: CommentableListItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={ROUTES.USER_HANDLE_OF(handle)}>
            <Avatar size="xs">
              <AvatarImage src={profileImage} />
              <AvatarFallback className="bg-blccu-neutral-400" />
            </Avatar>
          </Link>
          <p className="text-sm font-medium">{username}</p>
        </div>
        <ReportCommentBottomActionSheet
          trigger={
            <IconButton>
              <EllipsisVertical className="h-4 w-4 text-blccu-neutral-400" />
            </IconButton>
          }
        />
      </div>
      <p className="text-sm text-blccu-neutral-600">{content}</p>
    </div>
  );
};

export { CommentableListItem };
