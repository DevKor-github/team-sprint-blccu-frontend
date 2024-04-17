import { Button } from '@/components/ui/button';

type SetBackgroundImageStepProps = {
  onNext: () => void;
};

const SetBackgroundImageStep = ({ onNext }: SetBackgroundImageStepProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>SetBackgroundImageStep</p>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export { SetBackgroundImageStep };
