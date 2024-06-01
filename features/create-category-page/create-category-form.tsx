'use client';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import z from 'zod';

import { type CreatePostCategoryDto } from '@/__generated__/data-contracts';
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

type CreatePostCategoryProps = {
  createPostCategoryDto: CreatePostCategoryDto;
};

const CreateCategoryForm = () => {
  const router = useRouter();

  const form = useForm<CreateCategoryFormValues>({
    resolver: zodResolver(createCategoryFormSchema),
  });

  const { mutate } = useMutation({
    mutationFn: ({ createPostCategoryDto }: CreatePostCategoryProps) =>
      api.users.postCategoriesControllerCreatePostCategory(
        createPostCategoryDto,
      ),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.CREATE_CATEGORY_SUCCESS);

      router.back();
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.CREATE_CATEGORY_FAIL);
    },
  });

  const onSubmit = (values: CreateCategoryFormValues) => {
    mutate({
      createPostCategoryDto: values,
    });
  };

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <Button disabled={!isValid || isSubmitting}>카테고리 생성</Button>
        </div>
      </form>
    </Form>
  );
};

export { CreateCategoryForm };
