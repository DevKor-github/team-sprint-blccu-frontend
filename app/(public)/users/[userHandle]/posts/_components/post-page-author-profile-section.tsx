import Link from 'next/link';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useFollowMutation } from '@/hooks/mutations/use-follow-mutation';
import { useUnfollowMutation } from '@/hooks/mutations/use-unfollow-mutation';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { getFollowerDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type PostPageAuthorProfileSectionProps = {
  userKakaoId: number;
};

const PostPageAuthorProfileSection = ({
  userKakaoId,
}: PostPageAuthorProfileSectionProps) => {
  const { isSignedIn, me } = useMeQuery();
  const { data: userData } = useQuery({
    ...queries.users.detailByKakaoId(userKakaoId),
    retry: false,
  });
  const { data: followerData } = useQuery({
    ...queries.users.follower(userKakaoId),
    enabled: isSignedIn,
  });

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.users.follower(userKakaoId).queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: queries.users.detailByKakaoId(userKakaoId).queryKey,
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

  const { username, profile_image, description } = user;
  const isMe = me?.kakaoId === user.kakaoId;
  const isFollowing = followerData?.data ?? false;
  const followerDescriptor = getFollowerDescriptor(user.follower_count);

  return (
    <section className="mx-4 my-12 flex flex-col items-center gap-6 rounded-2xl py-8 shadow-blccu-secondary sm:flex-row">
      <div className="flex flex-1 flex-col items-center gap-2">
        <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
          <Avatar>
            <AvatarImage src={profile_image} />
            <AvatarFallback className="bg-blccu-neutral-400" />
          </Avatar>
        </Link>
        <div className="flex flex-col items-center gap-1">
          <p className="font-medium">{username}</p>
          <p className="line-clamp-1 max-w-48 text-center text-xs text-blccu-neutral-500">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center gap-2">
        {isSignedIn && !isMe && (
          <>
            {isFollowing ? (
              <Button
                variant="secondary"
                radius="full"
                disabled={isUnfollowPending}
                onClick={() => unfollowMutate(user.kakaoId)}
              >
                팔로잉
              </Button>
            ) : (
              <Button
                radius="full"
                disabled={isFollowPending}
                onClick={() => followMutate(user.kakaoId)}
              >
                팔로우
              </Button>
            )}
          </>
        )}
        <p className="text-xs text-blccu-neutral-500">{followerDescriptor}</p>
      </div>
    </section>
  );
};

export { PostPageAuthorProfileSection };
