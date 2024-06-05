import MainContent from './components/mainContent';
import MainToolbar from './components/toolbar/mainToolbar';
import SubToolbar from './components/toolbar/subtoolbar/subToolbar';

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
