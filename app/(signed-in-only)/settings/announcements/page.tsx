'use client';

import { useQuery } from '@tanstack/react-query';

import {
  AppDetailBar,
  AppDetailBarTitle,
} from '@/components/ui-unstable/app-detail-bar';
import { StackedAnnouncementCard } from '@/components/ui-unstable/stacked-announcement-card';
import { queries } from '@/queries';

const AnnouncementsPage = () => {
  const { data } = useQuery(queries.announcements.all);

  const announcements = data?.data ?? [];

  /**
   * TODO: BE에 특정 공지사항 조회 API 제작 요청
   */
  return (
    <>
      <AppDetailBar>
        <AppDetailBarTitle>공지사항</AppDetailBarTitle>
      </AppDetailBar>
      <div className="flex flex-col gap-2 px-4 py-6">
        {announcements.map((announcement) => (
          <StackedAnnouncementCard
            key={announcement.id}
            announcement={announcement}
          />
        ))}
      </div>
    </>
  );
};

export default AnnouncementsPage;
