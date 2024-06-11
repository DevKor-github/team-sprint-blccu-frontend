'use client';

import Link from 'next/link';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { List } from 'lucide-react';

import { type UserResponseDto } from '@/__generated__/data-contracts';
import { EditUserProfileSheet } from '@/app/(public)/(main)/users/[userHandle]/_components/edit-user-profile-sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useFollowMutation } from '@/hooks/mutations/use-follow-mutation';
import { useUnfollowMutation } from '@/hooks/mutations/use-unfollow-mutation';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import {
  getFollowerDescriptor,
  getFollowingDescriptor,
} from '@/lib/get-descriptor';
import { queries } from '@/queries';

type UserProfileSectionProps = {
  user: UserResponseDto;
};

const UserProfileSection = ({
  user: {
    username,
    kakaoId,
    handle,
    description,
    profile_image,
    background_image,
    follower_count,
    following_count,
  },
}: UserProfileSectionProps) => {
  const { me, isSignedIn } = useFetchMe();

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

  const isMe = me?.handle === handle;

  const isFollowing = followerData?.data ?? false;

  const followerDescriptor = getFollowerDescriptor(follower_count);
  const followingDescriptor = getFollowingDescriptor(following_count);

  return (
    <section className="flex flex-col items-center gap-8 pb-8 pt-14">
      <div
        className="absolute top-0 h-32 w-full max-w-screen-sm bg-cover bg-center"
        style={{
          backgroundImage: `url(${background_image})`,
        }}
      />
      <Avatar size="xl" className="mt-[42px]">
        <AvatarImage src={profile_image} />
        <AvatarFallback className="bg-blccu-neutral-400" />
      </Avatar>
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl font-semibold">{username}</h2>
        <div className="flex flex-col items-center gap-2">
          <div className="break-all text-sm text-blccu-neutral-500">
            <Link href={ROUTES.FOLLOWERS_OF(handle)}>
              <span>{followerDescriptor}</span>
            </Link>
            <span>&nbsp;·&nbsp;</span>
            <Link href={ROUTES.FOLLOWING_OF(handle)}>
              <span>{followingDescriptor}</span>
            </Link>
          </div>
          <p className="max-w-72 text-center text-sm">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          {isMe ? (
            <EditUserProfileSheet
              trigger={<Button radius="full">프로필 편집</Button>}
            />
          ) : (
            isSignedIn && (
              <>
                {isFollowing ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    radius="full"
                    disabled={isUnfollowPending}
                    onClick={() => unfollowMutate(kakaoId)}
                  >
                    팔로잉
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    radius="full"
                    disabled={isFollowPending}
                    onClick={() => followMutate(kakaoId)}
                  >
                    팔로우
                  </Button>
                )}
              </>
            )
          )}
          <Link href={ROUTES.SELECT_CATEGORY_OF(handle)}>
            <div className="p-4">
              <List className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { UserProfileSection };
