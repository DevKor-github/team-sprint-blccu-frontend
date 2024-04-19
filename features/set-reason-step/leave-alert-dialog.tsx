import { useRouter } from 'next/navigation';

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
import { ROUTES } from '@/constants/routes';
import { type PropsWithTrigger } from '@/types/props';

const LeaveAlertDialog = ({ trigger }: PropsWithTrigger) => {
  /**
   * @note
   * - 개발 시 Link와 Button을 구분하고 있습니다. (Button 모양이라도 단순 페이지 이동인 경우 Link 사용)
   * - 이 경우에는, 삭제하기 버튼 클릭 시 API 호출로 변경될 예정이라 예외적으로 Link가 아닌 router.push()를 사용합니다.
   */
  const router = useRouter();

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
          <AlertDialogAction onClick={() => router.push(ROUTES.ROOT)}>
            삭제하기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { LeaveAlertDialog };
