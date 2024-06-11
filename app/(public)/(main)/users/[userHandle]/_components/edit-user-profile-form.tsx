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
  useEditUserProfileForm,
} from '@/app/(public)/(main)/users/[userHandle]/_hooks/use-edit-user-profile-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { SheetFooter } from '@/components/ui/sheet';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { queries } from '@/queries';

type EditUserProfileFormProps = {
  user: UserResponseDto;
  defaultValues: UseFormProps<PatchUserProfileFormValues>['defaultValues'];
};

const EditUserProfileForm = ({
  user,
  defaultValues,
}: EditUserProfileFormProps) => {
  const { form, onSubmit } = useEditUserProfileForm({
    defaultValues,
    onSubmit: (values) => mutate(values),
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (dto: PatchUserInput) =>
      api.users.usersControllerPatchUser(dto),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.detailByHandle(user.handle).queryKey,
      });

      toast.success(TOAST_MESSAGES.UPDATE_USER_PROFILE_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UPDATE_USER_PROFILE_FAIL);
    },
  });

  const { mutate: uploadBackgroundImageMutate } = useMutation({
    mutationFn: (dto: ImageUploadDto) =>
      api.users.usersControllerUploadBackgroundImage(dto),

    onSuccess: () => {
      toast.success(TOAST_MESSAGES.UPLOAD_BACKGROUND_IMAGE_SUCCESS);

      queryClient.invalidateQueries({
        queryKey: queries.users.me.queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: queries.users.detailByHandle(user.handle).queryKey,
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

      queryClient.invalidateQueries({
        queryKey: queries.users.detailByHandle(user.handle).queryKey,
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

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="relative w-full">
          <div
            className="absolute h-32 w-full cursor-pointer rounded-2xl bg-blccu-neutral-400"
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
        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center">
            <FormField
              control={form.control}
              name={PATCH_USER_PROFILE_NAME.USERNAME}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <input {...field} className="w-full text-center text-lg" />
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
                    <input {...field} className="w-full text-center text-sm" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={PATCH_USER_PROFILE_NAME.DESCRIPTION}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input {...field} className="w-full text-center text-sm" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <SheetFooter className="mt-12">
          <Button
            className="mx-auto"
            radius="full"
            disabled={!isValid || !isDirty || isSubmitting}
          >
            수정
          </Button>
        </SheetFooter>
      </form>
    </Form>
  );
};

export { EditUserProfileForm };
