import { Button } from '@/components/ui/button';

type WatchRecordsStepProps = {
  onNext: () => void;
};

const WatchRecordsStep = ({ onNext }: WatchRecordsStepProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>WatchRecordsStep</p>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export { WatchRecordsStep };
