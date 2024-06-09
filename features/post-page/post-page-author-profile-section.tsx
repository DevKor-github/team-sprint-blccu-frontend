import Link from 'next/link';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type UserPrimaryResponseDto } from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import { getFollowerDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type FollowProps = {
  userId: number;
};

type UnfollowProps = {
  userId: number;
};

type PostPageAuthorProfileSectionProps = {
  user: UserPrimaryResponseDto;
};

const PostPageAuthorProfileSection = ({
  user: { kakaoId, handle, username, description, profile_image },
}: PostPageAuthorProfileSectionProps) => {
  const { data: userData } = useQuery({
    ...queries.users.detail(handle),
    retry: false,
  });

  const { data: meData } = useQuery({
    ...queries.users.me,
    retry: false,
  });

  const { data: followerData } = useQuery({
    ...queries.users.follower(kakaoId),
    enabled: meData !== undefined,
  });

  const queryClient = useQueryClient();

  const { mutate: followMutate, isPending: isFollowPending } = useMutation({
    mutationFn: ({ userId }: FollowProps) =>
      api.users.followsControllerFollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.follower(kakaoId).queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: queries.users.detail(handle).queryKey,
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
        queryKey: queries.users.follower(kakaoId).queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: queries.users.detail(handle).queryKey,
      });

      toast.success(TOAST_MESSAGES.UNFOLLOW_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UNFOLLOW_FAIL);
    },
  });

  const user = userData?.data;
  const me = meData?.data;

  if (user === undefined) {
    return null;
  }

  const isSignedIn = me !== undefined;

  const isMe = me?.kakaoId === user.kakaoId;

  const isFollowing = followerData?.data ?? false;

  const followerDescriptor = getFollowerDescriptor(user.follower_count);

  return (
    <section className="mx-4 my-12 flex items-center rounded-xl py-4 shadow-blccu-secondary">
      <div className="flex flex-1 flex-col items-center gap-2">
        <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
          <Avatar>
            <AvatarImage src={profile_image} />
            <AvatarFallback className="bg-blccu-neutral-400" />
          </Avatar>
        </Link>
        <div className="flex flex-col items-center">
          <p className="text-xs font-medium">{username}</p>
          <p className="line-clamp-1 max-w-40 text-center text-2xs text-blccu-neutral-400">
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
                onClick={() => unfollowMutate({ userId: user.kakaoId })}
              >
                팔로잉
              </Button>
            ) : (
              <Button
                radius="full"
                disabled={isFollowPending}
                onClick={() => followMutate({ userId: user.kakaoId })}
              >
                팔로우
              </Button>
            )}
          </>
        )}
        <p className="text-xs text-blccu-neutral-600">{followerDescriptor}</p>
      </div>
    </section>
  );
};

export { PostPageAuthorProfileSection };
