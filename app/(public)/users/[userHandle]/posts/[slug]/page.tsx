import Image from 'next/image';

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
import { generatePost } from '@/lib/utils';

const post = generatePost();

const { author, thumbnail } = post;

type PostPageProps = {
  params: {
    userHandle: string;
    slug: string;
  };
};

const PostPage = ({ params: { userHandle: _, slug: __ } }: PostPageProps) => {
  return (
    <>
      <AppBar className="border-b-0 bg-blccu-white/90 backdrop-blur-lg">
        <AppBarBack />
        <div className="item-center flex w-full justify-between">
          <AppBarTitle className="flex items-center gap-3">
            <Avatar size="xs">
              <AvatarImage src={author.profileImage} />
              <AvatarFallback className="bg-blccu-neutral-400" />
            </Avatar>
            <p className="text-sm font-medium">{author.username}</p>
          </AppBarTitle>
          <ReportPostBottomActionSheet
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
          src={thumbnail}
          alt="Post thumbnail"
          width={1280}
          height={2000}
        />
        <Image
          src={thumbnail}
          alt="Post thumbnail"
          width={1280}
          height={2000}
        />
        <div className="flex items-center">
          <ReportPostBottomActionSheet
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
        <PostPageAllPostSection user={author} />
        <UserHandlePageTrendingPostSection user={author} />
        <div className="h-[24px]" />
      </div>
      <PostPageBottomBar />
    </>
  );
};

export default PostPage;
