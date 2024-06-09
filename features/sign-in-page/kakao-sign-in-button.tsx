'use client';

import { useRouter } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import KakaoLogo from '@/assets/svg/kakao-logo.svg';
import { API_ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

const KakaoSignInButton = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap',
        'font-medium',
        'transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blccu-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'rounded-[12px] bg-blccu-kakao-background px-7 py-3 text-blccu-kakao-foreground/85',
        'shadow-lg',
        'w-[calc(100vw-32px)] over-blccu-screen-width:w-[calc(448px-32px)]',
      )}
      onClick={() => router.push(API_ROUTES.AUTH_KAKAO_LOGIN)}
    >
      <KakaoLogo className="mr-4 h-4 w-4" />
      <p className="mx-auto flex-1">{children}</p>
    </button>
  );
};

export { KakaoSignInButton };
