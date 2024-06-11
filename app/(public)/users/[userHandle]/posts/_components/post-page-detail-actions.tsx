import { useQuery, useQueryClient } from '@tanstack/react-query';
import { EllipsisVertical, Heart, Share2 } from 'lucide-react';

import { ReportPostBottomActionSheet } from '@/app/(public)/users/[userHandle]/posts/_components/report-post-bottom-action-sheet';
import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { useLikeMutation } from '@/hooks/mutations/use-like-mutation';
import { useUnlikeMutation } from '@/hooks/mutations/use-unlike-mutation';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

type PostPageDetailActionsProps = {
  postId: number;
};

const PostPageDetailActions = ({ postId }: PostPageDetailActionsProps) => {
  const { isSignedIn, me } = useMeQuery();
  const { data: likeData } = useQuery(queries.posts.like(postId));
  const { data: postData } = useQuery(queries.posts.detail(postId));

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.posts.like(postId).queryKey,
    });

    queryClient.invalidateQueries({
      queryKey: queries.posts.detail(postId).queryKey,
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

  const { id, user, like_count } = post;

  const like = likeData?.data ?? false;

  const toggleLikeMutate = () => {
    if (like) {
      unlikeMutate(id);
    } else {
      likeMutate(id);
    }
  };

  const isMe = me?.kakaoId === user.kakaoId;
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        {isSignedIn && (
          <ReportPostBottomActionSheet
            id={id}
            me={me!}
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
          <span>{like_count}</span>
        </div>
      </Button>
    </div>
  );
};

export { PostPageDetailActions };
