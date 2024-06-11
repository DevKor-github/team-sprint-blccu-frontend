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
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { queries } from '@/queries';
import { type PropsWithOnNext } from '@/types/util';

const SetUsernameStep = (props: PropsWithOnNext) => {
  const { me } = useMeQuery();

  const { data } = useQuery(queries.users.agreements);

  if (me === undefined) {
    return null;
  }

  if (data === undefined) {
    return null;
  }

  const agreements = data.data;

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
