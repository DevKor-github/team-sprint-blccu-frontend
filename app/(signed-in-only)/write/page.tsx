import React from 'react';

import MainContent from './components/mainContent';
import BackgroundBottomSheet from './components/toolbar/backgroundBottomSheet';
import MainToolbar from './components/toolbar/mainToolbar';
import StickerBottomSheet from './components/toolbar/stickerBottomSheet';
import SubToolbar from './components/toolbar/subtoolbar/subToolbar';

const WritePage = () => {
  return (
    <div className="min-h-dvh bg-checkerboard">
      <MainContent />
      <MainToolbar />
      <SubToolbar />
      <StickerBottomSheet />
      <BackgroundBottomSheet />
    </div>
  );
};

export default WritePage;
