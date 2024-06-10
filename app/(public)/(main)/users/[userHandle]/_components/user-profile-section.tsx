'use client';

import Link from 'next/link';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { List } from 'lucide-react';
import { toast } from 'sonner';

import { type UserResponseDto } from '@/__generated__/data-contracts';
import { EditUserProfileSheet } from '@/app/(public)/(main)/users/[userHandle]/_components/edit-user-profile-sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import {
  getFollowerDescriptor,
  getFollowingDescriptor,
} from '@/lib/get-descriptor';
import { queries } from '@/queries';

type FollowProps = {
  userId: number;
};

type UnfollowProps = {
  userId: number;
};

type UserProfileSectionProps = {
  user: UserResponseDto;
};

const UserProfileSection = ({ user }: UserProfileSectionProps) => {
  const {
    username,
    handle,
    description,
    profile_image,
    background_image,
    follower_count,
    following_count,
  } = user;

  const { data: meData } = useQuery({ ...queries.users.me, retry: false });

  const { data: followerData } = useQuery({
    ...queries.users.follower(user.kakaoId),
    enabled: meData !== undefined,
  });

  const queryClient = useQueryClient();

  const { mutate: followMutate, isPending: isFollowPending } = useMutation({
    mutationFn: ({ userId }: FollowProps) =>
      api.users.followsControllerFollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.follower(user.kakaoId).queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: queries.users.detail(user.handle).queryKey,
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
        queryKey: queries.users.follower(user.kakaoId).queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: queries.users.detail(user.handle).queryKey,
      });

      toast.success(TOAST_MESSAGES.UNFOLLOW_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UNFOLLOW_FAIL);
    },
  });

  const me = meData?.data;

  const isSignedIn = me !== undefined;

  const isMe = me?.handle === handle;

  const isFollowing = followerData?.data ?? false;

  const followerDescriptor = getFollowerDescriptor(follower_count);
  const followingDescriptor = getFollowingDescriptor(following_count);

  return (
    <section className="flex flex-col items-center gap-8 pb-8 pt-14">
      <div
        className="absolute top-0 h-32 w-full max-w-md bg-cover bg-center"
        style={{
          backgroundImage: `url(${background_image})`,
        }}
      />
      <Avatar size="xl" className="mt-[40px]">
        <AvatarImage src={profile_image} />
        <AvatarFallback className="bg-blccu-neutral-400" />
      </Avatar>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">{username}</h2>
          <div className="flex flex-col items-center gap-1">
            <div className="break-all text-sm text-blccu-neutral-400">
              <Link href={ROUTES.FOLLOWERS_OF(handle)}>
                <span>{followerDescriptor}</span>
              </Link>
              <span>&nbsp;·&nbsp;</span>
              <Link href={ROUTES.FOLLOWING_OF(handle)}>
                <span>{followingDescriptor}</span>
              </Link>
            </div>
            <p className="max-w-72 text-center text-sm text-blccu-neutral-600">
              {description}
            </p>
          </div>
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
                    onClick={() => unfollowMutate({ userId: user.kakaoId })}
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
