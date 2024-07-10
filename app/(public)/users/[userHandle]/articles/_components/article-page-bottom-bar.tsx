import Link from 'next/link';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Heart, MessageCircleMore, Share2 } from 'lucide-react';

import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { useLikeMutation } from '@/hooks/mutations/use-like-mutation';
import { useUnlikeMutation } from '@/hooks/mutations/use-unlike-mutation';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { useModalStore } from '@/hooks/use-modal-store';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

type ArticlePageBottomBarProps = {
  articleId: number;
};

const ArticlePageBottomBar = ({ articleId }: ArticlePageBottomBarProps) => {
  const { open } = useModalStore();

  const { isSignedIn } = useMeQuery();
  const { data: postData } = useQuery(queries.articles.detail(articleId));
  const { data: likeData } = useQuery(queries.articles.like(articleId));

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.articles.detail(articleId).queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: queries.articles.like(articleId).queryKey,
    });
  };

  const { mutate: likeMutate, isPending: isLikePending } = useLikeMutation({
    onSuccess: invalidateQueries,
  });

  const { mutate: unlikeMutate, isPending: isUnlikePending } =
    useUnlikeMutation({
      onSuccess: invalidateQueries,
    });

  const post = postData?.data;

  if (post === undefined) {
    return null;
  }

  const { id, user, commentCount, likeCount } = post;

  const like = likeData?.data ?? false;

  const toggleLikeMutate = () => {
    if (!isSignedIn) {
      open('sign-in');
      return;
    }

    if (like) {
      unlikeMutate(id);
    } else {
      likeMutate(id);
    }
  };

  return (
    <div className="fixed bottom-0 mx-auto flex h-14 w-full max-w-screen-sm items-center justify-between bg-blccu-white/90 px-2 backdrop-blur-lg">
      <div className="flex items-center">
        <div className="flex items-center gap-1 px-2 py-1">
          <IconButton
            size="none"
            disabled={isLikePending || isUnlikePending}
            onClick={toggleLikeMutate}
          >
            <Heart
              className={cn('h-5 w-5', like && 'fill-blccu-red text-blccu-red')}
            />
          </IconButton>
          <Link href={ROUTES.LIKES_OF(user.handle, id)}>
            <p className="text-sm">{likeCount.toLocaleString()}</p>
          </Link>
        </div>
        <Link href={ROUTES.COMMENTS_OF(user.handle, id)}>
          <div className="flex items-center gap-1 px-2 py-1">
            <MessageCircleMore className="h-5 w-5" />
            <p className="text-sm">{commentCount.toLocaleString()}</p>
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

export { ArticlePageBottomBar };
