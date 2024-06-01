import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { CreateFeedbackForm } from '@/features/settings-page/create-feedback-form';

const SettingsPage = () => {
  return (
    <div className="flex flex-col pt-4">
      <Link href={ROUTES.ANNOUNCEMENTS}>
        <div className="px-4 py-2">
          <p className="font-medium">공지사항</p>
        </div>
      </Link>
      <Link href={ROUTES.LEGAL}>
        <div className="px-4 py-2">
          <p className="font-medium">이용약관 및 법적고지</p>
        </div>
      </Link>
      <Link href={ROUTES.MANAGE_ACCOUNT}>
        <div className="px-4 py-2">
          <p className="font-medium">계정 관리</p>
        </div>
      </Link>
      <CreateFeedbackForm />
    </div>
  );
};

export default SettingsPage;
