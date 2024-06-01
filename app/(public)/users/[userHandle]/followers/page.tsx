'use client';

import { useQuery } from '@tanstack/react-query';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';
import { queries } from '@/queries';

type FollowersPageProps = {
  params: {
    userHandle: string;
  };
};

const FollowersPage = ({ params: { userHandle } }: FollowersPageProps) => {
  const { data: meData } = useQuery({ ...queries.users.me, retry: false });
  const { data: userData } = useQuery({
    ...queries.users.detail(userHandle),
    retry: false,
  });
  const { data: followersData } = useQuery({
    ...queries.users.followers(userData?.data.kakaoId),
    enabled: userData !== undefined,
  });

  const me = meData?.data;

  const isSignedIn = me !== undefined;

  const users = followersData?.data ?? [];

  return (
    <div>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>팔로워 목록</AppBarTitle>
      </AppBar>
      <div className="pt-14">
        <div className="mt-4 flex flex-col gap-2 px-4">
          {users.map(({ isFollowing, ...user }, index) => (
            <StackedUserCard
              key={index}
              user={user}
              right={
                isSignedIn && (
                  <>
                    {isFollowing ? (
                      <Button variant="secondary" size="sm" radius="full">
                        팔로잉
                      </Button>
                    ) : (
                      <Button size="sm" radius="full">
                        팔로우
                      </Button>
                    )}
                  </>
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowersPage;
