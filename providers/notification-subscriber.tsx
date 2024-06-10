'use client';

import { type PropsWithChildren, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type FetchNotiResponse } from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { PROXY_API_PREFIX } from '@/constants/url';
import { getNotificationTypeDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

const NotificationSubscriber = ({ children }: PropsWithChildren) => {
  const { data: meData } = useQuery({ ...queries.users.me, retry: false });

  const me = meData?.data;

  useEffect(() => {
    if (me === undefined) {
      return;
    }

    const eventSource = new EventSource(
      `${PROXY_API_PREFIX}/notifications/subscribe`,
    );

    eventSource.onmessage = (event: any) => {
      const data = JSON.parse(event.data) as FetchNotiResponse;

      const { userKakaoId, type } = data;

      const notificationTypeDescriptor = getNotificationTypeDescriptor(type);

      toast.info('[알림] ' + userKakaoId + notificationTypeDescriptor);
    };

    eventSource.onerror = () => {
      toast.error(TOAST_MESSAGES.NOTIFICATION_CONNECT_FAIL);

      eventSource.close();
    };

    return () => eventSource.close();
  }, [me]);

  return <>{children}</>;
};

export { NotificationSubscriber };
