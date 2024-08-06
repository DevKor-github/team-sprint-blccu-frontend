import Image from 'next/image';
import Link from 'next/link';

import { type UserDto } from '@/__generated__/data-contracts';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ROUTES } from '@/constants/routes';
import banner_type1 from '@/public/images/banner_type1.png';

type BannerSignedInProps = {
  user: UserDto;
};

const BannerSignedIn = ({ user: { username: _ } }: BannerSignedInProps) => {
  return (
    <AspectRatio ratio={8 / 3}>
      <Link href={ROUTES.WRITE}>
        <Image
          src={banner_type1}
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </Link>
    </AspectRatio>
  );
};

export { BannerSignedIn };
