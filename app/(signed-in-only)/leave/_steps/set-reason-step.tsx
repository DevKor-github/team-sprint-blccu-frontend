'use client';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import z from 'zod';

import { type DeleteUserInput } from '@/__generated__/data-contracts';
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
import { ROUTES } from '@/constants/routes';
import { LeaveAlertDialog } from '@/features/set-reason-step/leave-alert-dialog';
import { api } from '@/lib/api';
import { getValues } from '@/lib/utils';
import { type PropsWithOnNext } from '@/types/props';

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

const SetReasonStep = ({ onNext }: PropsWithOnNext) => {
  const router = useRouter();

  const form = useForm<LeaveReasonFormValues>({
    resolver: zodResolver(leaveReasonFormSchema),
    defaultValues: {
      type: LEAVE_REASON_TYPE.TOO_MANY_ERRORS,
      content: '',
    },
  });

  const { mutate } = useMutation({
    mutationFn: (deleteUserInput: DeleteUserInput) =>
      api.users.usersControllerDeleteUser(deleteUserInput),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.LEAVE_USER_SUCCESS);

      if (onNext !== undefined) {
        onNext();
      }
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.LEAVE_USER_FAIL);
    },
  });

  const onSubmit = (values: LeaveReasonFormValues) => {
    mutate(values);
  };

  const { isSubmitting } = form.formState;

  const isEtc =
    form.watch(LEAVE_REASON_NAME.TYPE) === LEAVE_REASON_TYPE.OTHER_ISSUES;

  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>회원 탈퇴</AppBarTitle>
      </AppBar>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex h-dvh flex-col justify-between">
            <div className="px-4 pt-14">
              <p className="pt-4 text-lg font-bold">
                회원 탈퇴 이유를 알려주세요.
              </p>
              <p className="text-sm text-blccu-neutral-600">
                더 나은 서비스를 위해 노력하겠습니다.
              </p>
              <FormField
                control={form.control}
                name={LEAVE_REASON_NAME.TYPE}
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
                            과도한 오류
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem
                              value={LEAVE_REASON_TYPE.TOO_MANY_ERRORS}
                            />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0 py-2">
                          <FormLabel className="font-normal">
                            탈퇴 후 재가입
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem
                              value={
                                LEAVE_REASON_TYPE.REJOIN_AFTER_DEACTIVATION
                              }
                            />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0 py-2">
                          <FormLabel className="font-normal">기타</FormLabel>
                          <FormControl>
                            <RadioGroupItem
                              value={LEAVE_REASON_TYPE.OTHER_ISSUES}
                            />
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={LEAVE_REASON_NAME.CONTENT}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="mt-4"
                        placeholder="자세한 탈퇴 이유를 작성해주세요."
                        disabled={isSubmitting || !isEtc}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full gap-2 px-4 pb-4">
              <LeaveAlertDialog
                onSubmit={form.handleSubmit(onSubmit)}
                trigger={
                  <Button
                    type="button"
                    size="lg"
                    variant="destructive"
                    className="flex-1"
                  >
                    탈퇴하기
                  </Button>
                }
              />
              <Button
                type="button"
                size="lg"
                className="flex-1"
                onClick={() => router.push(ROUTES.MANAGE_ACCOUNT)}
              >
                취소하기
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export { SetReasonStep };
