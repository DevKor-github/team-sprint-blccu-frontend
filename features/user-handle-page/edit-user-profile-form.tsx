import { type ChangeEvent, useRef } from 'react';
import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import z from 'zod';

import {
  type ImageUploadDto,
  type PatchUserInput,
  type UserResponseDto,
} from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { SheetFooter } from '@/components/ui/sheet';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { queries } from '@/queries';

const patchUserProfileFormSchema = z.object({
  handle: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9-_]+$/),
  username: z.string().min(1).max(20),
  description: z.string().max(80).optional(),
});

type PatchUserProfileFormValues = z.infer<typeof patchUserProfileFormSchema>;

/**
 * @note patchUserProfileFormSchema의 key와 일치해야 합니다.
 */
const PATCH_USER_PROFILE_NAME = {
  HANDLE: 'handle',
  USERNAME: 'username',
  DESCRIPTION: 'description',
} as const;

type PatchUserProfileProps = {
  patchUserInput: PatchUserInput;
};

type EditUserProfileFormProps = {
  user: UserResponseDto;
  defaultValues: UseFormProps<PatchUserProfileFormValues>['defaultValues'];
};

const EditUserProfileForm = ({
  user,
  defaultValues,
}: EditUserProfileFormProps) => {
  const form = useForm<PatchUserProfileFormValues>({
    resolver: zodResolver(patchUserProfileFormSchema),
    defaultValues,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ patchUserInput }: PatchUserProfileProps) =>
      api.users.usersControllerPatchUser(patchUserInput),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.detail(user.handle).queryKey,
      });

      toast.success(TOAST_MESSAGES.UPDATE_USER_PROFILE_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UPDATE_USER_PROFILE_FAIL);
    },
  });

  const { mutate: uploadBackgroundImageMutate } = useMutation({
    mutationFn: (imageUploadDto: ImageUploadDto) =>
      api.users.usersControllerUploadBackgroundImage(imageUploadDto),

    onSuccess: () => {
      toast.success(TOAST_MESSAGES.UPLOAD_BACKGROUND_IMAGE_SUCCESS);

      queryClient.invalidateQueries({
        queryKey: queries.users.me.queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: queries.users.detail(user.handle).queryKey,
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
        queryKey: queries.users.detail(user.handle).queryKey,
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

  const onSubmit = (values: PatchUserProfileFormValues) => {
    mutate({
      patchUserInput: values,
    });
  };

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
