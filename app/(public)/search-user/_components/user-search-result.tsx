'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';
import { TOAST_MESSAGES } from '@/constants/messages';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import { api } from '@/lib/api';
import { queries } from '@/queries';

type UserSearchResultProps = {
  search: string;
};

const UserSearchResult = ({ search }: UserSearchResultProps) => {
  const { isSignedIn, me } = useFetchMe();

  const { data: usersByNameData } = useQuery({
    ...queries.users.search(search),
    enabled: search.length > 0,
    placeholderData: (prevData) => prevData,
  });

  const queryClient = useQueryClient();

  const { mutate: followMutate, isPending: isFollowPending } = useMutation({
    mutationFn: (userId: number) =>
      api.users.followsControllerFollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.search(search).queryKey,
      });

      toast.success(TOAST_MESSAGES.FOLLOW_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.FOLLOW_FAIL);
    },
  });

  const { mutate: unfollowMutate, isPending: isUnfollowPending } = useMutation({
    mutationFn: (userId: number) =>
      api.users.followsControllerUnfollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.search(search).queryKey,
      });

      toast.success(TOAST_MESSAGES.UNFOLLOW_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UNFOLLOW_FAIL);
    },
  });

  const users = usersByNameData?.data ?? [];

  return (
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
  );
};

export { UserSearchResult };
