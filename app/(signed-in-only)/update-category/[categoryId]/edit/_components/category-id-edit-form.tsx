'use client';

import { useRouter } from 'next/navigation';

import { type UseFormProps } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  type FetchPostCategoryDto,
  type PatchPostCategoryDto,
} from '@/__generated__/data-contracts';
import {
  PATCH_CATEGORY_NAME,
  type PatchCategoryFormValues,
  useCategoryIdEditForm,
} from '@/app/(signed-in-only)/update-category/[categoryId]/edit/_hooks/use-category-id-edit-form';
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
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { api } from '@/lib/api';
import { queries } from '@/queries';

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

  const { form, onSubmit } = useCategoryIdEditForm({
    defaultValues,
    onSubmit: (values) =>
      mutate({
        categoryId: category.id,
        patchPostCategoryDto: values,
      }),
  });

  const { me } = useMeQuery();

  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries(queries.users.categories(me?.kakaoId));

      toast.success(TOAST_MESSAGES.PATCH_CATEGORY_SUCCESS);

      router.back();
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.PATCH_CATEGORY_FAIL);
    },
  });

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
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
          <Button size="lg" disabled={!isValid || !isDirty || isSubmitting}>
            카테고리 수정
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { CategoryIdEditForm };
