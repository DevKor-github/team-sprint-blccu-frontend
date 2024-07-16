import { TermsOfUseContent } from '@/app/(signed-in-only)/settings/legal/terms-of-use/_components/terms-of-use-content';
import {
  AppDetailBar,
  AppDetailBarTitle,
} from '@/components/ui-unstable/app-detail-bar';

const TermsOfUsePage = () => {
  return (
    <div>
      <AppDetailBar>
        <AppDetailBarTitle>서비스 이용약관</AppDetailBarTitle>
      </AppDetailBar>
      <TermsOfUseContent />
    </div>
  );
};

export default TermsOfUsePage;
