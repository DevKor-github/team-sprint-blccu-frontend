import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type SetDescriptionStepProps = {
  onNext: () => void;
};

const SetDescriptionStep = ({ onNext }: SetDescriptionStepProps) => {
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
            기본 프로필 설정의 마지막 단계입니다.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Input placeholder="소개글을 작성해주세요." />
          <p className="text-sm">자신의 블로그를 소개해 보세요.</p>
        </div>
        <Button onClick={onNext} className="mb-4">
          블꾸 시작하기
        </Button>
      </div>
    </div>
  );
};

export { SetDescriptionStep };
