'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { queries } from '@/queries';

type FollowProps = {
  userId: number;
};

type UnfollowProps = {
  userId: number;
};

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
  const { data: followingsData } = useQuery({
    ...queries.users.followings(userData?.data.kakaoId),
    enabled: userData !== undefined,
  });

  const queryClient = useQueryClient();

  const { mutate: followMutate, isPending: isFollowPending } = useMutation({
    mutationFn: ({ userId }: FollowProps) =>
      api.users.followsControllerFollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.followings(userData?.data.kakaoId).queryKey,
      });

      toast.success(TOAST_MESSAGES.FOLLOW_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.FOLLOW_FAIL);
    },
  });

  const { mutate: unfollowMutate, isPending: isUnfollowPending } = useMutation({
    mutationFn: ({ userId }: UnfollowProps) =>
      api.users.followsControllerUnfollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.followings(userData?.data.kakaoId).queryKey,
      });

      toast.success(TOAST_MESSAGES.UNFOLLOW_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UNFOLLOW_FAIL);
    },
  });

  const me = meData?.data;

  const isSignedIn = me !== undefined;

  const users = followingsData?.data ?? [];

  return (
    <div>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>팔로잉 목록</AppBarTitle>
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
                          onClick={() =>
                            unfollowMutate({ userId: user.kakaoId })
                          }
                        >
                          팔로잉
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          radius="full"
                          disabled={isFollowPending}
                          onClick={() => followMutate({ userId: user.kakaoId })}
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
