import { useQuery, useQueryClient } from '@tanstack/react-query';
import { EllipsisVertical, Heart, Share2 } from 'lucide-react';

import { type PostResponseDto } from '@/__generated__/data-contracts';
import { ReportPostBottomActionSheet } from '@/app/(public)/users/[userHandle]/posts/_components/report-post-bottom-action-sheet';
import { CopyCurrentPageTrigger } from '@/components/ui-unstable/copy-current-page-trigger';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { useLikeMutation } from '@/hooks/mutations/use-like-mutation';
import { useUnlikeMutation } from '@/hooks/mutations/use-unlike-mutation';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

type PostPageDetailActionsProps = {
  post: PostResponseDto;
};

const PostPageDetailActions = ({ post }: PostPageDetailActionsProps) => {
  const { id, user, like_count } = post;

  const { isSignedIn, me } = useFetchMe();

  const { data } = useQuery(queries.posts.like(id));

  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.posts.like(id).queryKey,
    });

    queryClient.invalidateQueries({
      queryKey: queries.posts.detail(id).queryKey,
    });
  };

  const { mutate: likeMutate, isPending: isLikePending } = useLikeMutation({
    onSuccess: invalidateQueries,
  });

  const { mutate: unlikeMutate, isPending: isUnlikePending } =
    useUnlikeMutation({
      onSuccess: invalidateQueries,
    });

  const like = data?.data ?? false;

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
        onClick={() => {
          if (like) {
            unlikeMutate(id);
          } else {
            likeMutate(id);
          }
        }}
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
