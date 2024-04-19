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
import { MILLISECONDS_IN_DAY } from '@/constants/date';
import { generateUsers, randomDate, sampleSize } from '@/lib/utils';
import { type NotificationType } from '@/types/mocking-entity';

const NOTIFICATION_COUNT = 42;

const users = generateUsers(NOTIFICATION_COUNT);

const notificationTypes = Array<NotificationType>('comment', 'like', 'follow');

const commentTypes = sampleSize(notificationTypes, NOTIFICATION_COUNT);

const dates = Array.from({ length: NOTIFICATION_COUNT }, () =>
  randomDate(new Date(Date.now() - MILLISECONDS_IN_DAY * 3), new Date()),
);

const notifications = users.map((user, index) => ({
  user,
  type: commentTypes[index],
  sentAt: dates[index],
}));

const sortedNotificationsRecentFirst = [...notifications].sort(
  (a, b) => b.sentAt.getTime() - a.sentAt.getTime(),
);

const sortedNotificationFirstYesterdayIndex =
  sortedNotificationsRecentFirst.findIndex(
    ({ sentAt }) => sentAt < new Date(Date.now() - MILLISECONDS_IN_DAY),
  );

const todayNotifications = sortedNotificationsRecentFirst.slice(
  0,
  sortedNotificationFirstYesterdayIndex,
);

const pastNotifications = sortedNotificationsRecentFirst.slice(
  sortedNotificationFirstYesterdayIndex,
);

const NotificationsPage = () => {
  return (
    <>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>알림</AppBarTitle>
      </AppBar>
      <div className="pb-6 pt-14">
        <Section className="px-4">
          <SectionTitle>오늘 알림</SectionTitle>
          <SectionContent>
            <div className="flex flex-col gap-4 rounded-lg p-4 shadow-lg">
              {todayNotifications.map(({ user, type, sentAt }, index) => (
                <StackedNotificationCard
                  key={index}
                  user={user}
                  type={type}
                  sentAt={sentAt}
                />
              ))}
            </div>
          </SectionContent>
        </Section>
        <Section className="px-4">
          <SectionTitle>지난 알림</SectionTitle>
          <SectionContent>
            <div className="flex flex-col gap-4 rounded-lg p-4 shadow-lg">
              {pastNotifications.map(({ user, type, sentAt }, index) => (
                <StackedNotificationCard
                  key={index}
                  user={user}
                  type={type}
                  sentAt={sentAt}
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
