import ModeSelector from '@/app/(signed-in-only)/write/components/modeSelector';
import { PublishPostDialog } from '@/app/(signed-in-only)/write/dialog/publish-post-dialog';
import useCaptureModeStore from '@/app/(signed-in-only)/write/store/captureMode';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';

const Top = () => {
  const setCaptureMode = useCaptureModeStore(
    (state: any) => state.setCaptureMode,
  );

  return (
    <AppBar className="justify-between border-none bg-transparent">
      <AppBarBack />
      <AppBarTitle align="center">
        <ModeSelector />
      </AppBarTitle>
      <PublishPostDialog
        trigger={
          <Button onClick={setCaptureMode(true)} variant="ghost">
            완료
          </Button>
        }
      />
    </AppBar>
  );
};

export default Top;
