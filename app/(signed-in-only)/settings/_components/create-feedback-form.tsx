'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type CreateFeedbackInput } from '@/__generated__/data-contracts';
import {
  CREATE_FEEDBACK_NAME,
  useCreateFeedbackForm,
} from '@/app/(signed-in-only)/settings/_hooks/use-create-feedback-form';
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

const CreateFeedbackForm = () => {
  const { form, onSubmit } = useCreateFeedbackForm({
    defaultValues: {
      content: '',
    },
    onSubmit: (values) => mutate(values),
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

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 px-4 pt-2">
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
          <Button size="lg" disabled={!isValid || isSubmitting}>
            피드백 보내기
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { CreateFeedbackForm };
