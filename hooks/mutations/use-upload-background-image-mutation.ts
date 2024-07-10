import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { toast } from 'sonner';

import {
  type ImageUploadRequestDto,
  type ImageUploadResponseDto,
} from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

type UseUploadBackgroundImageMutationProps = Omit<
  UseMutationOptions<
    AxiosResponse<ImageUploadResponseDto, any>,
    Error,
    ImageUploadRequestDto,
    unknown
  >,
  'mutationFn'
>;

const useUploadBackgroundImageMutation = ({
  onSuccess,
  onError,
  ...rest
}: UseUploadBackgroundImageMutationProps = {}) => {
  return useMutation({
    mutationFn: (dto: ImageUploadRequestDto) =>
      api.users.usersUpdateControllerUploadBackgroundImage(dto),
    onSuccess: (...props) => {
      onSuccess?.(...props);

      toast.success(TOAST_MESSAGES.UPLOAD_BACKGROUND_IMAGE_SUCCESS);
    },
    onError: (...props) => {
      onError?.(...props);

      toast.error(TOAST_MESSAGES.UPLOAD_BACKGROUND_IMAGE_FAIL);
    },
    ...rest,
  });
};

export { useUploadBackgroundImageMutation };
