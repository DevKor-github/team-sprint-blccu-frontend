import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type PropsWithOnNext } from '@/types/props';

const SetUsernameStep = ({ onNext }: PropsWithOnNext) => {
  return (
    <>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>회원가입</AppBarTitle>
      </AppBar>
      <div className="flex h-dvh flex-col justify-between px-4 pt-14">
        <div className="mt-6 flex flex-col gap-4">
          <Label htmlFor="username">유저 이름</Label>
          <Input id="username" placeholder="이름을 입력해주세요." />
        </div>
        <div className="flex flex-col gap-10">
          <section>
            <div className="flex items-center justify-between py-2">
              <p className="text-sm">이용약관 동의 (필수)</p>
              <Checkbox />
            </div>
            <div className="flex items-center justify-between py-2">
              <p className="text-sm">개인정보 수집 및 이용동의 (필수)</p>
              <Checkbox />
            </div>
            <div className="flex items-center justify-between py-2">
              <p className="text-sm">광고성 정보 수신 동의 (선택)</p>
              <Checkbox />
            </div>
          </section>
          <Button onClick={onNext} className="mb-4">
            블꾸 시작하기
          </Button>
        </div>
      </div>
    </>
  );
};

export { SetUsernameStep };
