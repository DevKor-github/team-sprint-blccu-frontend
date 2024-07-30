import { PublishArticleDialog } from '@/app/(signed-in-only)/write/_components/dialog/publish-article-dialog';
import { ModeSelect } from '@/app/(signed-in-only)/write/_components/mode-select';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';

const WritePageAppBar = () => {
  return (
    <AppBar className="justify-between border-none bg-transparent">
      <AppBarBack />
      <AppBarTitle align="center">
        <ModeSelect />
      </AppBarTitle>
      <PublishArticleDialog trigger={<Button variant="ghost">완료</Button>} />
    </AppBar>
  );
};

export { WritePageAppBar };
