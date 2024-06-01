import Link from 'next/link';

import { Heart, MessageCircleMore, Share2 } from 'lucide-react';

import { type PostResponseDto } from '@/__generated__/data-contracts';
import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

type PostPageBottomBarProps = {
  post: PostResponseDto;
};

const PostPageBottomBar = ({
  post: { id, user, comment_count, like_count },
}: PostPageBottomBarProps) => {
  return (
    <div className="fixed bottom-0 mx-auto flex h-14 w-full max-w-md items-center justify-between bg-blccu-white/90 px-2 backdrop-blur-lg">
      <div className="flex items-center gap-1">
        <Button
          size="none"
          variant="ghost"
          className="flex items-center gap-1 px-2 py-1"
        >
          <Heart
            className={cn(
              'h-4 w-4',
              // like && 'fill-blccu-red text-blccu-red'
            )}
          />
          <Link href={ROUTES.LIKES_OF(user.handle, id)}>
            <p className="text-sm">{like_count.toLocaleString()}</p>
          </Link>
        </Button>
        <Link href={ROUTES.COMMENTS_OF(user.handle, id)}>
          <div className="flex items-center gap-1 px-2 py-1">
            <MessageCircleMore className="h-4 w-4" />
            <p className="text-sm">{comment_count.toLocaleString()}</p>
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
