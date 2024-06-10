import { useRouter } from 'next/navigation';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { type PropsWithOnNext } from '@/types/props';

const WatchRecordsStep = ({ onNext }: PropsWithOnNext) => {
  const router = useRouter();

  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>회원 탈퇴</AppBarTitle>
      </AppBar>
      <div className="flex h-dvh flex-col justify-between">
        <div className="px-4 pt-14">
          <p className="pt-4 text-lg font-bold">탈퇴하기 전 꼭 확인해주세요.</p>
        </div>
        <div className="flex w-full gap-2 px-4 pb-4">
          <Button
            size="lg"
            variant="destructive"
            className="flex-1"
            onClick={onNext}
          >
            탈퇴 계속하기
          </Button>
          <Button
            size="lg"
            className="flex-1"
            onClick={() => router.push(ROUTES.MANAGE_ACCOUNT)}
          >
            취소하기
          </Button>
        </div>
      </div>
    </>
  );
};

export { WatchRecordsStep };
