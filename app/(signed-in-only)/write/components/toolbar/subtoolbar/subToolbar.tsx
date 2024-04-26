'use client';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';

import AlignToolbar from './alignToolbar';
import ImageToolbar from './imageToolbar';
import SaveToolbar from './saveToolbar';
import TextToolbar from './textToolbar';

const SubToolbar = () => {
  const focused = useFocusedStore((state: any) => state.focused);
  if (focused === 'image') {
    return <ImageToolbar />;
  } else if (focused === 'text') {
    return <TextToolbar />;
  } else if (focused === 'align') {
    return <AlignToolbar />;
  } else if (focused === 'save') {
    return <SaveToolbar />;
  }
  return null;
};

export default SubToolbar;
