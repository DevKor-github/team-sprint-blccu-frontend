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

type FollowingPageProps = {
  params: {
    userHandle: string;
  };
};

const FollowingPage = ({ params: { userHandle } }: FollowingPageProps) => {
  const { data: meData } = useQuery({ ...queries.users.me, retry: false });
  const { data: userData } = useQuery({
    ...queries.users.detail(userHandle),
    retry: false,
  });
  const { data: followingData } = useQuery({
    ...queries.users.following(userData?.data.kakaoId),
    enabled: userData !== undefined,
  });

  const me = meData?.data;

  const isSignedIn = me !== undefined;

  const users = followingData?.data ?? [];

  return (
    <div>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>팔로잉 목록</AppBarTitle>
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

export default FollowingPage;
