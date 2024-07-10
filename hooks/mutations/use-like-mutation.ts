import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { toast } from 'sonner';

import { type LikesGetResponseDto } from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

type UseLikeMutationProps = Omit<
  UseMutationOptions<
    AxiosResponse<LikesGetResponseDto, any>,
    Error,
    number,
    unknown
  >,
  'mutationFn'
>;

const useLikeMutation = ({
  onSuccess,
  onError,
  ...rest
}: UseLikeMutationProps = {}) => {
  return useMutation({
    mutationFn: (postId: number) => api.articles.likesControllerLike(postId),
    onSuccess: (...props) => {
      onSuccess?.(...props);
    },
    onError: (...props) => {
      onError?.(...props);

      toast.error(TOAST_MESSAGES.LIKE_FAIL);
    },
    ...rest,
  });
};

export { useLikeMutation };
