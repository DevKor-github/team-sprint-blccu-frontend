import Link from 'next/link';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useFollowMutation } from '@/hooks/mutations/use-follow-mutation';
import { useUnfollowMutation } from '@/hooks/mutations/use-unfollow-mutation';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { useModalStore } from '@/hooks/use-modal-store';
import { getFollowerDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type ArticlePageAuthorProfileSectionProps = {
  userId: number;
};

const ArticlePageAuthorProfileSection = ({
  userId,
}: ArticlePageAuthorProfileSectionProps) => {
  const { open } = useModalStore();

  const { isSignedIn, me } = useMeQuery();
  const { data: userData } = useQuery({
    ...queries.users.detailById(userId),
    retry: false,
  });
  const { data: followerData } = useQuery({
    ...queries.users.follower(userId),
    enabled: isSignedIn,
  });

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.users.follower(userId).queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: queries.users.detailById(userId).queryKey,
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

  const user = userData?.data;

  if (user === undefined) {
    return null;
  }

  const { username, profileImage, description } = user;
  const isMe = me?.id === user.id;
  const isFollowing = followerData?.data ?? false;
  const followerDescriptor = getFollowerDescriptor(user.followerCount);

  const handleUnfollowButtonClick = () => {
    unfollowMutate(user.id);
  };

  const handleFollowButtonClick = () => {
    if (!isSignedIn) {
      open('sign-in');
      return;
    }

    followMutate(user.id);
  };

  return (
    <section className="mx-4 my-12 flex items-center rounded-2xl px-2 py-8 shadow-blccu-secondary">
      <div className="flex flex-1 flex-col items-center gap-2">
        <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
          <Avatar>
            <AvatarImage src={profileImage} />
            <AvatarFallback className="bg-blccu-neutral-400" />
          </Avatar>
        </Link>
        <div className="flex flex-col items-center gap-1">
          <p className="font-medium">{username}</p>
          <p className="line-clamp-2 max-w-48 text-center text-xs text-blccu-neutral-500">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center gap-2">
        <>
          {isFollowing ? (
            <Button
              variant="secondary"
              radius="full"
              disabled={isUnfollowPending}
              onClick={handleUnfollowButtonClick}
            >
              팔로잉
            </Button>
          ) : (
            <Button
              radius="full"
              disabled={isFollowPending || isMe}
              onClick={handleFollowButtonClick}
            >
              팔로우
            </Button>
          )}
        </>
        <p className="text-xs text-blccu-neutral-500">{followerDescriptor}</p>
      </div>
    </section>
  );
};

export { ArticlePageAuthorProfileSection };
