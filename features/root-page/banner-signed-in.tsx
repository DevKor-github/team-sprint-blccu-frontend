import Link from 'next/link';

import { type UserResponseDto } from '@/__generated__/data-contracts';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { getBannerSignedInUsernameDescriptor } from '@/lib/get-descriptor';
import { cn } from '@/lib/utils';

const backgroundImage =
  'https://images.unsplash.com/photo-1717511130028-3dcb14006ca5';

type BannerSignedInProps = {
  user: UserResponseDto;
};

const BannerSignedIn = ({ user: { username } }: BannerSignedInProps) => {
  const usernameDescriptor = getBannerSignedInUsernameDescriptor(username);

  return (
    <div
      className="mx-4 my-4 flex h-52 flex-col justify-end rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className={cn(
          'flex flex-col',
          'rounded-b-lg bg-gradient-to-b from-transparent to-black p-4',
        )}
      >
        <p className="text-sm text-blccu-white">{usernameDescriptor}</p>
        <p className="text-2xl font-bold text-blccu-white">
          지금 블로그를 꾸며보세요.
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-blccu-white">지금 블꾸하러 가기</p>
          <Link href={ROUTES.WRITE}>
            <Button size="sm" variant="secondary" radius="full">
              글쓰기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { BannerSignedIn };
