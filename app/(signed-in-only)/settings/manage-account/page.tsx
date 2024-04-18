import Link from 'next/link';

import { format } from 'date-fns';

import {
  AppDetailBar,
  AppDetailBarTitle,
} from '@/components/ui-unstable/app-detail-bar';
import { ROUTES } from '@/constants/routes';
import { getSignUpMethodDescriptor } from '@/lib/get-descriptor';
import { randomDate } from '@/lib/utils';

const signUpMethod = 'kakao';
const signUpDate = randomDate(new Date(2019, 0, 1), new Date());

const signUpMethodDescriptor = getSignUpMethodDescriptor(signUpMethod);
const formattedDate = format(signUpDate, 'yyyy.MM.dd');

const ManageAccountPage = () => {
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
            <Link href={ROUTES.ROOT}>
              <div className="px-4 py-2">
                <p className="font-medium">로그아웃</p>
              </div>
            </Link>
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
