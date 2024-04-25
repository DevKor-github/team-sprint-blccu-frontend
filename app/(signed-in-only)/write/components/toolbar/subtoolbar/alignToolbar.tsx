import useSelectedEditor from '@/app/(signed-in-only)/write/store/selectedEditor';

const AlignToolbar = () => {
  const editor = useSelectedEditor((state: any) => state.selectedEditor);

  return (
    <div className="fixed bottom-[15%] left-[50%] z-50 h-[8%] w-[28rem] -translate-x-[50%] rounded-[20px] bg-[#fffffff5] shadow-[8px_8px_8px_#00000014] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
      <div className="flex items-center justify-around py-5 align-middle">
        <div onClick={() => editor.chain().focus().setTextAlign('left').run()}>
          좌측
        </div>
        <div
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
        >
          중앙
        </div>
        <div
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        >
          배분
        </div>
        <div onClick={() => editor.chain().focus().setTextAlign('right').run()}>
          우측
        </div>
      </div>
    </div>
  );
};

export default AlignToolbar;
