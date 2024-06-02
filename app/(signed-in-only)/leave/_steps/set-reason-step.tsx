'use client';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

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
import { ROUTES } from '@/constants/routes';
import { LeaveAlertDialog } from '@/features/set-reason-step/leave-alert-dialog';
import { getValues } from '@/lib/utils';
import { type PropsWithOnNext } from '@/types/props';

const LEAVE_REASON_TYPE = {
  EXCESSIVE_ERROR: 'EXCESSIVE_ERROR',
  REJOIN_AFTER_LEAVE: 'REJOIN_AFTER_LEAVE',
  ETC: 'ETC',
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
      type: LEAVE_REASON_TYPE.EXCESSIVE_ERROR,
      content: '',
    },
  });

  const onSubmit = (values: LeaveReasonFormValues) => {
    console.log(values);

    if (onNext !== undefined) {
      onNext();
    }
  };

  const { isSubmitting } = form.formState;

  const isEtc = form.watch(LEAVE_REASON_NAME.TYPE) === LEAVE_REASON_TYPE.ETC;

  return (
    <>
      <AppBar>
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
                              value={LEAVE_REASON_TYPE.EXCESSIVE_ERROR}
                            />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0 py-2">
                          <FormLabel className="font-normal">
                            탈퇴 후 재가입
                          </FormLabel>
                          <FormControl>
                            <RadioGroupItem
                              value={LEAVE_REASON_TYPE.REJOIN_AFTER_LEAVE}
                            />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0 py-2">
                          <FormLabel className="font-normal">기타</FormLabel>
                          <FormControl>
                            <RadioGroupItem value={LEAVE_REASON_TYPE.ETC} />
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
                    variant="destructive"
                    className="flex-1"
                  >
                    탈퇴하기
                  </Button>
                }
              />
              <Button
                type="button"
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
