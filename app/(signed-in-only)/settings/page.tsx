import Link from 'next/link';

import { CreateFeedbackForm } from '@/app/(signed-in-only)/settings/_components/create-feedback-form';
import { ROUTES } from '@/constants/routes';

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
