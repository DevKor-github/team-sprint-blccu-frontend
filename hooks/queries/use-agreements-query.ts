import { useQuery } from '@tanstack/react-query';

import { queries } from '@/queries';

const useAgreementsQuery = () => {
  const { isLoading, data } = useQuery(queries.users.agreements);

  const agreements = data?.data;

  // 비로그인 유저
  if (agreements === undefined) {
    return {
      isLoading,
      agreements: undefined,
      isSignedIn: false as const,
      isInitialUser: false as const,
    };
  }

  const isAgreeWithTermsOfServiceAgreement =
    agreements.find(
      (agreement) => agreement.agreementType === 'TERMS_OF_SERVICE',
    ) !== undefined;

  const isAgreeWithPrivacyPolicyAgreement =
    agreements.find(
      (agreement) => agreement.agreementType === 'PRIVACY_POLICY',
    ) !== undefined;

  const isInitialUser =
    !isAgreeWithTermsOfServiceAgreement || !isAgreeWithPrivacyPolicyAgreement;

  return { isLoading, agreements, isSignedIn: true as const, isInitialUser };
};

export { useAgreementsQuery };
