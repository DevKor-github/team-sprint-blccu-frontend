import MainContent from './components/mainContent';
import MainToolbar from './components/toolbar/mainToolbar';
import StickerBottomSheet from './components/toolbar/stickerBottomSheet';
import SubToolbar from './components/toolbar/subtoolbar/subToolbar';

const WritePage = () => {
  return (
    <div className="min-h-dvh">
      <MainContent />
      <MainToolbar />
      <SubToolbar />
      <StickerBottomSheet />
    </div>
  );
};

export default WritePage;
