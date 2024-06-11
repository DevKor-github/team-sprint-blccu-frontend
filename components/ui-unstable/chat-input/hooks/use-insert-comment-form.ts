import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const insertCommentFormSchema = z.object({
  content: z.string().min(1),
});

type InsertCommentFormValues = z.infer<typeof insertCommentFormSchema>;

/**
 * @note insertCommentFormSchema의 key와 일치해야 합니다.
 */
const INSERT_COMMENT_NAME = {
  CONTENT: 'content',
} as const;
type UseInsertCommentFormProps = {
  defaultValues?: UseFormProps<InsertCommentFormValues>['defaultValues'];
  onSubmit: (values: InsertCommentFormValues) => void;
};

const useInsertCommentForm = ({
  defaultValues,
  onSubmit,
}: UseInsertCommentFormProps) => {
  const form = useForm<InsertCommentFormValues>({
    resolver: zodResolver(insertCommentFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  INSERT_COMMENT_NAME,
  useInsertCommentForm,
  type InsertCommentFormValues,
};
