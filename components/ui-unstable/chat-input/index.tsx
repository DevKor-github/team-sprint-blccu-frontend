'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

import { type CommentCreateRequestDto } from '@/__generated__/data-contracts';
import {
  INSERT_COMMENT_NAME,
  useInsertCommentForm,
} from '@/components/ui-unstable/chat-input/hooks/use-insert-comment-form';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

type InsertCommentProps = {
  articleId: number;
  commentCreateRequestDto: CommentCreateRequestDto;
};

type ChatInputProps = {
  articleId: number;
  parentId?: number;
};

const ChatInput = ({ articleId, parentId }: ChatInputProps) => {
  const { form, onSubmit } = useInsertCommentForm({
    defaultValues: {
      content: '',
    },
    onSubmit: (values) =>
      mutate({ articleId, commentCreateRequestDto: { ...values, parentId } }),
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ articleId, commentCreateRequestDto }: InsertCommentProps) =>
      api.articles.commentsControllerCreateComment(
        articleId,
        commentCreateRequestDto,
      ),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.COMMENT_POST_SUCCESS);

      queryClient.invalidateQueries({
        queryKey: queries.articles.comments(articleId).queryKey,
      });

      form.reset();
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.COMMENT_POST_FAIL);
    },
  });

  const { isSubmitting, isValid } = form.formState;

  return (
    <div
      className={cn(
        'mx-4 mt-4 flex h-12 rounded-full bg-blccu-neutral-100 pl-7 pr-2',
        'transition-shadow focus-within:outline-none focus-within:ring-1 focus-within:ring-blccu-ring',
      )}
    >
      <Form {...form}>
        <form onSubmit={onSubmit} className="my-auto flex w-full items-center">
          <FormField
            control={form.control}
            name={INSERT_COMMENT_NAME.CONTENT}
            render={({ field }) => (
              <input
                className={cn(
                  'w-full bg-transparent',
                  'focus:outline-none',
                  'placeholder:text-blccu-neutral-500',
                )}
                placeholder="댓글을 작성하세요"
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
