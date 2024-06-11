import { type UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { getValues } from '@/lib/utils';

const LEAVE_REASON_TYPE = {
  TOO_MANY_ERRORS: 'TOO_MANY_ERRORS',
  REJOIN_AFTER_DEACTIVATION: 'REJOIN_AFTER_DEACTIVATION',
  OTHER_ISSUES: 'OTHER_ISSUES',
} as const;

const leaveReasonFormSchema = z.object({
  type: z.enum(getValues(LEAVE_REASON_TYPE)),
  content: z.string(),
});

/**
 * @note leaveReasonFormSchema의 key와 일치해야 합니다.
 */
const LEAVE_REASON_NAME = {
  TYPE: 'type',
  CONTENT: 'content',
} as const;

type LeaveReasonFormValues = z.infer<typeof leaveReasonFormSchema>;

type UseSetReasonFormProps = {
  defaultValues?: UseFormProps<LeaveReasonFormValues>['defaultValues'];
  onSubmit: (values: LeaveReasonFormValues) => void;
};

const useSetReasonForm = ({
  defaultValues,
  onSubmit,
}: UseSetReasonFormProps) => {
  const form = useForm<LeaveReasonFormValues>({
    resolver: zodResolver(leaveReasonFormSchema),
    defaultValues,
  });

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export {
  LEAVE_REASON_NAME,
  LEAVE_REASON_TYPE,
  useSetReasonForm,
  type LeaveReasonFormValues,
};
