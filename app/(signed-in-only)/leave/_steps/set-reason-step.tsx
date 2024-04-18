import { useRouter } from 'next/navigation';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { ROUTES } from '@/constants/routes';

type SetReasonStepProps = {
  onNext: () => void;
};

const SetReasonStep = ({ onNext }: SetReasonStepProps) => {
  const router = useRouter();

  return (
    <>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>회원 탈퇴</AppBarTitle>
      </AppBar>
      <div className="flex h-dvh flex-col justify-between">
        <div className="px-4 pt-14">
          <p className="pt-4 text-lg font-bold">회원 탈퇴 이유를 알려주세요.</p>
          <p className="text-sm text-blccu-neutral-600">
            더 나은 서비스를 위해 노력하겠습니다.
          </p>
          <RadioGroup defaultValue="excessive-error" className="mt-4">
            <Label
              htmlFor="r1"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">과도한 오류</p>
              <RadioGroupItem value="excessive-error" id="r1" />
            </Label>
            <Label
              htmlFor="r2"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">탈퇴 후 재가입</p>
              <RadioGroupItem value="rejoin-after-leave" id="r2" />
            </Label>
            <Label
              htmlFor="r3"
              className="flex items-center justify-between py-2"
            >
              <p className="font-normal">기타 문제</p>
              <RadioGroupItem value="other" id="r3" />
            </Label>
          </RadioGroup>
          <Textarea
            className="mt-4"
            placeholder="자세한 탈퇴 이유를 작성해주세요."
          />
        </div>
        <div className="flex w-full gap-2 px-4 pb-4">
          <Button variant="destructive" className="flex-1" onClick={onNext}>
            탈퇴하기
          </Button>
          <Button
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

export { SetReasonStep };
