'use client';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';

const BackgroundBottomSheet = () => {
  const focused = useFocusedStore((state: any) => state.focused);
  const setFocused = useFocusedStore((state: any) => state.setFocused);

  if (focused !== 'background') {
    return null;
  }

  return (
    <div>
      <div
        className="fixed left-[50%] top-0 z-50 h-[50%] w-[32rem] max-w-md -translate-x-[50%] bg-opacity-100"
        onClick={() => {
          setFocused('init');
        }}
      />
      <div className="fixed bottom-0 left-[50%] z-50 h-[50%] w-[32rem] max-w-md -translate-x-[50%] rounded-[20px_20px_0px_0px] bg-[#FFFFFF] shadow-[8px_-40px_40px_#0000000a]">
        <div className="container grid max-h-[50vh] grid-cols-2 gap-4 overflow-y-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            Background1
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            Background2
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            Background3
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            Background4
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBottomSheet;
