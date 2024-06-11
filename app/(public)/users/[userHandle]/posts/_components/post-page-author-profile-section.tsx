import Link from 'next/link';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { type UserPrimaryResponseDto } from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useFollowMutation } from '@/hooks/mutations/use-follow-mutation';
import { useUnfollowMutation } from '@/hooks/mutations/use-unfollow-mutation';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import { getFollowerDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type PostPageAuthorProfileSectionProps = {
  user: UserPrimaryResponseDto;
};

const PostPageAuthorProfileSection = ({
  user: { kakaoId, handle, username, description, profile_image },
}: PostPageAuthorProfileSectionProps) => {
  const { data: userData } = useQuery({
    ...queries.users.detailByHandle(handle),
    retry: false,
  });

  const { isSignedIn, me } = useFetchMe();

  const { data: followerData } = useQuery({
    ...queries.users.follower(kakaoId),
    enabled: isSignedIn,
  });

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.users.follower(kakaoId).queryKey,
    });

    queryClient.invalidateQueries({
      queryKey: queries.users.detailByHandle(handle).queryKey,
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
