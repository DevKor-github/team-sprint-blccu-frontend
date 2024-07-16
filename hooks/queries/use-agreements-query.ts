import { useQuery } from '@tanstack/react-query';

import { checkIsAgree } from '@/lib/utils';
import { queries } from '@/queries';

const useAgreementsQuery = () => {
  const { isLoading, data } = useQuery({
    ...queries.users.agreements,
    retry: false,
  });

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

  const isAgreeWithTermsOfServiceAgreement = checkIsAgree(
    agreements,
    'TERMS_OF_SERVICE',
  );

  const isAgreeWithPrivacyPolicyAgreement = checkIsAgree(
    agreements,
    'PRIVACY_POLICY',
  );

  const isInitialUser =
    !isAgreeWithTermsOfServiceAgreement || !isAgreeWithPrivacyPolicyAgreement;

  return { isLoading, agreements, isSignedIn: true as const, isInitialUser };
};

export { useAgreementsQuery };
