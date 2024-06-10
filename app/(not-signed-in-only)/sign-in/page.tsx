import Link from 'next/link';

import BlccuLogoVertical from '@/assets/svg/blccu-logo-vertical.svg';
import KakaoLogo from '@/assets/svg/kakao-logo.svg';
import { KakaoButton } from '@/components/ui-unstable/kakao-button';
import { Button } from '@/components/ui/button';
import { API_ROUTES, ROUTES } from '@/constants/routes';

const SignInPage = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-20">
      <BlccuLogoVertical className="w-16" />
      <div className="flex flex-col items-center gap-2">
        <KakaoButton
          asChild
          className="w-[calc(100vw-32px)] sm:w-[calc(640px-32px)]"
        >
          <Link href={API_ROUTES.AUTH_KAKAO_LOGIN}>
            <KakaoLogo className="mr-4 h-4 w-4" />
            <p className="flex-1 text-center">카카오로 1초만에 로그인하기</p>
          </Link>
        </KakaoButton>
        <Button asChild size="sm" variant="ghost">
          <Link href={ROUTES.ROOT}>게스트로 계속하기</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
