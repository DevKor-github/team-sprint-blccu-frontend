'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';
import { useFollowMutation } from '@/hooks/mutations/use-follow-mutation';
import { useUnfollowMutation } from '@/hooks/mutations/use-unfollow-mutation';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { useModalStore } from '@/hooks/use-modal-store';
import { queries } from '@/queries';

type UserSearchResultProps = {
  search: string;
};

const UserSearchResult = ({ search }: UserSearchResultProps) => {
  const { open } = useModalStore();

  const { isSignedIn, me } = useMeQuery();

  const { data: usersByNameData } = useQuery({
    ...queries.users.search(search),
    enabled: search.length > 0,
    placeholderData: (prevData) => prevData,
  });

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.users.search(search).queryKey,
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

  const users = usersByNameData?.data ?? [];

  const handleUnfollowButtonClick = (kakaoId: number) => {
    unfollowMutate(kakaoId);
  };

  const handleFollowButtonClick = (kakaoId: number) => {
    if (!isSignedIn) {
      open('sign-in');
      return;
    }
    followMutate(kakaoId);
  };

  return (
    <div className="mt-4 flex flex-col gap-2 px-4">
      {users.map(({ isFollowing, ...user }, index) => {
        const isMe = me?.id === user.id;

        return (
          <StackedUserCard
            key={index}
            user={user}
            right={
              <>
                {isFollowing ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    radius="full"
                    disabled={isUnfollowPending}
                    onClick={() => handleUnfollowButtonClick(user.id)}
                  >
                    팔로잉
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    radius="full"
                    disabled={isFollowPending || isMe}
                    onClick={() => handleFollowButtonClick(user.id)}
                  >
                    팔로우
                  </Button>
                )}
              </>
            }
          />
        );
      })}
    </div>
  );
};

export { UserSearchResult };
