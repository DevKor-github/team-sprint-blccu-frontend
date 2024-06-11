import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { getValues } from '@/lib/utils';

const REPORT_COMMENT_TYPE = {
  SPAM: 'SPAM',
  FRAUD: 'FRAUD',
  SEXUAL: 'SEXUAL',
  ETC: 'ETC',
} as const;

const reportCommentFormSchema = z.object({
  type: z.enum(getValues(REPORT_COMMENT_TYPE)),
  content: z.string(),
});

type ReportCommentFormValues = z.infer<typeof reportCommentFormSchema>;

/**
 * @note reportCommentFormSchema의 key와 일치해야 합니다.
 */
const REPORT_COMMENT_NAME = {
  TYPE: 'type',
  CONTENT: 'content',
} as const;

type UseReportCommentFormProps = {
  defaultValues?: UseFormProps<ReportCommentFormValues>['defaultValues'];
  onSubmit: (values: ReportCommentFormValues) => void;
};

const useReportCommentForm = ({
  defaultValues,
  onSubmit,
}: UseReportCommentFormProps) => {
  const form = useForm<ReportCommentFormValues>({
    resolver: zodResolver(reportCommentFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  REPORT_COMMENT_NAME,
  REPORT_COMMENT_TYPE,
  useReportCommentForm,
  type ReportCommentFormValues,
};
