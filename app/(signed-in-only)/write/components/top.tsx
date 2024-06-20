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
  return (
    <AppBar className="justify-between border-none bg-transparent">
      <AppBarBack />
      <AppBarTitle align="center">
        <ModeSelector />
      </AppBarTitle>
      <PublishPostDialog trigger={<Button variant="ghost">완료</Button>} />
    </AppBar>
  );
};

export default Top;
