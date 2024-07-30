import { MainContent } from '@/app/(signed-in-only)/write/components/mainContent';
import { MainToolbar } from '@/app/(signed-in-only)/write/components/toolbar/mainToolbar';
import { SubToolbar } from '@/app/(signed-in-only)/write/components/toolbar/subtoolbar/subToolbar';

const WritePage = () => {
  return (
    <div className="min-h-dvh">
      <MainContent />
      <MainToolbar />
      <SubToolbar />
    </div>
  );
};

export default WritePage;
