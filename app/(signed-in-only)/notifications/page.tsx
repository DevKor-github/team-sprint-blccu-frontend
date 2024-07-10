'use client';

import { useQuery } from '@tanstack/react-query';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedNotificationCard } from '@/components/ui-unstable/stacked-notificiation-card';
import { MILLISECONDS_IN_DAY } from '@/constants/constants';
import { queries } from '@/queries';

const NotificationsPage = () => {
  const { data } = useQuery(queries.notifications.all);

  const notifications = data?.data ?? [];

  const sortedNotificationsRecentFirst = [...notifications].sort(
    (a, b) =>
      new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime(),
  );

  const sortedNotificationFirstYesterdayIndex =
    sortedNotificationsRecentFirst.findIndex(
      ({ dateCreated }) =>
        new Date(dateCreated) < new Date(Date.now() - MILLISECONDS_IN_DAY),
    );

  const todayNotifications = sortedNotificationsRecentFirst.slice(
    0,
    sortedNotificationFirstYesterdayIndex,
  );

  const pastNotifications = sortedNotificationsRecentFirst.slice(
    sortedNotificationFirstYesterdayIndex,
  );

  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>알림</AppBarTitle>
      </AppBar>
      <div className="pb-6 pt-14">
        <Section className="px-4">
          <SectionTitle>오늘 알림</SectionTitle>
          <SectionContent>
            <div className="flex flex-col gap-4 rounded-lg p-4 shadow-blccu-secondary">
              {todayNotifications.map((notification, index) => (
                <StackedNotificationCard
                  key={index}
                  notification={notification}
                />
              ))}
            </div>
          </SectionContent>
        </Section>
        <Section className="px-4">
          <SectionTitle>지난 알림</SectionTitle>
          <SectionContent>
            <div className="flex flex-col gap-4 rounded-lg p-4 shadow-blccu-secondary">
              {pastNotifications.map((notification, index) => (
                <StackedNotificationCard
                  key={index}
                  notification={notification}
                />
              ))}
            </div>
          </SectionContent>
        </Section>
      </div>
    </>
  );
};

export default NotificationsPage;
