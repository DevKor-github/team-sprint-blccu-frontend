import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import z from 'zod';

import { type PatchUserInput } from '@/__generated__/data-contracts';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { type PropsWithOnNext } from '@/types/props';

const patchUserProfileFormSchema = z.object({
  username: z.string().min(1).max(20),
  handle: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9-_]+$/),
  description: z.string().max(80).optional(),
});

type PatchUserProfileFormValues = z.infer<typeof patchUserProfileFormSchema>;

/**
 * @note patchUserProfileFormSchema의 key와 일치해야 합니다.
 */
const PATCH_USER_PROFILE_NAME = {
  USERNAME: 'username',
  HANDLE: 'handle',
  DESCRIPTION: 'description',
} as const;

type PatchUserProfileProps = {
  patchUserInput: PatchUserInput;
};

type SetProfileFormProps = {
  defaultValues: UseFormProps<PatchUserProfileFormValues>['defaultValues'];
} & PropsWithOnNext;

const SetProfileForm = ({ defaultValues, onNext }: SetProfileFormProps) => {
  const form = useForm<PatchUserProfileFormValues>({
    resolver: zodResolver(patchUserProfileFormSchema),
    defaultValues,
  });

  const { mutate } = useMutation({
    mutationFn: ({ patchUserInput }: PatchUserProfileProps) =>
      api.users.usersControllerPatchUser(patchUserInput),

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

  const onSubmit = (values: PatchUserProfileFormValues) => {
    mutate({
      patchUserInput: values,
    });
  };

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
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
              <div className="absolute h-32 w-full rounded-lg bg-blccu-neutral-400" />
              <div className="pt-24">
                <div className="relative mx-auto h-14 w-14 rounded-full bg-blccu-neutral-800" />
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
            className="mb-4"
            disabled={!isValid || !isDirty || isSubmitting}
          >
            블꾸 시작하기
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { SetProfileForm };
