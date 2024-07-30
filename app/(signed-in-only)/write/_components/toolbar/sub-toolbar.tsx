'use client';

import { AlignSubToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/align-sub-toolbar';
import { ImageSubToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/image-sub-toolbar';
import { SaveSubToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/save-sub-toolbar';
import { TextSubToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/text-sub-toolbar';
import { useFocusedStore } from '@/app/(signed-in-only)/write/_store/use-focused-store';

const SubToolbar = () => {
  const { focused } = useFocusedStore();

  return (
    <>
      {focused === 'image' && <ImageSubToolbar />}
      {focused === 'text' && <TextSubToolbar />}
      {focused === 'align' && <AlignSubToolbar />}
      {focused === 'save' && <SaveSubToolbar />}
    </>
  );
};

export { SubToolbar };
