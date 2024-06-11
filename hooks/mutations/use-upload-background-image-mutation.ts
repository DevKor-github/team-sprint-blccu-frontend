import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { toast } from 'sonner';

import {
  type ImageUploadDto,
  type ImageUploadResponseDto,
} from '@/__generated__/data-contracts';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

type UseUploadBackgroundImageMutationProps = Omit<
  UseMutationOptions<
    AxiosResponse<ImageUploadResponseDto, any>,
    Error,
    ImageUploadDto,
    unknown
  >,
  'mutationFn'
>;

const useUploadBackgroundImageMutation = ({
  onSuccess,
  onError,
  ...rest
}: UseUploadBackgroundImageMutationProps) => {
  return useMutation({
    mutationFn: (dto: ImageUploadDto) =>
      api.users.usersControllerUploadBackgroundImage(dto),
    onSuccess: (...props) => {
      if (onSuccess !== undefined) {
        onSuccess(...props);
      }

      toast.success(TOAST_MESSAGES.UPLOAD_BACKGROUND_IMAGE_SUCCESS);
    },
    onError: (...props) => {
      if (onError !== undefined) {
        onError(...props);
      }

      toast.error(TOAST_MESSAGES.UPLOAD_BACKGROUND_IMAGE_FAIL);
    },
    ...rest,
  });
};

export { useUploadBackgroundImageMutation };
