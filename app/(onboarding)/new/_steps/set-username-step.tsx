import { Button } from '@/components/ui/button';

type SetUsernameStepProps = {
  onNext: () => void;
};

const SetUsernameStep = ({ onNext }: SetUsernameStepProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>SetUsernameStep</p>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export { SetUsernameStep };
