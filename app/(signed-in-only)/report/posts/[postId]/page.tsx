'use client';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import z from 'zod';

import { type CreateReportInput } from '@/__generated__/data-contracts';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { getValues } from '@/lib/utils';

const REPORT_POST_TYPE = {
  SPAM: 'SPAM',
  FRAUD: 'FRAUD',
  SEXUAL: 'SEXUAL',
  ETC: 'ETC',
} as const;

const reportPostFormSchema = z.object({
  type: z.enum(getValues(REPORT_POST_TYPE)),
  content: z.string(),
});

type ReportPostFormValues = z.infer<typeof reportPostFormSchema>;

/**
 * @note reportPostFormSchema의 key와 일치해야 합니다.
 */
const REPORT_POST_NAME = {
  TYPE: 'type',
  CONTENT: 'content',
} as const;

type ReportPostProps = {
  postId: number;
  createReportInput: CreateReportInput;
};

type ReportPostIdPageProps = {
  params: {
    postId: number;
  };
};

const ReportPostIdPage = ({ params: { postId } }: ReportPostIdPageProps) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: ({ postId, createReportInput }: ReportPostProps) =>
      api.posts.reportsControllerReportPost(postId, createReportInput),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.REPORT_POST_SUCCESS);

      router.back();
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.REPORT_POST_FAIL);
    },
  });

  const form = useForm<ReportPostFormValues>({
    resolver: zodResolver(reportPostFormSchema),
    defaultValues: {
      type: REPORT_POST_TYPE.SPAM,
      content: '',
    },
  });

  const onSubmit = async (values: ReportPostFormValues) => {
    mutate({
      postId,
      createReportInput: {
        ...values,
        url: '',
      },
    });
  };

  const { isSubmitting } = form.formState;

  const isEtc = form.watch(REPORT_POST_NAME.TYPE) === REPORT_POST_TYPE.ETC;

  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>게시글 신고</AppBarTitle>
      </AppBar>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex h-dvh flex-col justify-between">
            <div className="px-4 pt-14">
              <FormField
                control={form.control}
                name={REPORT_POST_NAME.TYPE}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="mt-4"
                        disabled={isSubmitting}
                      >
                        <FormItem className="flex items-center justify-between space-y-0 py-2">
                          <FormLabel className="font-normal">
                            스팸성 게시물
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value={REPORT_POST_TYPE.SPAM} />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0 py-2">
                          <FormLabel className="font-normal">
                            사기 또는 거짓의 게시물
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value={REPORT_POST_TYPE.FRAUD} />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0 py-2">
                          <FormLabel className="font-normal">
                            성적인 게시물
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem value={REPORT_POST_TYPE.SEXUAL} />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0 py-2">
                          <FormLabel className="font-normal">기타</FormLabel>
                          <FormControl>
                            <RadioGroupItem value={REPORT_POST_TYPE.ETC} />
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={REPORT_POST_NAME.CONTENT}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="mt-4"
                        placeholder="자세한 신고 이유를 작성해주세요."
                        disabled={isSubmitting || !isEtc}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full px-4 pb-4">
              <Button
                type="submit"
                size="lg"
                variant="destructive"
                className="flex-1"
              >
                신고하기
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ReportPostIdPage;
