'use client';

import { type PropsWithChildren, useEffect } from 'react';

import { toast } from 'sonner';

import { type NotificationsGetResponseDto } from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { PROXY_API_PREFIX } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { getNotificationTypeDescriptor } from '@/lib/get-descriptor';

class EventSourceManager {
  private eventSource: EventSource;
  private retryCount: number = 0;
  private maxRetries: number = 3;
  private retryInterval: number = 5000; // 5 seconds

  constructor(
    url: string,
    onMessage: (data: NotificationsGetResponseDto) => void,
  ) {
    this.eventSource = new EventSource(url);
    this.eventSource.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data) as NotificationsGetResponseDto;
      onMessage(data);
    };

    this.eventSource.onerror = () => {
      this.handleError();
    };
  }

  private handleError() {
    this.retryCount = 0;
    this.reconnect();
  }

  private reconnect() {
    if (this.retryCount >= this.maxRetries) {
      toast.error(TOAST_MESSAGES.NOTIFICATION_CONNECT_FAIL);
      return;
    }

    setTimeout(() => {
      this.retryCount++;
      this.eventSource.close();
      this.eventSource = new EventSource(this.eventSource.url);
      this.eventSource.onmessage = this.eventSource.onmessage;
      this.eventSource.onerror = this.eventSource.onerror;
    }, this.retryInterval);
  }

  close() {
    this.eventSource.close();
  }
}

const NotificationSubscriber = ({ children }: PropsWithChildren) => {
  const { me } = useMeQuery();

  useEffect(() => {
    if (me === undefined) {
      return;
    }

    const eventSourceManager = new EventSourceManager(
      `${PROXY_API_PREFIX}/notifications/subscribe`,
      (data) => {
        const { user, type } = data;
        const notificationTypeDescriptor = getNotificationTypeDescriptor(type);
        toast.info('[알림] ' + user.username + notificationTypeDescriptor);
      },
    );

    return () => eventSourceManager.close();
  }, [me]);

  return <>{children}</>;
};

export { NotificationSubscriber };
