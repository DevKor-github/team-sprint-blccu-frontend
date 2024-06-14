import { useEffect } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type CreateAgreementsInput } from '@/__generated__/data-contracts';
import {
  SET_USERNAME_FORM_NAME,
  useSetUsernameForm,
} from '@/app/(onboarding)/new/_steps/set-username-step/hooks/use-set-username-form';
import { FormFieldValidLabel } from '@/components/ui-unstable/form-field-valid-label';
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
import { ScrollArea } from '@/components/ui/scroll-area';
import { TOAST_MESSAGES } from '@/constants/messages';
import { usePatchUserMutation } from '@/hooks/mutations/use-patch-user-mutation';
import { api } from '@/lib/api';
import { queries } from '@/queries';
import { type PropsWithOnNext } from '@/types/util';

type SetUsernameFormProps = PropsWithOnNext;

const SetUsernameForm = ({ onNext }: SetUsernameFormProps) => {
  const { form, onSubmit } = useSetUsernameForm({
    defaultValues: {
      marketingConsent: false,
    },
    onSubmit: ({
      username,
      handle,
      description,
      termsOfService,
      privacyPolicy,
      marketingConsent,
    }) => {
      patchUserMutate({ username, handle, description });

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

  const queryClient = useQueryClient();

  const { mutate: patchUserMutate } = usePatchUserMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.users.me.queryKey,
      });
    },
  });

  const { mutate: agreeMutate } = useMutation({
    mutationFn: (dto: CreateAgreementsInput) =>
      api.users.agreementsControllerAgree(dto),
    onError: () => {
      toast.error(TOAST_MESSAGES.CREATE_AGREEMENT_FAIL);
    },
  });

  const {
    formState: { isSubmitting, isValid },
    trigger,
    getFieldState,
  } = form;

  useEffect(() => {
    trigger();
  }, []);

  const isValidUsername = !getFieldState(SET_USERNAME_FORM_NAME.USERNAME)
    .invalid;
  const isValidHandle = !getFieldState(SET_USERNAME_FORM_NAME.HANDLE).invalid;
  const isValidDescription = !getFieldState(SET_USERNAME_FORM_NAME.DESCRIPTION)
    .invalid;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="flex h-dvh flex-col justify-between px-4 pt-14">
          <ScrollArea>
            <div className="mt-4 flex flex-col gap-4">
              <FormField
                control={form.control}
                name={SET_USERNAME_FORM_NAME.USERNAME}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel>
                        유저 이름<span className="ml-1 text-red-500">*</span>
                      </FormLabel>
                      <FormFieldValidLabel isValid={isValidUsername}>
                        2 ~ 20자
                      </FormFieldValidLabel>
                    </div>
                    <Input {...field} placeholder="유저 이름을 입력해주세요." />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={SET_USERNAME_FORM_NAME.HANDLE}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel>
                        유저 핸들<span className="ml-1 text-red-500">*</span>
                      </FormLabel>
                      <FormFieldValidLabel isValid={isValidHandle}>
                        2 ~ 20자의 영숫자, 특수문자(-, _)
                      </FormFieldValidLabel>
                    </div>
                    <Input {...field} placeholder="유저 핸들을 입력해주세요." />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={SET_USERNAME_FORM_NAME.DESCRIPTION}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel>상태 메세지 (선택)</FormLabel>
                      <FormFieldValidLabel isValid={isValidDescription}>
                        80자 이하
                      </FormFieldValidLabel>
                    </div>
                    <Input
                      {...field}
                      placeholder="상태 메세지를 입력해주세요."
                    />
                  </FormItem>
                )}
              />
            </div>
          </ScrollArea>
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
