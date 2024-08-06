import Image from 'next/image';
import Link from 'next/link';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ROUTES } from '@/constants/routes';
import banner_type3 from '@/public/images/banner_type3.png';

const BannerNotSignedIn = () => {
  return (
    <AspectRatio ratio={8 / 3}>
      <Link href={ROUTES.SIGN_IN}>
        <Image
          src={banner_type3}
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

export { BannerNotSignedIn };
