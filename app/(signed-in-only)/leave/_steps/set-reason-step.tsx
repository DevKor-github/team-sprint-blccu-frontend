import { Button } from '@/components/ui/button';

type SetReasonStepProps = {
  onNext: () => void;
};

const SetReasonStep = ({ onNext }: SetReasonStepProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>SetReasonStep</p>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export { SetReasonStep };
