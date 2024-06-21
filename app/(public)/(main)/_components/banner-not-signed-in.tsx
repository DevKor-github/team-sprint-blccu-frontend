import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import banner_type3 from '@/public/images/banner_type3.png';

const BannerNotSignedIn = () => {
  return (
    <div className="relative mt-4 flex h-52 flex-col items-center justify-end gap-4 p-4">
      <Image
        src={banner_type3}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <Button size="lg-wide" radius="full" asChild className="relative z-10">
        <Link href={ROUTES.SIGN_IN}>지금 시작하기</Link>
      </Button>
    </div>
  );
};

export { BannerNotSignedIn };
