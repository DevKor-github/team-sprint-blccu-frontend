import { useQuery, useQueryClient } from '@tanstack/react-query';
import { EllipsisVertical, Heart, Share2 } from 'lucide-react';

import { ArticleBottomActionSheet } from '@/app/(public)/users/[userHandle]/articles/_components/article-bottom-action-sheet';
import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { useLikeMutation } from '@/hooks/mutations/use-like-mutation';
import { useUnlikeMutation } from '@/hooks/mutations/use-unlike-mutation';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { useModalStore } from '@/hooks/use-modal-store';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

type ArticlePageDetailActionsProps = {
  articleId: number;
};

const ArticlePageDetailActions = ({
  articleId,
}: ArticlePageDetailActionsProps) => {
  const { open } = useModalStore();

  const { isSignedIn, me } = useMeQuery();
  const { data: likeData } = useQuery(queries.articles.like(articleId));
  const { data: postData } = useQuery(queries.articles.detail(articleId));

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.articles.like(articleId).queryKey,
    });

    queryClient.invalidateQueries({
      queryKey: queries.articles.detail(articleId).queryKey,
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

  const { id, user, likeCount } = post;

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

  const isMe = me?.id === user.id;

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        {isSignedIn && (
          <ArticleBottomActionSheet
            id={id}
            me={me}
            isMe={isMe}
            trigger={
              <IconButton size="none">
                <EllipsisVertical className="h-5 w-5" />
              </IconButton>
            }
          />
        )}
        <CopyCurrentPageTrigger asChild>
          <IconButton size="none">
            <Share2 className="h-5 w-5" />
          </IconButton>
        </CopyCurrentPageTrigger>
      </div>
      <Button
        radius="full"
        disabled={isLikePending || isUnlikePending}
        onClick={toggleLikeMutate}
      >
        <div className="flex items-center gap-2">
          <Heart
            className={cn('h-5 w-5', like && 'fill-blccu-red text-blccu-red')}
          />
          <span>{likeCount}</span>
        </div>
      </Button>
    </div>
  );
};

export { ArticlePageDetailActions };
