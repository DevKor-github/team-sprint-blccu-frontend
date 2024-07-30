import { MainToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/main-toolbar';
import { SubToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/sub-toolbar';
import { WritePageContent } from '@/app/(signed-in-only)/write/_components/write-page-content';

const WritePage = () => {
  return (
    <div className="min-h-dvh">
      <WritePageContent />
      <MainToolbar />
      <SubToolbar />
    </div>
  );
};

export default WritePage;
