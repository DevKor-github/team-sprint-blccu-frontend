import ModeSelector from '@/app/(signed-in-only)/write/components/modeSelector';
import { useEditorCompleteButton } from '@/app/(signed-in-only)/write/hooks/use-editor-complete-button';
import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';

const Top = () => {
  const { handleCompleteButtonClick } = useEditorCompleteButton();

  return (
    <AppBar className="justify-between border-none bg-transparent">
      <AppBarBack />
      <ModeSelector />
      <Button variant="ghost" onClick={handleCompleteButtonClick}>
        완료
      </Button>
    </AppBar>
  );
};

export default Top;
