import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

const BannerNotSignedIn = () => {
  return (
    <div
      className="mx-4 mt-4 flex h-52 flex-col items-center justify-center gap-4 rounded-lg p-4"
      style={{
        backgroundColor: '#eeeeee',
      }}
    >
      <p className="text-center text-lg font-bold">
        블로그도 이제
        <br />
        <span className="text-2xl">'블꾸'</span> 하세요!
      </p>
      <Link href={ROUTES.SIGN_IN}>
        <Button radius="full">지금 시작하기 </Button>
      </Link>
    </div>
  );
};

export { BannerNotSignedIn };
