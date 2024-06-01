'use client';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';
import { EllipsisVertical, Share2 } from 'lucide-react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconButton } from '@/components/ui/icon-button';
import { PostPageAllPostSection } from '@/features/post-page/post-page-all-post-section';
import { PostPageBottomBar } from '@/features/post-page/post-page-bottom-bar';
import { ReportPostBottomActionSheet } from '@/features/post-page/report-post-bottom-action-sheet';
import { UserHandlePageTrendingPostSection } from '@/features/user-handle-page/user-handle-page-trending-post-section';
import { queries } from '@/queries';

type PostPageProps = {
  params: {
    userHandle: string;
    postId: number;
  };
};

const PostPage = ({ params: { userHandle: _, postId } }: PostPageProps) => {
  const { data } = useQuery(queries.posts.detail(postId));

  const post = data?.data;

  if (post === undefined) {
    return null;
  }

  const { id, user, image_url } = post;

  return (
    <>
      <AppBar className="border-b-0 bg-blccu-white/90 backdrop-blur-lg">
        <AppBarBack />
        <div className="item-center flex w-full justify-between">
          <AppBarTitle className="flex items-center gap-3">
            <Avatar size="xs">
              <AvatarImage src={user.profile_image} />
              <AvatarFallback className="bg-blccu-neutral-400" />
            </Avatar>
            <p className="text-sm font-medium">{user.username}</p>
          </AppBarTitle>
          <ReportPostBottomActionSheet
            id={id}
            trigger={
              <IconButton size="lg">
                <EllipsisVertical className="h-5 w-5" />
              </IconButton>
            }
          />
        </div>
      </AppBar>
      <div className="pt-14">
        <Image
          src={image_url}
          alt="Post thumbnail"
          width={1280}
          height={2000}
        />
        <div className="flex items-center">
          <ReportPostBottomActionSheet
            id={id}
            trigger={
              <IconButton size="lg">
                <EllipsisVertical className="h-5 w-5" />
              </IconButton>
            }
          />
          <CopyCurrentPageTrigger asChild>
            <IconButton size="lg">
              <Share2 className="h-5 w-5" />
            </IconButton>
          </CopyCurrentPageTrigger>
        </div>
        <PostPageAllPostSection user={user} />
        <UserHandlePageTrendingPostSection user={user} />
        <div className="h-[24px]" />
      </div>
      <PostPageBottomBar post={post} />
    </>
  );
};

export default PostPage;
