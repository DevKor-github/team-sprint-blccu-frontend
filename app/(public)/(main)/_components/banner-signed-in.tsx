import Image from 'next/image';
import Link from 'next/link';

import { type UserDto } from '@/__generated__/data-contracts';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import banner_type1 from '@/public/images/banner_type1.png';

type BannerSignedInProps = {
  user: UserDto;
};

const BannerSignedIn = ({ user: { username: _ } }: BannerSignedInProps) => {
  return (
    <div className="relative mt-4 flex h-52 flex-col items-center justify-end gap-4 p-4">
      <Image
        src={banner_type1}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <Button size="lg-wide" radius="full" asChild className="relative z-10">
        <Link href={ROUTES.WRITE}>지금 블꾸하러 가기</Link>
      </Button>
    </div>
  );
};

export { BannerSignedIn };
