'use client';

import Link from 'next/link';

import { useMutation, useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { toast } from 'sonner';

import {
  AppDetailBar,
  AppDetailBarTitle,
} from '@/components/ui-unstable/app-detail-bar';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import { getSignUpMethodDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

const ManageAccountPage = () => {
  const { data: meData } = useQuery({ ...queries.users.me, retry: false });

  const { mutate } = useMutation({
    mutationFn: () => api.auth.authControllerLogout(),
    onSuccess: () => {
      // 이게 최선인가?
      window.location.href = ROUTES.ROOT;
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.LOGOUT_FAIL);
    },
  });

  const me = meData?.data;

  if (me === undefined) {
    return null;
  }

  const signUpMethod = 'kakao';

  const signUpMethodDescriptor = getSignUpMethodDescriptor(signUpMethod);
  const formattedDate = format(me.date_created, 'yyyy.MM.dd');

  /**
   * @note
   * - {@link SettingsLayout}에서 이미 pt-14를 주고 있어서 "h-dvh pt-14"를 사용할 수 없었습니다.
   * - 대신 calc(100dvh-56px)를 사용하여 레이아웃을 맞추었습니다.
   */
  return (
    <div className="flex h-[calc(100dvh-56px)] flex-col">
      <AppDetailBar>
        <AppDetailBarTitle>계정 관리</AppDetailBarTitle>
      </AppDetailBar>
      <div className="flex h-full flex-col justify-between pb-4 pt-4">
        <div className="flex flex-col gap-2">
          <section className="flex flex-col px-4">
            <div className="py-2">
              <p className="font-medium">계정 정보</p>
            </div>
            <div className="rounded-lg bg-blccu-neutral-200 p-4">
              <p className="text-sm text-blccu-neutral-600">
                가입 방법: {signUpMethodDescriptor}
              </p>
              <p className="text-sm text-blccu-neutral-600">
                가입 일자: {formattedDate}
              </p>
            </div>
          </section>
          <section>
            <div className="cursor-pointer px-4 py-2" onClick={() => mutate()}>
              <p className="font-medium">로그아웃</p>
            </div>
          </section>
        </div>
        <div className="flex justify-center">
          <Link href={ROUTES.LEAVE}>
            <div className="px-4 py-2">
              <p className="text-sm font-medium text-blccu-neutral-600">
                회원 탈퇴
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageAccountPage;
