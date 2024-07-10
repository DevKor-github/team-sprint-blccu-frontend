import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { toast } from 'sonner';

import { type FollowDto } from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

type UseUnfollowMutationProps = Omit<
  UseMutationOptions<AxiosResponse<FollowDto, any>, Error, number, unknown>,
  'mutationFn'
>;

const useUnfollowMutation = ({
  onSuccess,
  onError,
  ...rest
}: UseUnfollowMutationProps = {}) => {
  return useMutation({
    mutationFn: (userId: number) =>
      api.users.followsControllerUnfollowUser(userId),
    onSuccess: (...props) => {
      onSuccess?.(...props);

      toast.success(TOAST_MESSAGES.UNFOLLOW_SUCCESS);
    },
    onError: (...props) => {
      onError?.(...props);

      toast.error(TOAST_MESSAGES.UNFOLLOW_FAIL);
    },
    ...rest,
  });
};

export { useUnfollowMutation };
