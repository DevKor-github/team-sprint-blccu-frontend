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

type LikesPageProps = {
  params: {
    userHandle: string;
    postId: number;
  };
};

const LikesPage = ({ params: { userHandle: _, postId } }: LikesPageProps) => {
  const { isSignedIn, me } = useFetchMe();

  const { data } = useQuery(queries.posts.likeUsers(postId));

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.posts.likeUsers(postId).queryKey,
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

  const users = data?.data ?? [];

  return (
    <div>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>공감</AppBarTitle>
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

export default LikesPage;
