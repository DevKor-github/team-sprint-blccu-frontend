import { useEffect } from 'react';

import { MainToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/main-toolbar';
import { SubToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/sub-toolbar';
import { WritePageContent } from '@/app/(signed-in-only)/write/_components/write-page-content';
import { useStickersStore } from '@/app/(signed-in-only)/write/_store/use-stickers-store';

import { useEditorContentsStore } from './_store/use-editor-contents-store';

const WritePage = () => {
  const { setStickers } = useStickersStore();
  const { setBackground } = useEditorContentsStore();

  useEffect(() => {
    setStickers({});
    setBackground(null);

    return () => {
      setStickers({});
      setBackground(null);
    };
  }, [setStickers, setBackground]);

  return (
    <div className="min-h-dvh">
      <WritePageContent />
      <MainToolbar />
      <SubToolbar />
    </div>
  );
};

export default WritePage;
