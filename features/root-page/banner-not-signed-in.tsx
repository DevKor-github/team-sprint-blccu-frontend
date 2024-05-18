import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

const backgroundImage =
  'https://images.unsplash.com/photo-1619455061893-0e650d1baab9';

const BannerNotSignedIn = () => {
  return (
    <div
      className="mt-4 flex h-52 flex-col items-center justify-center gap-4 bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <p className="text-center text-xl font-bold text-blccu-white">
        블로그도 이제
        <br />
        <span className="text-3xl">'블꾸'</span> 하세요!
      </p>
      <Link href={ROUTES.SIGN_IN}>
        <Button radius="full">지금 시작하기 </Button>
      </Link>
    </div>
  );
};

export { BannerNotSignedIn };
