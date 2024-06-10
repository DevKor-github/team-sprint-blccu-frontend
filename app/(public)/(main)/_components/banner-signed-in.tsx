import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

import { type UserResponseDto } from '@/__generated__/data-contracts';
import { ROUTES } from '@/constants/routes';
import { getBannerSignedInUsernameDescriptor } from '@/lib/get-descriptor';

const backgroundImage =
  'https://images.unsplash.com/photo-1717831499998-6f5bafe9e287';

type BannerSignedInProps = {
  user: UserResponseDto;
};

const BannerSignedIn = ({ user: { username } }: BannerSignedInProps) => {
  const usernameDescriptor = getBannerSignedInUsernameDescriptor(username);

  return (
    <div
      className="mx-4 my-4 flex h-60 flex-col justify-end rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex rounded-b-lg bg-gradient-to-b from-transparent to-black p-4 transition-all sm:p-8">
        <div className="flex flex-col">
          <p className="text-sm text-blccu-white">{usernameDescriptor}</p>
          <p className="text-xl font-semibold text-blccu-white">
            지금 블로그를 꾸며보세요 🎨
          </p>
          <Link href={ROUTES.WRITE}>
            <p className="mt-2 flex items-center gap-1 text-sm text-blccu-white">
              <ExternalLink className="h-4 w-4" />
              지금 블꾸하러 가기
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { BannerSignedIn };
