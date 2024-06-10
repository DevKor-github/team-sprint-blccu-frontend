import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { type PropsWithTrigger } from '@/types/util';

type LeaveAlertDialogProps = {
  onSubmit: () => void;
} & PropsWithTrigger;

const LeaveAlertDialog = ({ onSubmit, trigger }: LeaveAlertDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent variant="destructive" side="bottom">
        <AlertDialogHeader>
          <AlertDialogDescription>계정을 삭제합니다.</AlertDialogDescription>
          <AlertDialogDescription>
            이는 되돌릴 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소하기</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>삭제하기</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { LeaveAlertDialog };
