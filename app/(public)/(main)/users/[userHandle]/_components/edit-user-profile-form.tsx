import { type UseFormProps } from 'react-hook-form';

import { useQueryClient } from '@tanstack/react-query';

import { type UserResponseDto } from '@/__generated__/data-contracts';
import {
  PATCH_USER_PROFILE_NAME,
  type PatchUserProfileFormValues,
  useEditUserProfileForm,
} from '@/app/(public)/(main)/users/[userHandle]/_hooks/use-edit-user-profile-form';
import { FileUploader } from '@/components/ui-unstable/file-uploader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { SheetFooter } from '@/components/ui/sheet';
import { usePatchUserMutation } from '@/hooks/mutations/use-patch-user-mutation';
import { useUploadBackgroundImageMutation } from '@/hooks/mutations/use-upload-background-image-mutation';
import { useUploadProfileImageMutation } from '@/hooks/mutations/use-upload-profile-image-mutation';
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

  const { mutate } = usePatchUserMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.detailByHandle(user.handle).queryKey,
      });
    },
  });

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queries.users.me.queryKey,
    });

    queryClient.invalidateQueries({
      queryKey: queries.users.detailByHandle(user.handle).queryKey,
    });
  };

  const uploadBackgroundImageMutation = useUploadBackgroundImageMutation({
    onSuccess: invalidateQueries,
  });

  const uploadProfileImageMutation = useUploadProfileImageMutation({
    onSuccess: invalidateQueries,
  });

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="relative w-full">
          <FileUploader
            uploadMutation={uploadBackgroundImageMutation}
            trigger={
              <div
                className="absolute h-32 w-full cursor-pointer rounded-2xl bg-blccu-neutral-400"
                style={{
                  backgroundImage: `url(${user.background_image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            }
          />
          <div className="pt-24">
            <FileUploader
              uploadMutation={uploadProfileImageMutation}
              trigger={
                <Avatar size="xl" className="mx-auto cursor-pointer">
                  <AvatarImage src={user.profile_image} />
                  <AvatarFallback className="bg-blccu-neutral-600" />
                </Avatar>
              }
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
