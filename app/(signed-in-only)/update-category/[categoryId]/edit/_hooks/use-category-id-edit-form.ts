import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const patchCategoryFormSchema = z.object({
  name: z.string().min(1),
});

type PatchCategoryFormValues = z.infer<typeof patchCategoryFormSchema>;

/**
 * @note patchCategoryFormSchema의 key와 일치해야 합니다.
 */
const PATCH_CATEGORY_NAME = {
  NAME: 'name',
} as const;
type UseCategoryIdEditFormProps = {
  defaultValues?: UseFormProps<PatchCategoryFormValues>['defaultValues'];
  onSubmit: (values: PatchCategoryFormValues) => void;
};

const useCategoryIdEditForm = ({
  defaultValues,
  onSubmit,
}: UseCategoryIdEditFormProps) => {
  const form = useForm<PatchCategoryFormValues>({
    resolver: zodResolver(patchCategoryFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  PATCH_CATEGORY_NAME,
  useCategoryIdEditForm,
  type PatchCategoryFormValues,
};
