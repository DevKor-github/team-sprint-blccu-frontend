import { Button } from '@/components/ui/button';

type SetProfileImageStepProps = {
  onNext: () => void;
};

const SetProfileImageStep = ({ onNext }: SetProfileImageStepProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>SetProfileImageStep</p>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export { SetProfileImageStep };
