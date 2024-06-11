'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { EllipsisVertical } from 'lucide-react';

import { UserHandlePageTrendingPostSection } from '@/app/(public)/(main)/users/[userHandle]/_components/user-handle-page-trending-post-section';
import { PostPageAllPostSection } from '@/app/(public)/users/[userHandle]/posts/_components/post-page-all-post-section';
import { PostPageAuthorProfileSection } from '@/app/(public)/users/[userHandle]/posts/_components/post-page-author-profile-section';
import { PostPageBottomBar } from '@/app/(public)/users/[userHandle]/posts/_components/post-page-bottom-bar';
import { PostPageDetailActions } from '@/app/(public)/users/[userHandle]/posts/_components/post-page-detail-actions';
import { ReportPostBottomActionSheet } from '@/app/(public)/users/[userHandle]/posts/_components/report-post-bottom-action-sheet';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { ChatInput } from '@/components/ui-unstable/chat-input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { queries } from '@/queries';

type PostPageProps = {
  params: {
    userHandle: string;
    postId: number;
  };
};

const PostPage = ({ params: { userHandle: _, postId } }: PostPageProps) => {
  const { isSignedIn, me } = useMeQuery();
  const { data: postData } = useQuery(queries.posts.detail(postId));

  const post = postData?.data;

  if (post === undefined) {
    return null;
  }

  const { id, user, image_url } = post;
  const isMe = me?.kakaoId === user.kakaoId;

  return (
    <>
      <AppBar className="bg-blccu-white/90 backdrop-blur-lg">
        <AppBarBack />
        <div className="item-center flex w-full justify-between">
          <AppBarTitle className="flex items-center gap-3">
            <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
              <Avatar size="xs">
                <AvatarImage src={user.profile_image} />
                <AvatarFallback className="bg-blccu-neutral-400" />
              </Avatar>
            </Link>
            <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
              <p className="text-sm font-medium">{user.username}</p>
            </Link>
          </AppBarTitle>
          {isSignedIn && (
            <ReportPostBottomActionSheet
              id={id}
              me={me!}
              isMe={isMe}
              trigger={
                <IconButton size="lg">
                  <EllipsisVertical className="h-5 w-5" />
                </IconButton>
              }
            />
          )}
        </div>
      </AppBar>
      <div className="pt-14">
        <Image
          src={image_url}
          alt="Post thumbnail"
          width={1280}
          height={2000}
        />
        <PostPageDetailActions postId={post.id} />
        <div className="flex flex-col">
          <Link
            href={ROUTES.COMMENTS_OF(user.handle, post.id)}
            className="ml-4"
          >
            <p className="font-medium">댓글 더보기</p>
          </Link>
          <ChatInput postId={post.id} />
        </div>
        <PostPageAuthorProfileSection userKakaoId={user.kakaoId} />
        <UserHandlePageTrendingPostSection user={user} />
        <PostPageAllPostSection user={user} />
        <div className="h-[40px]" />
      </div>
      <PostPageBottomBar postId={post.id} />
    </>
  );
};

export default PostPage;
