import { useEffect, useState } from 'react';

import { type CheckedState } from '@radix-ui/react-checkbox';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

import { type AgreementCreateRequestDto } from '@/__generated__/data-contracts';
import { AgreePrivacyPolicySheet } from '@/app/(onboarding)/new/_steps/set-username-step/components/agree-privacy-policy-sheet';
import { AgreeTermsOfServiceSheet } from '@/app/(onboarding)/new/_steps/set-username-step/components/agree-terms-of-service-sheet';
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
import { IconButton } from '@/components/ui/icon-button';
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
      termsOfService,
      privacyPolicy,
      marketingConsent,
    }) => {
      patchUserMutate({ username, handle });

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
    mutationFn: (dto: AgreementCreateRequestDto) =>
      api.users.agreementsControllerAgree(dto),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queries.users.agreements.queryKey,
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.CREATE_AGREEMENT_FAIL);
    },
  });

  const {
    formState: { isSubmitting, isValid },
    trigger,
    getFieldState,
    setValue,
    watch,
  } = form;

  const [agreeAll, setAgreeAll] = useState<CheckedState>(false);

  const termsOfService = watch(SET_USERNAME_FORM_NAME.TERMS_OF_SERVICE);
  const privacyPolicy = watch(SET_USERNAME_FORM_NAME.PRIVACY_POLICY);

  useEffect(() => {
    if (!termsOfService && !privacyPolicy) {
      setAgreeAll(false);
      return;
    }

    if (termsOfService && privacyPolicy) {
      setAgreeAll(true);
      return;
    }

    setAgreeAll('indeterminate');
  }, [termsOfService, privacyPolicy]);

  const handleAgreeAllChange = (value: boolean) => {
    setValue(SET_USERNAME_FORM_NAME.TERMS_OF_SERVICE, value);
    setValue(SET_USERNAME_FORM_NAME.PRIVACY_POLICY, value);
    setAgreeAll(value);
  };

  useEffect(() => {
    trigger();
  }, []);

  const isValidWithAgreeAll = isValid && agreeAll === true;

  const isValidUsername = !getFieldState(SET_USERNAME_FORM_NAME.USERNAME)
    .invalid;
  const isValidHandle = !getFieldState(SET_USERNAME_FORM_NAME.HANDLE).invalid;

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
                        유저 아이디<span className="ml-1 text-red-500">*</span>
                      </FormLabel>
                      <FormFieldValidLabel isValid={isValidHandle}>
                        2 ~ 20자의 영숫자, 특수문자(-, _)
                      </FormFieldValidLabel>
                    </div>
                    <Input
                      {...field}
                      placeholder="유저 아이디를 입력해주세요."
                    />
                  </FormItem>
                )}
              />
            </div>
          </ScrollArea>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <FormItem className="flex items-center justify-between p-2">
                <FormLabel>필수 항목 전체 동의하기</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={agreeAll}
                    onCheckedChange={handleAgreeAllChange}
                  />
                </FormControl>
              </FormItem>
              <div className="border-t border-blccu-neutral-200" />
              <section>
                <FormField
                  control={form.control}
                  name={SET_USERNAME_FORM_NAME.TERMS_OF_SERVICE}
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between p-2">
                      <div className="flex items-center gap-4">
                        <FormLabel className="font-normal">
                          이용약관 동의 (필수)
                        </FormLabel>
                        <AgreeTermsOfServiceSheet
                          trigger={
                            <IconButton>
                              <ChevronRight className="h-4 w-4 text-blccu-neutral-600" />
                            </IconButton>
                          }
                        />
                      </div>
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
                    <FormItem className="flex items-center justify-between p-2">
                      <div className="flex items-center gap-4">
                        <FormLabel className="font-normal">
                          개인정보 수집 및 이용동의 (필수)
                        </FormLabel>
                        <AgreePrivacyPolicySheet
                          trigger={
                            <IconButton>
                              <ChevronRight className="h-4 w-4 text-blccu-neutral-600" />
                            </IconButton>
                          }
                        />
                      </div>
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
                    <FormItem className="flex items-center justify-between p-2">
                      <div className="flex items-center gap-4">
                        <FormLabel className="font-normal">
                          광고성 정보 수신 동의 (선택)
                        </FormLabel>
                        {/* <ChevronRight className="h-4 w-4 text-blccu-neutral-600" /> */}
                      </div>
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
            </div>
            <Button
              size="lg"
              disabled={!isValidWithAgreeAll || isSubmitting}
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
