'use client';

import Link from 'next/link';

import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

import { type NotificationsGetResponseDto } from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ROUTES } from '@/constants/routes';
import { getNotificationTypeDescriptor } from '@/lib/get-descriptor';

type StackedNotificationCardProps = {
  notification: NotificationsGetResponseDto;
};

const StackedNotificationCard = ({
  notification: { user, type, isChecked, dateCreated },
}: StackedNotificationCardProps) => {
  const notificationTypeDescriptor = getNotificationTypeDescriptor(type);

  const dateCreatedDescriptor = formatDistanceToNow(dateCreated, {
    addSuffix: true,
    locale: ko,
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 items-center gap-4">
        <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
          <Avatar size="xs">
            <AvatarImage src={user.profileImage} alt="avatar" />
            <AvatarFallback className="bg-blccu-neutral-400" />
          </Avatar>
        </Link>
        <div className="break-all text-sm">
          <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
            <span className="font-bold">{user.username}</span>
          </Link>
          <span>{notificationTypeDescriptor}</span>
        </div>
      </div>
      <p className="text-xs text-blccu-neutral-600">{dateCreatedDescriptor}</p>
    </div>
  );
};

export { StackedNotificationCard };
