import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { toast } from 'sonner';

import {
  type PatchUserInput,
  type UserResponseDto,
} from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

type UsePatchUserMutationProps = Omit<
  UseMutationOptions<
    AxiosResponse<UserResponseDto, any>,
    Error,
    PatchUserInput,
    unknown
  >,
  'mutationFn'
>;

const usePatchUserMutation = ({
  onSuccess,
  onError,
  ...rest
}: UsePatchUserMutationProps = {}) => {
  return useMutation({
    mutationFn: (dto: PatchUserInput) =>
      api.users.usersControllerPatchUser(dto),
    onSuccess: (...props) => {
      onSuccess?.(...props);
    },
    onError: (...props) => {
      onError?.(...props);

      toast.error(TOAST_MESSAGES.UPDATE_USER_PROFILE_FAIL);
    },
    ...rest,
  });
};

export { usePatchUserMutation };
