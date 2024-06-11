'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import z from 'zod';

import { type CreateFeedbackInput } from '@/__generated__/data-contracts';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';

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

const CreateFeedbackForm = () => {
  const form = useForm<CreateFeedbackFormValues>({
    resolver: zodResolver(createFeedbackFormSchema),
    defaultValues: {
      content: '',
    },
  });

  const { mutate } = useMutation({
    mutationFn: (dto: CreateFeedbackInput) =>
      api.users.feedbacksControllerCreateFeedback(dto),
    onSuccess: () => {
      form.reset();

      toast.success(TOAST_MESSAGES.CREATE_FEEDBACK_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.CREATE_FEEDBACK_ERROR);
    },
  });

  const onSubmit = (values: CreateFeedbackFormValues) => {
    mutate(values);
  };

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-10 flex flex-col gap-2 px-4 pt-2">
          <FormField
            control={form.control}
            name={CREATE_FEEDBACK_NAME.CONTENT}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">피드백 보내기</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="이런 점은 개선해주세요."
                    disabled={isSubmitting}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={!isValid || isSubmitting}>전송</Button>
        </div>
      </form>
    </Form>
  );
};

export { CreateFeedbackForm };
