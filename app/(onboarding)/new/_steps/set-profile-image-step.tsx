import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';

type SetProfileImageStepProps = {
  onNext: () => void;
};

const SetProfileImageStep = ({ onNext }: SetProfileImageStepProps) => {
  return (
    <div className="flex h-dvh flex-col">
      <AppBar className="justify-between border-none">
        <AppBarBack />
        <Button variant="ghost" onClick={onNext}>
          건너뛰기
        </Button>
      </AppBar>
      <div className="flex flex-1 flex-col justify-between px-4 pt-14">
        <div className="mt-6 flex flex-col gap-3">
          <h1 className="text-xl font-bold">
            안녕하세요,
            <br />
            블로그 꾸미기 서비스 '블꾸'입니다.
          </h1>
          <p className="text-sm text-blccu-neutral-600">
            지금 블로그 기본 프로필을 설정해보세요.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="h-24 w-24 rounded-full bg-blccu-neutral-800" />
          <p className="text-sm">프로필 사진을 바꾸어 보세요.</p>
        </div>
        <Button onClick={onNext} className="mb-4">
          계속 프로필 설정하기
        </Button>
      </div>
    </div>
  );
};

export { SetProfileImageStep };
