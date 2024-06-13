'use client';

import Link from 'next/link';

import BlccuLogoVertical from '@/assets/svg/blccu-logo-vertical.svg';
import KakaoLogo from '@/assets/svg/kakao-logo.svg';
import { KakaoButton } from '@/components/ui-unstable/kakao-button';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { API_ROUTES } from '@/constants/routes';
import { useModalStore } from '@/hooks/use-modal-store';

const SignInDialog = () => {
  const { isOpen, close, type } = useModalStore();

  const isModalOpen = isOpen && type === 'sign-in';

  return (
    <Dialog open={isModalOpen} onOpenChange={close}>
      <DialogContent className="flex w-full flex-col items-center gap-12 rounded-xl">
        <BlccuLogoVertical className="mt-8 w-12" />
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold">블꾸</h2>
          <p className="font-medium">나만의 커스텀 블로그</p>
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          <KakaoButton asChild className="w-full">
            <Link href={API_ROUTES.AUTH_KAKAO_LOGIN}>
              <KakaoLogo className="mr-4 h-4 w-4" />
              <p className="flex-1 text-center">카카오로 1초만에 로그인하기</p>
            </Link>
          </KakaoButton>
          <Button size="sm" variant="ghost" onClick={close}>
            게스트로 계속하기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { SignInDialog };
