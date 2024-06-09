'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import z from 'zod';

import { type CreateCommentInput } from '@/__generated__/data-contracts';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

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

type InsertCommentProps = {
  postId: number;
  createCommentInput: CreateCommentInput;
};

type ChatInputProps = {
  postId: number;
};

const ChatInput = ({ postId }: ChatInputProps) => {
  const form = useForm<InsertCommentFormValues>({
    resolver: zodResolver(insertCommentFormSchema),
    defaultValues: {
      content: '',
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ postId, createCommentInput }: InsertCommentProps) =>
      api.posts.commentsControllerInsertComment(postId, createCommentInput),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.COMMENT_POST_SUCCESS);

      queryClient.invalidateQueries({
        queryKey: queries.posts.comments(postId).queryKey,
      });

      form.reset();
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.COMMENT_POST_FAIL);
    },
  });

  const onSubmit = async (values: InsertCommentFormValues) => {
    mutate({ postId, createCommentInput: values });
  };

  const { isSubmitting, isValid } = form.formState;

  return (
    <div
      className={cn(
        'mx-4 mt-4 rounded-full bg-blccu-neutral-200/50 py-2 pl-7 pr-5',
        'transition-shadow focus-within:outline-none focus-within:ring-1 focus-within:ring-blccu-ring',
      )}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center"
        >
          <FormField
            control={form.control}
            name={INSERT_COMMENT_NAME.CONTENT}
            render={({ field }) => (
              <input
                className={cn(
                  'w-full bg-transparent',
                  'focus:outline-none',
                  'placeholder:text-blccu-neutral-400',
                )}
                placeholder="댓글을 작성하세요."
                {...field}
              />
            )}
          />
          <Button
            className="ml-2"
            type="submit"
            radius="full"
            disabled={!isValid || isSubmitting}
          >
            <Send className="h-5 w-5 text-white" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export { ChatInput };
