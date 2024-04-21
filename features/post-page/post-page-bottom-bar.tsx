'use client';

import Link from 'next/link';

import { useState } from 'react';

import { Heart, MessageCircleMore, Share2 } from 'lucide-react';

import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { cn, generatePost, randomInt } from '@/lib/utils';

const post = generatePost();

const { slug, author } = post;

const initialLikeCount = randomInt(0, 1000);
const commentCount = randomInt(0, 30);

const PostPageBottomBar = () => {
  /**
   * @note
   * only for demo purposes
   *
   */
  // start-region
  const [like, setLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(initialLikeCount);

  const toggleLike = () => {
    setLike((prev) => !prev);
    setLikeCount((prev) => (like ? prev - 1 : prev + 1));
  };
  // end-region

  return (
    <div className="fixed bottom-0 mx-auto flex h-14 w-full max-w-md items-center justify-between bg-blccu-white/90 px-2 backdrop-blur-lg">
      <div className="flex items-center gap-1">
        <Button
          size="none"
          variant="ghost"
          className="flex items-center gap-1 px-2 py-1"
          onClick={toggleLike}
        >
          <Heart
            className={cn('h-4 w-4', like && 'fill-blccu-red text-blccu-red')}
          />
          <p className="text-sm">{likeCount.toLocaleString()}</p>
        </Button>
        <Link href={ROUTES.COMMENTS_OF(author.handle, slug)}>
          <div className="flex items-center gap-1 px-2 py-1">
            <MessageCircleMore className="h-4 w-4" />
            <p className="text-sm">{commentCount.toLocaleString()}</p>
          </div>
        </Link>
      </div>
      <CopyCurrentPageTrigger asChild>
        <IconButton size="lg">
          <Share2 className="h-4 w-4" />
        </IconButton>
      </CopyCurrentPageTrigger>
    </div>
  );
};

export { PostPageBottomBar };
