'use client';

import { type PropsWithChildren, useEffect } from 'react';

import { toast } from 'sonner';

import { type FetchNotiResponse } from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { PROXY_API_PREFIX } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { getNotificationTypeDescriptor } from '@/lib/get-descriptor';

const NotificationSubscriber = ({ children }: PropsWithChildren) => {
  const { me } = useMeQuery();

  useEffect(() => {
    if (me === undefined) {
      return;
    }

    const eventSource = new EventSource(
      `${PROXY_API_PREFIX}/notifications/subscribe`,
    );

    eventSource.onmessage = (event: any) => {
      const data = JSON.parse(event.data) as FetchNotiResponse;

      const { user, type } = data;

      const notificationTypeDescriptor = getNotificationTypeDescriptor(type);

      toast.info('[알림] ' + user.username + notificationTypeDescriptor);
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
