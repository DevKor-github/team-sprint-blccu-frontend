'use client';

import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';

const CompleteButton = () => {
  const titleContents = useEditorContentsStore(
    (state: any) => state.titleContents,
  );
  const bodyContents = useEditorContentsStore(
    (state: any) => state.bodyContents,
  );
  //const stickers = useStickersStore((state: any) => state.stickers);

  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 text-white"
      onClick={() => {
        // 콘솔로그 대신 데이터 서버랑 발행 페이지에 전달
        console.log(titleContents);
        console.log(bodyContents);
        //console.log(stickers);
        document.getElementById('screenshot')?.click();
      }}
    >
      완료
    </button>
  );
};

export default CompleteButton;
