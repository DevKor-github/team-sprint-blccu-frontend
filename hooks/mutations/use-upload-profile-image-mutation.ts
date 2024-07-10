import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { toast } from 'sonner';

import {
  type ImageUploadRequestDto,
  type ImageUploadResponseDto,
} from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

type UseUploadProfileImageMutationProps = Omit<
  UseMutationOptions<
    AxiosResponse<ImageUploadResponseDto, any>,
    Error,
    ImageUploadRequestDto,
    unknown
  >,
  'mutationFn'
>;

const useUploadProfileImageMutation = ({
  onSuccess,
  onError,
  ...rest
}: UseUploadProfileImageMutationProps = {}) => {
  return useMutation({
    mutationFn: (dto: ImageUploadRequestDto) =>
      api.users.usersUpdateControllerPostProfileImage(dto),
    onSuccess: (...props) => {
      onSuccess?.(...props);

      toast.success(TOAST_MESSAGES.UPLOAD_PROFILE_IMAGE_SUCCESS);
    },
    onError: (...props) => {
      onError?.(...props);

      toast.error(TOAST_MESSAGES.UPLOAD_PROFILE_IMAGE_FAIL);
    },
    ...rest,
  });
};

export { useUploadProfileImageMutation };
