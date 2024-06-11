import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

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

type UseReportPostFormProps = {
  defaultValues?: UseFormProps<ReportPostFormValues>['defaultValues'];
  onSubmit: (values: ReportPostFormValues) => void;
};

const useReportPostForm = ({
  defaultValues,
  onSubmit,
}: UseReportPostFormProps) => {
  const form = useForm<ReportPostFormValues>({
    resolver: zodResolver(reportPostFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  REPORT_POST_NAME,
  REPORT_POST_TYPE,
  useReportPostForm,
  type ReportPostFormValues,
};
