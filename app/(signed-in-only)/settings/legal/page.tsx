import Link from 'next/link';

import {
  AppDetailBar,
  AppDetailBarTitle,
} from '@/components/ui-unstable/app-detail-bar';
import { ROUTES } from '@/constants/routes';

const LegalPage = () => {
  return (
    <div>
      <AppDetailBar>
        <AppDetailBarTitle>이용약관 및 법적고지</AppDetailBarTitle>
      </AppDetailBar>
      <div className="flex flex-col pt-4">
        <Link href={ROUTES.TERMS_OF_USE}>
          <div className="px-4 py-2">
            <p className="font-medium">이용약관</p>
          </div>
        </Link>
        <Link href={ROUTES.PRIVACY_POLICY}>
          <div className="px-4 py-2">
            <p className="font-medium">개인정보처리방침</p>
          </div>
        </Link>
        <Link href={ROUTES.DESIGN_LICENSE}>
          <div className="px-4 py-2">
            <p className="font-medium">디자인 라이센스</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LegalPage;
