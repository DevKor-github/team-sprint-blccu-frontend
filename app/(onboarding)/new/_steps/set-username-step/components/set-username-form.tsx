import { type UseFormProps } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type CreateAgreementsInput } from '@/__generated__/data-contracts';
import {
  SET_USERNAME_FORM_NAME,
  type SetUsernameFormValues,
  useSetUsernameForm,
} from '@/app/(onboarding)/new/_steps/set-username-step/hooks/use-set-username-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TOAST_MESSAGES } from '@/constants/messages';
import { usePatchUserMutation } from '@/hooks/mutations/use-patch-user-mutation';
import { api } from '@/lib/api';
import { type PropsWithOnNext } from '@/types/util';

type SetUsernameFormProps = PropsWithOnNext & {
  defaultValues: UseFormProps<SetUsernameFormValues>['defaultValues'];
};

const SetUsernameForm = ({ defaultValues, onNext }: SetUsernameFormProps) => {
  const { form, onSubmit } = useSetUsernameForm({
    defaultValues,
    onSubmit: ({
      username,
      termsOfService,
      privacyPolicy,
      marketingConsent,
    }) => {
      patchUserMutate({ username });

      if (termsOfService === true) {
        agreeMutate({
          agreementType: 'TERMS_OF_SERVICE',
          isAgreed: true,
        });
      }

      if (privacyPolicy === true) {
        agreeMutate({
          agreementType: 'PRIVACY_POLICY',
          isAgreed: true,
        });
      }

      if (marketingConsent === true) {
        agreeMutate({
          agreementType: 'MARKETING_CONSENT',
          isAgreed: true,
        });
      }

      /**
       * FIXME: 사실 Mutation 전체가 성공해야만 호출하는 게 맞는데, 방법을 모르겠음.
       */
      onNext?.();
    },
  });

  const { mutate: patchUserMutate } = usePatchUserMutation();

  const { mutate: agreeMutate } = useMutation({
    mutationFn: (dto: CreateAgreementsInput) =>
      api.users.agreementsControllerAgree(dto),
    onError: () => {
      toast.error(TOAST_MESSAGES.CREATE_AGREEMENT_FAIL);
    },
  });

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="flex h-dvh flex-col justify-between px-4 pt-14">
          <FormField
            control={form.control}
            name={SET_USERNAME_FORM_NAME.USERNAME}
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormLabel>유저 이름</FormLabel>
                <Input {...field} placeholder="유저 이름을 입력해주세요." />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-10">
            <section>
              <FormField
                control={form.control}
                name={SET_USERNAME_FORM_NAME.TERMS_OF_SERVICE}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between py-2">
                    <FormLabel className="font-normal">
                      이용약관 동의
                      <span className="ml-1 text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={SET_USERNAME_FORM_NAME.PRIVACY_POLICY}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between py-2">
                    <FormLabel className="font-normal">
                      개인정보 수집 및 이용동의
                      <span className="ml-1 text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={SET_USERNAME_FORM_NAME.MARKETING_CONSENT}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between py-2">
                    <FormLabel className="font-normal">
                      광고성 정보 수신 동의 (선택)
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </section>
            <Button
              size="lg"
              disabled={!isValid || isSubmitting}
              className="mb-4"
            >
              블꾸 시작하기
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export { SetUsernameForm };