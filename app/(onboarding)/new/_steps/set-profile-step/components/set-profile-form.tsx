import { type ChangeEvent, useRef } from 'react';
import { type UseFormProps } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  type ImageUploadDto,
  type PatchUserInput,
  type UserResponseDto,
} from '@/__generated__/data-contracts';
import {
  PATCH_USER_PROFILE_NAME,
  type PatchUserProfileFormValues,
  useSetProfileForm,
} from '@/app/(onboarding)/new/_steps/set-profile-step/hooks/use-set-profile-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { queries } from '@/queries';
import { type PropsWithOnNext } from '@/types/util';

type SetProfileFormProps = {
  user: UserResponseDto;
  defaultValues: UseFormProps<PatchUserProfileFormValues>['defaultValues'];
} & PropsWithOnNext;

const SetProfileForm = ({
  user,
  defaultValues,
  onNext,
}: SetProfileFormProps) => {
  const { form, onSubmit } = useSetProfileForm({
    defaultValues,
    onSubmit: (values) => patchUserMutate(values),
  });

  const { mutate: patchUserMutate } = useMutation({
    mutationFn: (dto: PatchUserInput) =>
      api.users.usersControllerPatchUser(dto),

    onSuccess: () => {
      toast.success(TOAST_MESSAGES.UPDATE_USER_PROFILE_SUCCESS);

      if (onNext !== undefined) {
        onNext();
      }
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UPDATE_USER_PROFILE_FAIL);
    },
  });

  const queryClient = useQueryClient();

  const { mutate: uploadBackgroundImageMutate } = useMutation({
    mutationFn: (dto: ImageUploadDto) =>
      api.users.usersControllerUploadBackgroundImage(dto),

    onSuccess: () => {
      toast.success(TOAST_MESSAGES.UPLOAD_BACKGROUND_IMAGE_SUCCESS);

      queryClient.invalidateQueries({
        queryKey: queries.users.me.queryKey,
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UPLOAD_BACKGROUND_IMAGE_FAIL);
    },
  });

  const backgroundImageRef = useRef<HTMLInputElement>(null);

  const handleBackgroundImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (file === undefined) {
      return;
    }

    uploadBackgroundImageMutate({ file });
  };

  const { mutate: uploadProfileImageMutate } = useMutation({
    mutationFn: (imageUploadDto: ImageUploadDto) =>
      api.users.usersControllerUploadProfileImage(imageUploadDto),

    onSuccess: () => {
      toast.success(TOAST_MESSAGES.UPLOAD_PROFILE_IMAGE_SUCCESS);

      queryClient.invalidateQueries({
        queryKey: queries.users.me.queryKey,
      });
    },
  });

  const profileImageRef = useRef<HTMLInputElement>(null);

  const handleProfileImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file === undefined) {
      return;
    }

    uploadProfileImageMutate({ file });
  };

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex-1">
        <div className="flex h-full flex-col justify-between px-4 pt-14">
          <div className="mt-6 flex flex-col gap-3">
            <h1 className="text-xl font-bold">
              안녕하세요.
              <br />
              블로그 꾸미기 서비스 '블꾸'입니다.
            </h1>
            <p className="text-sm text-blccu-neutral-600">
              지금 블로그 기본 프로필을 설정해보세요.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
            <div className="relative w-full">
              <div
                className="absolute h-32 w-full cursor-pointer rounded-lg bg-blccu-neutral-400"
                onClick={() => backgroundImageRef.current?.click()}
                style={{
                  backgroundImage: `url(${user.background_image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="pt-24">
                <Avatar
                  size="xl"
                  className="mx-auto cursor-pointer"
                  onClick={() => profileImageRef.current?.click()}
                >
                  <AvatarImage src={user.profile_image} />
                  <AvatarFallback className="bg-blccu-neutral-600" />
                </Avatar>
                <input
                  ref={backgroundImageRef}
                  type="file"
                  className="hidden"
                  onChange={handleBackgroundImageUpload}
                />
                <input
                  ref={profileImageRef}
                  type="file"
                  className="hidden"
                  onChange={handleProfileImageUpload}
                />
              </div>
            </div>
            <div className="mt-4 flex w-full flex-col items-center gap-2">
              <FormField
                control={form.control}
                name={PATCH_USER_PROFILE_NAME.USERNAME}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <input
                        {...field}
                        className="w-full text-center text-lg"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={PATCH_USER_PROFILE_NAME.HANDLE}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <input
                        {...field}
                        className="w-full text-center text-sm"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={PATCH_USER_PROFILE_NAME.DESCRIPTION}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <input
                        {...field}
                        className="w-full text-center text-sm"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            size="lg"
            className="mb-4"
            disabled={!isValid || isSubmitting}
          >
            블꾸 시작하기
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { SetProfileForm };
