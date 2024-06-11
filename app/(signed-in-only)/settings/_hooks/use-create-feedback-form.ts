import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const createFeedbackFormSchema = z.object({
  content: z.string().min(1),
});

type CreateFeedbackFormValues = z.infer<typeof createFeedbackFormSchema>;

/**
 * @note createFeedbackFormSchema의 key와 일치해야 합니다.
 */
const CREATE_FEEDBACK_NAME = {
  CONTENT: 'content',
} as const;

type UseCreateFeedbackFormProps = {
  defaultValues?: UseFormProps<CreateFeedbackFormValues>['defaultValues'];
  onSubmit: (values: CreateFeedbackFormValues) => void;
};

const useCreateFeedbackForm = ({
  defaultValues,
  onSubmit,
}: UseCreateFeedbackFormProps) => {
  const form = useForm<CreateFeedbackFormValues>({
    resolver: zodResolver(createFeedbackFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  CREATE_FEEDBACK_NAME,
  useCreateFeedbackForm,
  type CreateFeedbackFormValues,
};
