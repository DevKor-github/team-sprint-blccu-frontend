'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { Settings, Share2 } from 'lucide-react';

import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { PostByCategorySection } from '@/features/user-handle-page/post-by-category-section';
import { UserHandlePageTrendingPostSection } from '@/features/user-handle-page/user-handle-page-trending-post-section';
import { UserProfileSection } from '@/features/user-handle-page/user-profile-section';
import { queries } from '@/queries';

type UserHandlePageProps = {
  params: {
    userHandle: string;
  };
};

const UserHandlePage = ({ params: { userHandle } }: UserHandlePageProps) => {
  const { data: userData } = useQuery({
    ...queries.users.detail(userHandle),
    retry: false,
  });

  const { data: meData } = useQuery({
    ...queries.users.me,
    retry: false,
  });

  const user = userData?.data;
  const me = meData?.data;

  if (user === undefined) {
    return null;
  }

  const isMe = me?.kakaoId === user.kakaoId;

  return (
    <div>
      <AppBar className="justify-between border-none bg-transparent text-white">
        <AppBarBack />
        <div className="flex items-center">
          <CopyCurrentPageTrigger asChild>
            <IconButton size="lg">
              <Share2 className="h-5 w-5" />
            </IconButton>
          </CopyCurrentPageTrigger>
          {isMe && (
            <Link href={ROUTES.SETTINGS}>
              <IconButton size="lg">
                <Settings className="h-5 w-5" />
              </IconButton>
            </Link>
          )}
        </div>
      </AppBar>
      <UserProfileSection user={user} />
      <PostByCategorySection user={user} />
      <UserHandlePageTrendingPostSection user={user} />
    </div>
  );
};

export default UserHandlePage;
