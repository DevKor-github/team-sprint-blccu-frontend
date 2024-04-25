import CompleteButton from './completeButton';
import ModeSelector from './modeSelector';

const Top = () => {
  return (
    <div className="fixed left-[50%] top-0 z-50 flex h-[5%] w-[100vw] max-w-lg -translate-x-[50%] items-center justify-between">
      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        뒤로가기
      </button>
      <ModeSelector />
      <CompleteButton />
    </div>
  );
};

export default Top;
