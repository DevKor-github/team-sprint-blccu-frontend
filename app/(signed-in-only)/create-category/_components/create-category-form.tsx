'use client';

import { useRouter } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type ArticleCategoryCreateRequestDto } from '@/__generated__/data-contracts';
import {
  CREATE_CATEGORY_NAME,
  useCreateCategoryForm,
} from '@/app/(signed-in-only)/create-category/_hooks/use-create-category-form';
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

const CreateCategoryForm = () => {
  const router = useRouter();

  const { form, onSubmit } = useCreateCategoryForm({
    onSubmit: (values) => mutate(values),
  });

  const { me } = useMeQuery();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (dto: ArticleCategoryCreateRequestDto) =>
      api.users.articleCategoriesControllerCreateArticleCategory(dto),
    onSuccess: () => {
      queryClient.invalidateQueries(queries.users.categories(me?.id));

      toast.success(TOAST_MESSAGES.CREATE_CATEGORY_SUCCESS);

      router.back();
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.CREATE_CATEGORY_FAIL);
    },
  });

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="flex h-dvh flex-col justify-between px-4 pb-4 pt-14">
          <div className="mt-6 flex flex-col gap-4">
            <FormField
              control={form.control}
              name={CREATE_CATEGORY_NAME.NAME}
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
          <Button size="lg" disabled={!isValid || isSubmitting}>
            카테고리 생성
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { CreateCategoryForm };
