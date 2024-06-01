'use client';

import { useRouter } from 'next/navigation';

import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import z from 'zod';

import {
  type FetchPostCategoryDto,
  type PatchPostCategoryDto,
} from '@/__generated__/data-contracts';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

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

type PatchPostCategoryProps = {
  categoryId: string;
  patchPostCategoryDto: PatchPostCategoryDto;
};

type CategoryIdEditFormProps = {
  category: FetchPostCategoryDto;
  defaultValues: UseFormProps<PatchCategoryFormValues>['defaultValues'];
};

const CategoryIdEditForm = ({
  category,
  defaultValues,
}: CategoryIdEditFormProps) => {
  const router = useRouter();

  const form = useForm<PatchCategoryFormValues>({
    resolver: zodResolver(patchCategoryFormSchema),
    defaultValues,
  });

  const { mutate } = useMutation({
    mutationFn: ({
      categoryId,
      patchPostCategoryDto,
    }: PatchPostCategoryProps) =>
      api.users.postCategoriesControllerPatchCategory(
        categoryId,
        patchPostCategoryDto,
      ),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.PATCH_CATEGORY_SUCCESS);

      router.back();
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.PATCH_CATEGORY_FAIL);
    },
  });

  const onSubmit = (values: PatchCategoryFormValues) => {
    mutate({
      categoryId: category.id,
      patchPostCategoryDto: {
        name: values.name,
      },
    });
  };

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex h-dvh flex-col justify-between px-4 pb-4 pt-14">
          <div className="mt-6 flex flex-col gap-4">
            <FormField
              control={form.control}
              name={PATCH_CATEGORY_NAME.NAME}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>카테고리 제목</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="카테고리 제목을 입력하세요."
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button disabled={!isValid || !isDirty || isSubmitting}>
            카테고리 수정
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { CategoryIdEditForm };
