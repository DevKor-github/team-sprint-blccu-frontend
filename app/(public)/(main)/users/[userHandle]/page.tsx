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
  const { data } = useQuery({
    ...queries.users.detail(userHandle),
    retry: false,
  });

  const user = data?.data;

  if (user === undefined) {
    return null;
  }

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
          <Link href={ROUTES.SETTINGS}>
            <div className="px-3 py-4">
              <Settings className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </AppBar>
      <UserProfileSection user={user} />
      <PostByCategorySection user={user} />
      <UserHandlePageTrendingPostSection user={user} />
    </div>
  );
};

export default UserHandlePage;
