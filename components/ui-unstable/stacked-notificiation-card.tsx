'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

import { type FetchNotiResponse } from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ROUTES } from '@/constants/routes';
import { getNotificationTypeDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type StackedNotificationCardProps = {
  notification: FetchNotiResponse;
};

const StackedNotificationCard = ({
  notification: {
    userKakaoId,
    targetUserKakaoId,
    type,
    is_checked,
    date_created,
  },
}: StackedNotificationCardProps) => {
  const { data: userData } = useQuery(
    queries.users.detailByKakaoId(userKakaoId),
  );
  const { data: targetUserData } = useQuery(
    queries.users.detailByKakaoId(targetUserKakaoId),
  );

  if (userData === undefined || targetUserData === undefined) {
    return null;
  }

  const user = userData.data;
  const targetUser = targetUserData.data;

  const notificationTypeDescriptor = getNotificationTypeDescriptor(type);

  const dateCreatedDescriptor = formatDistanceToNow(date_created, {
    addSuffix: true,
    locale: ko,
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 items-center gap-4">
        <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
          <Avatar size="xs">
            <AvatarImage src={user.profile_image} alt="avatar" />
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
