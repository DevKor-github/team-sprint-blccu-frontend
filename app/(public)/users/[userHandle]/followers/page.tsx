'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';
import { useFollowMutation } from '@/hooks/mutations/use-follow-mutation';
import { useUnfollowMutation } from '@/hooks/mutations/use-unfollow-mutation';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import { queries } from '@/queries';

type FollowersPageProps = {
  params: {
    userHandle: string;
  };
};

const FollowersPage = ({ params: { userHandle } }: FollowersPageProps) => {
  const { isSignedIn, me } = useFetchMe();

  const { data: userData } = useQuery({
    ...queries.users.detailByHandle(userHandle),
    retry: false,
  });
  const { data: followersData } = useQuery({
    ...queries.users.followers(userData?.data.kakaoId),
    enabled: userData !== undefined,
  });

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.users.followers(userData?.data.kakaoId).queryKey,
    });
  };

  const { mutate: followMutate, isPending: isFollowPending } =
    useFollowMutation({
      onSuccess: invalidateQueries,
    });

  const { mutate: unfollowMutate, isPending: isUnfollowPending } =
    useUnfollowMutation({
      onSuccess: invalidateQueries,
    });

  const users = followersData?.data ?? [];

  return (
    <div>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>팔로워 목록</AppBarTitle>
      </AppBar>
      <div className="pt-14">
        <div className="mt-4 flex flex-col gap-2 px-4">
          {users.map(({ isFollowing, ...user }, index) => {
            const isMe = me?.kakaoId === user.kakaoId;

            return (
              <StackedUserCard
                key={index}
                user={user}
                right={
                  isSignedIn &&
                  !isMe && (
                    <>
                      {isFollowing ? (
                        <Button
                          variant="secondary"
                          size="sm"
                          radius="full"
                          disabled={isUnfollowPending}
                          onClick={() => unfollowMutate(user.kakaoId)}
                        >
                          팔로잉
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          radius="full"
                          disabled={isFollowPending}
                          onClick={() => followMutate(user.kakaoId)}
                        >
                          팔로우
                        </Button>
                      )}
                    </>
                  )
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FollowersPage;
