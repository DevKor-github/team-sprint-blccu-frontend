'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Settings, Share2 } from 'lucide-react';

import { PostByCategorySection } from '@/app/(public)/(main)/users/[userHandle]/_components/post-by-category-section';
import { UserHandlePageTrendingPostSection } from '@/app/(public)/(main)/users/[userHandle]/_components/user-handle-page-trending-post-section';
import { UserProfileSection } from '@/app/(public)/(main)/users/[userHandle]/_components/user-profile-section';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

type UserHandlePageProps = {
  params: {
    userHandle: string;
  };
};

const UserHandlePage = ({ params: { userHandle } }: UserHandlePageProps) => {
  const { data: userData } = useQuery({
    ...queries.users.detailByHandle(userHandle),
    retry: false,
  });

  const { me } = useMeQuery();

  const [isBelowProfileImageScrollY, setIsBelowProfileImageScrollY] =
    useState(false);

  const handleScroll = () => {
    setIsBelowProfileImageScrollY(window.scrollY > 128 - 56);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const user = userData?.data;

  if (user === undefined) {
    return null;
  }

  const isMe = me?.kakaoId === user.kakaoId;

  return (
    <div>
      <AppBar
        className={cn(
          'justify-between border-none',
          isBelowProfileImageScrollY
            ? 'bg-blccu-white/90 text-black backdrop-blur-lg'
            : 'bg-transparent text-white',
        )}
      >
        <AppBarBack />
        {isBelowProfileImageScrollY && (
          <AppBarTitle className="flex items-center">
            <Link
              href={ROUTES.USER_HANDLE_OF(user.handle)}
              className="flex items-center gap-3"
            >
              <Avatar size="xs">
                <AvatarImage src={user.profile_image} />
                <AvatarFallback className="bg-blccu-neutral-400" />
              </Avatar>
              <p className="text-sm font-medium">{user.username}</p>
            </Link>
          </AppBarTitle>
        )}
        <div className="flex items-center">
          <CopyCurrentPageTrigger asChild>
            <IconButton size="lg">
              <Share2 className="h-5 w-5" />
            </IconButton>
          </CopyCurrentPageTrigger>
          {isMe && (
            <IconButton size="lg" asChild>
              <Link href={ROUTES.SETTINGS}>
                <Settings className="h-5 w-5" />
              </Link>
            </IconButton>
          )}
        </div>
      </AppBar>
      <UserProfileSection user={user} />
      <UserHandlePageTrendingPostSection user={user} />
      <PostByCategorySection user={user} />
    </div>
  );
};

export default UserHandlePage;
