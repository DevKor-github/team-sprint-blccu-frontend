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
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { useUserDetailByHandleQuery } from '@/hooks/queries/use-user-detail-by-handle-query';
import { queries } from '@/queries';

type FollowingPageProps = {
  params: {
    userHandle: string;
  };
};

const FollowingPage = ({ params: { userHandle } }: FollowingPageProps) => {
  const { user, isExist } = useUserDetailByHandleQuery(userHandle);
  const { isSignedIn, me } = useMeQuery();

  const { data: followingsData } = useQuery({
    ...queries.users.followings(user?.id),
    enabled: isExist,
  });

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.users.followings(user?.id).queryKey,
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

  const users = followingsData?.data ?? [];

  return (
    <div>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>팔로잉 목록</AppBarTitle>
      </AppBar>
      <div className="pt-14">
        <div className="mt-4 flex flex-col gap-2 px-4">
          {users.map(({ isFollowing, ...user }, index) => {
            const isMe = me?.id === user.id;

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
                          onClick={() => unfollowMutate(user.id)}
                        >
                          팔로잉
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          radius="full"
                          disabled={isFollowPending}
                          onClick={() => followMutate(user.id)}
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

export default FollowingPage;
