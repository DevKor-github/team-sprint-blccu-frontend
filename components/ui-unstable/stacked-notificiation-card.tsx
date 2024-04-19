import Link from 'next/link';

import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ROUTES } from '@/constants/routes';
import { getNotificationTypeDescriptor } from '@/lib/get-descriptor';
import { type NotificationType, type User } from '@/types/mocking-entity';

type StackedNotificationCardProps = {
  user: User;
  type: NotificationType;
  sentAt: Date;
};

const StackedNotificationCard = ({
  user: { username, handle, profileImage },
  type,
  sentAt,
}: StackedNotificationCardProps) => {
  const notificationTypeDescriptor = getNotificationTypeDescriptor(type);

  const sentAtDescriptor = formatDistanceToNow(sentAt, {
    addSuffix: true,
    locale: ko,
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 items-center gap-4">
        <Link href={ROUTES.USER_HANDLE_OF(handle)}>
          <Avatar size="xs">
            <AvatarImage src={profileImage} alt="avatar" />
            <AvatarFallback className="bg-blccu-neutral-400" />
          </Avatar>
        </Link>
        <div className="break-all text-sm">
          <Link href={ROUTES.USER_HANDLE_OF(handle)}>
            <span className="font-bold">{username}</span>
          </Link>
          <span>{notificationTypeDescriptor}</span>
        </div>
      </div>
      <p className="text-xs text-blccu-neutral-600">{sentAtDescriptor}</p>
    </div>
  );
};

export { StackedNotificationCard };
