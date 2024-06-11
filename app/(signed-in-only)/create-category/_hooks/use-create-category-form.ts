import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const createCategoryFormSchema = z.object({
  name: z.string().min(1),
});

type CreateCategoryFormValues = z.infer<typeof createCategoryFormSchema>;

/**
 * @note createCategoryFormSchema의 key와 일치해야 합니다.
 */
const CREATE_CATEGORY_NAME = {
  NAME: 'name',
} as const;

type UseCreateCategoryFormProps = {
  defaultValues?: UseFormProps<CreateCategoryFormValues>['defaultValues'];
  onSubmit: (values: CreateCategoryFormValues) => void;
};

const useCreateCategoryForm = ({
  defaultValues,
  onSubmit,
}: UseCreateCategoryFormProps) => {
  const form = useForm<CreateCategoryFormValues>({
    resolver: zodResolver(createCategoryFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  CREATE_CATEGORY_NAME,
  useCreateCategoryForm,
  type CreateCategoryFormValues,
};
