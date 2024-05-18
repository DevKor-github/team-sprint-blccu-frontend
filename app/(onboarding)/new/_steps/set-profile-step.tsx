import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { generateUser } from '@/lib/utils';

const me = generateUser();

const { username, description } = me;

type SetProfileStepProps = {
  onNext: () => void;
};

const SetProfileStep = ({ onNext }: SetProfileStepProps) => {
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
            안녕하세요.
            <br />
            블로그 꾸미기 서비스 '블꾸'입니다.
          </h1>
          <p className="text-sm text-blccu-neutral-600">
            지금 블로그 기본 프로필을 설정해보세요.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-md p-4 shadow-md">
          <div className="relative w-full">
            <div className="absolute h-32 w-full rounded-lg bg-blccu-neutral-400" />
            <div className="pt-24">
              <div className="relative mx-auto h-14 w-14 rounded-full bg-blccu-neutral-800" />
            </div>
          </div>
          {/**
           * @note
           * 바로 여기서 수정하게 하는 것은 좋은 UX가 아닌 것 같습니다.
           */}
          <div className="my-5 flex w-full flex-col items-center gap-2">
            <input
              defaultValue={username}
              className="w-full text-center text-lg"
            />
            <input
              defaultValue={description}
              className="w-full text-center text-sm"
            />
          </div>
        </div>
        <Button onClick={onNext} className="mb-4">
          블꾸 시작하기
        </Button>
      </div>
    </div>
  );
};

export { SetProfileStep };
