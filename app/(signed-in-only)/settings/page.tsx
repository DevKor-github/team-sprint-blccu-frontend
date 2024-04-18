import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
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
      <div className="mt-10 px-4 py-2">
        <p className="font-medium">피드백 보내기</p>
      </div>
      <div className="flex flex-col gap-2 px-4 pt-2">
        <Textarea placeholder="이런 점은 개선해주세요." />
        <Button variant="secondary" disabled>
          전송
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
