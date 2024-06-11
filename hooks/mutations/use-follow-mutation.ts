import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { toast } from 'sonner';

import { type FollowUserDto } from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

type UseFollowMutationProps = Omit<
  UseMutationOptions<AxiosResponse<FollowUserDto, any>, Error, number, unknown>,
  'mutationFn'
>;

const useFollowMutation = ({
  onSuccess,
  onError,
  ...rest
}: UseFollowMutationProps) => {
  return useMutation({
    mutationFn: (userId: number) =>
      api.users.followsControllerFollowUser(userId),
    onSuccess: (...props) => {
      if (onSuccess !== undefined) {
        onSuccess(...props);
      }

      toast.success(TOAST_MESSAGES.FOLLOW_SUCCESS);
    },
    onError: (...props) => {
      if (onError !== undefined) {
        onError(...props);
      }

      toast.error(TOAST_MESSAGES.FOLLOW_FAIL);
    },
    ...rest,
  });
};

export { useFollowMutation };
