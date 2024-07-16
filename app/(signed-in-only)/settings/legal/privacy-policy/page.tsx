import { PrivacyPolicyContent } from '@/app/(signed-in-only)/settings/legal/privacy-policy/_components/privacy-policy-content';
import {
  AppDetailBar,
  AppDetailBarTitle,
} from '@/components/ui-unstable/app-detail-bar';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <AppDetailBar>
        <AppDetailBarTitle>개인정보 처리방침</AppDetailBarTitle>
      </AppDetailBar>
      <PrivacyPolicyContent />
    </div>
  );
};

export default PrivacyPolicyPage;
