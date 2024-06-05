'use client';

import useSelectedEditor from '@/app/(signed-in-only)/write/store/selectedEditor';

const TextToolbar = () => {
  const editor = useSelectedEditor((state: any) => state.selectedEditor);

  const colorInput = (e: any) => {
    if (!editor) {
      return;
    }
    editor
      ?.chain()
      .focus()
      .setColor((e.target as HTMLInputElement).value)
      .run();
  };

  return (
    <div className="fixed bottom-[15%] left-[50%] z-50 h-[8%] w-[28rem] -translate-x-[50%] rounded-[20px] bg-[#fffffff5] shadow-[8px_8px_8px_#00000014] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
      <div className="flex items-center justify-around py-5 align-middle">
        <div
          onClick={() => {
            if (!editor) return;
            else editor.chain().focus().setFontFamily('Inter').run();
          }}
        >
          글씨체
        </div>
        <div
          onClick={() => {
            if (!editor) return;
            editor.chain().focus().toggleBold().run();
          }}
        >
          굵기
        </div>
        <div
          onClick={() => {
            if (!editor) return;
            editor.chain().focus().setFontSize('20pt').run();
          }}
        >
          크기
        </div>
        <div>
          <div onClick={() => document.getElementById('setcolor')?.click()}>
            색상
          </div>
          <input
            type="color"
            style={{ display: 'none' }}
            onInput={colorInput}
            id="setcolor"
          />
        </div>
        <div
          onClick={() => {
            if (!editor) return;
            editor.chain().focus().toggleUnderline().run();
          }}
        >
          밑줄
        </div>
        <div
          onClick={() => {
            if (!editor) return;
            editor.chain().focus().toggleStrike().run();
          }}
        >
          취소선
        </div>
        <div
          onClick={() => {
            if (!editor) return;
            editor.chain().focus().toggleItalic().run();
          }}
        >
          기울이기
        </div>
      </div>
    </div>
  );
};

export default TextToolbar;
