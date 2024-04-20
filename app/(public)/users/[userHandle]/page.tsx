import Link from 'next/link';

import { List, Settings } from 'lucide-react';

import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { EditUserProfileSheet } from '@/features/user-handle-page/edit-user-profile-sheet';
import { PostByCategorySection } from '@/features/user-handle-page/post-by-category-section';
import { UserHandlePageShareAction } from '@/features/user-handle-page/user-handle-page-share-action';
import { UserHandlePageTrendingPostSection } from '@/features/user-handle-page/user-handle-page-trending-post-section';
import {
  getFollowerDescriptor,
  getFollowingDescriptor,
} from '@/lib/get-descriptor';
import { generateUser } from '@/lib/utils';

const user = generateUser();

const {
  username,
  handle,
  description,
  profileImage,
  backgroundImage,
  followerCount,
  followingCount,
} = user;

const followerDescriptor = getFollowerDescriptor(followerCount);
const followingDescriptor = getFollowingDescriptor(followingCount);

type UserHandlePageProps = {
  params: {
    username: string;
  };
};

const UserHandlePage = ({ params: { username: _ } }: UserHandlePageProps) => {
  return (
    <div>
      <AppBar className="justify-between border-none bg-transparent text-white">
        <AppBarBack />
        <div className="flex items-center">
          <UserHandlePageShareAction />
          <Link href={ROUTES.SETTINGS}>
            <div className="px-3 py-4">
              <Settings className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </AppBar>
      <div className="flex flex-col items-center gap-8 pt-14">
        <div
          className="absolute top-0 h-40 w-full max-w-md bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <Avatar size="xl" className="mt-[74px]">
          <AvatarImage src={profileImage} />
          <AvatarFallback className="bg-blccu-neutral-400" />
        </Avatar>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">{username}</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="break-all text-xs text-blccu-neutral-400">
              <Link href={ROUTES.FOLLOWERS_OF(handle)}>
                <span>{followerDescriptor}</span>
              </Link>
              <span>&nbsp;·&nbsp;</span>
              <Link href={ROUTES.FOLLOWING_OF(handle)}>
                <span>{followingDescriptor}</span>
              </Link>
            </div>
            <p className="max-w-72 text-center text-sm text-blccu-neutral-600">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <EditUserProfileSheet trigger={<Button>프로필 수정</Button>} />
            <Link href={ROUTES.SELECT_CATEGORY_OF(handle)}>
              <div className="p-4">
                <List className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <PostByCategorySection user={user} />
      <UserHandlePageTrendingPostSection user={user} />
    </div>
  );
};

export default UserHandlePage;
