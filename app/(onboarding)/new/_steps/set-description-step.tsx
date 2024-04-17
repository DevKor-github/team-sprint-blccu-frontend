import { Button } from '@/components/ui/button';

type SetDescriptionStepProps = {
  onNext: () => void;
};

const SetDescriptionStep = ({ onNext }: SetDescriptionStepProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>SetDescriptionStep</p>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export { SetDescriptionStep };
