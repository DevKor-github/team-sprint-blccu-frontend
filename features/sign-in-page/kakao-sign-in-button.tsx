import { type PropsWithChildren } from 'react';

import KakaoLogo from '@/assets/svg/kakao-logo.svg';
import { cn } from '@/lib/utils';

const KakaoSignInButton = ({ children }: PropsWithChildren) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap',
        'text-sm font-medium',
        'transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blccu-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'rounded-[12px] bg-blccu-kakao-background px-4 py-3 text-blccu-kakao-foreground/85',
        'shadow-sm',
      )}
    >
      <KakaoLogo className="mr-3 h-4 w-4" />
      <p className="mx-auto flex-1">{children}</p>
    </button>
  );
};

export { KakaoSignInButton };
