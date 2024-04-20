import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { getBannerSignedInUsernameDescriptor } from '@/lib/get-descriptor';
import { generateUser } from '@/lib/utils';

const me = generateUser();

const { username } = me;

const BannerSignedIn = () => {
  const usernameDescriptor = getBannerSignedInUsernameDescriptor(username);

  return (
    <div
      className="mx-4 mt-4 flex h-52 flex-col justify-end rounded-lg p-4"
      style={{
        backgroundColor: '#888888',
      }}
    >
      <p className="text-xs text-blccu-white">{usernameDescriptor}</p>
      <p className="text-xl font-bold text-blccu-white">
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
  );
};

export { BannerSignedIn };
