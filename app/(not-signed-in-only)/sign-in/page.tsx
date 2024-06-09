import Link from 'next/link';

import BlccuLogoVertical from '@/assets/svg/blccu-logo-vertical.svg';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { KakaoSignInButton } from '@/features/sign-in-page/kakao-sign-in-button';

const SignInPage = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-20">
      <BlccuLogoVertical className="w-16" />
      <div className="flex flex-col items-center gap-2">
        <KakaoSignInButton>카카오로 1초만에 로그인하기</KakaoSignInButton>
        <Link href={ROUTES.ROOT}>
          <Button size="sm" variant="ghost">
            게스트로 계속하기
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
