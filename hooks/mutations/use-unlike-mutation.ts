import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { toast } from 'sonner';

import { type FetchLikeResponseDto } from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

type UseUnlikeMutationProps = Omit<
  UseMutationOptions<
    AxiosResponse<FetchLikeResponseDto, any>,
    Error,
    number,
    unknown
  >,
  'mutationFn'
>;

const useUnlikeMutation = ({
  onSuccess,
  onError,
  ...rest
}: UseUnlikeMutationProps) => {
  return useMutation({
    mutationFn: (postId: number) => api.posts.likesControllerDeleteLike(postId),
    onSuccess: (...props) => {
      if (onSuccess !== undefined) {
        onSuccess(...props);
      }
    },
    onError: (...props) => {
      if (onError !== undefined) {
        onError(...props);
      }

      toast.error(TOAST_MESSAGES.UNLIKE_FAIL);
    },
    ...rest,
  });
};

export { useUnlikeMutation };
