import { useQuery } from '@tanstack/react-query';

import {
  type AgreementsControllerFetchAgreementsData,
  type UserResponseDto,
} from '@/__generated__/data-contracts';
import { SetUsernameForm } from '@/app/(onboarding)/new/_steps/set-username-step/components/set-username-form';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { queries } from '@/queries';
import { type PropsWithOnNext } from '@/types/props';

const SetUsernameStep = (props: PropsWithOnNext) => {
  const { data: meData } = useQuery({ ...queries.users.me, retry: false });

  const { data: agreementsData } = useQuery(queries.users.agreements);

  if (!meData) {
    return null;
  }

  if (!agreementsData) {
    return null;
  }

  const me = meData.data;
  const agreements = agreementsData.data;

  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>회원가입</AppBarTitle>
      </AppBar>
      <SetUsernameForm
        defaultValues={convertToSetUsernameFormValues({ me, agreements })}
        {...props}
      />
    </>
  );
};

type ConvertToSetUsernameFormValuesProps = {
  me: UserResponseDto;
  agreements: AgreementsControllerFetchAgreementsData;
};

const convertToSetUsernameFormValues = ({
  me,
  agreements,
}: ConvertToSetUsernameFormValuesProps) => {
  const termsOfServiceAgreement = agreements.find(
    (agreement) => agreement.agreementType === 'TERMS_OF_SERVICE',
  );
  const privacyPolicyAgreement = agreements.find(
    (agreement) => agreement.agreementType === 'PRIVACY_POLICY',
  );
  const marketingConsentAgreement = agreements.find(
    (agreement) => agreement.agreementType === 'MARKETING_CONSENT',
  );

  return {
    ...me,
    termsOfService:
      termsOfServiceAgreement?.isAgreed === true ? true : undefined,
    privacyPolicy: privacyPolicyAgreement?.isAgreed === true ? true : undefined,
    marketingConsent: marketingConsentAgreement?.isAgreed,
  } as const;
};

export { SetUsernameStep };
