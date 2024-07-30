'use client';

import { AlignToolbar } from '@/app/(signed-in-only)/write/components/toolbar/subtoolbar/alignToolbar';
import { ImageToolbar } from '@/app/(signed-in-only)/write/components/toolbar/subtoolbar/imageToolbar';
import { SaveToolbar } from '@/app/(signed-in-only)/write/components/toolbar/subtoolbar/saveToolbar';
import { TextToolbar } from '@/app/(signed-in-only)/write/components/toolbar/subtoolbar/textToolbar';
import { useFocusedStore } from '@/app/(signed-in-only)/write/store/focused';

const SubToolbar = () => {
  const { focused } = useFocusedStore();

  return (
    <>
      {focused === 'image' && <ImageToolbar />}
      {focused === 'text' && <TextToolbar />}
      {focused === 'align' && <AlignToolbar />}
      {focused === 'save' && <SaveToolbar />}
    </>
  );
};

export { SubToolbar };
