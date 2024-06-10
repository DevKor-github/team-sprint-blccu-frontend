import Link from 'next/link';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Heart, MessageCircleMore, Share2 } from 'lucide-react';
import { toast } from 'sonner';

import { type PostResponseDto } from '@/__generated__/data-contracts';
import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { IconButton } from '@/components/ui/icon-button';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

type LikeProps = {
  postId: number;
};

type UnlikeProps = {
  postId: number;
};

type PostPageBottomBarProps = {
  post: PostResponseDto;
};

const PostPageBottomBar = ({
  post: { id, user, comment_count, like_count },
}: PostPageBottomBarProps) => {
  const { data } = useQuery(queries.posts.like(id));

  const queryClient = useQueryClient();

  const { mutate: likeMutate, isPending: isLikePending } = useMutation({
    mutationFn: ({ postId }: LikeProps) =>
      api.posts.likesControllerLike(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.posts.like(id).queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: queries.posts.detail(id).queryKey,
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.LIKE_FAIL);
    },
  });

  const { mutate: unlikeMutate, isPending: isUnlikePending } = useMutation({
    mutationFn: ({ postId }: UnlikeProps) =>
      api.posts.likesControllerDeleteLike(postId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queries.posts.like(id).queryKey,
      });

      await queryClient.invalidateQueries({
        queryKey: queries.posts.detail(id).queryKey,
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UNLIKE_FAIL);
    },
  });

  const like = data?.data ?? false;

  return (
    <div className="fixed bottom-0 mx-auto flex h-14 w-full max-w-screen-sm items-center justify-between bg-blccu-white/90 px-2 backdrop-blur-lg">
      <div className="flex items-center">
        <div className="flex items-center gap-1 px-2 py-1">
          <IconButton
            size="none"
            disabled={isLikePending || isUnlikePending}
            onClick={() => {
              if (like) {
                unlikeMutate({ postId: id });
              } else {
                likeMutate({ postId: id });
              }
            }}
          >
            <Heart
              className={cn('h-5 w-5', like && 'fill-blccu-red text-blccu-red')}
            />
          </IconButton>
          <Link href={ROUTES.LIKES_OF(user.handle, id)}>
            <p className="text-sm">{like_count.toLocaleString()}</p>
          </Link>
        </div>
        <Link href={ROUTES.COMMENTS_OF(user.handle, id)}>
          <div className="flex items-center gap-1 px-2 py-1">
            <MessageCircleMore className="h-5 w-5" />
            <p className="text-sm">{comment_count.toLocaleString()}</p>
          </div>
        </Link>
      </div>
      <CopyCurrentPageTrigger asChild>
        <IconButton size="lg">
          <Share2 className="h-5 w-5" />
        </IconButton>
      </CopyCurrentPageTrigger>
    </div>
  );
};

export { PostPageBottomBar };
