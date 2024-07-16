import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const setUsernameFormSchema = z.object({
  username: z.string().min(2).max(20),
  handle: z
    .string()
    .min(2)
    .max(20)
    .regex(/^[a-zA-Z0-9-_]+$/),
  termsOfService: z.literal(true),
  privacyPolicy: z.literal(true),
  marketingConsent: z.boolean(),
});

type SetUsernameFormValues = z.infer<typeof setUsernameFormSchema>;

/**
 * @note setUsernameFormSchema의 key와 일치해야 합니다.
 */
const SET_USERNAME_FORM_NAME = {
  USERNAME: 'username',
  HANDLE: 'handle',
  TERMS_OF_SERVICE: 'termsOfService',
  PRIVACY_POLICY: 'privacyPolicy',
  MARKETING_CONSENT: 'marketingConsent',
} as const;

type UseSetUsernameFormProps = {
  defaultValues?: UseFormProps<SetUsernameFormValues>['defaultValues'];
  onSubmit: (values: SetUsernameFormValues) => void;
};

const useSetUsernameForm = ({
  defaultValues,
  onSubmit,
}: UseSetUsernameFormProps) => {
  const form = useForm<SetUsernameFormValues>({
    resolver: zodResolver(setUsernameFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  SET_USERNAME_FORM_NAME,
  useSetUsernameForm,
  type SetUsernameFormValues,
};
