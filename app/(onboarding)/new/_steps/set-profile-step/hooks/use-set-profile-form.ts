import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

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

type UseSetProfileFormProps = {
  defaultValues: UseFormProps<PatchUserProfileFormValues>['defaultValues'];
  onSubmit: (values: PatchUserProfileFormValues) => void;
};

const useSetProfileForm = ({
  defaultValues,
  onSubmit,
}: UseSetProfileFormProps) => {
  const form = useForm<PatchUserProfileFormValues>({
    resolver: zodResolver(patchUserProfileFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  PATCH_USER_PROFILE_NAME,
  useSetProfileForm,
  type PatchUserProfileFormValues,
};
