import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';

const useEditorCompleteButton = () => {
  const titleContents = useEditorContentsStore(
    (state: any) => state.titleContents,
  );
  const bodyContents = useEditorContentsStore(
    (state: any) => state.bodyContents,
  );
  //const stickers = useStickersStore((state: any) => state.stickers);

  const handleCompleteButtonClick = () => {
    // 콘솔로그 대신 데이터 서버랑 발행 페이지에 전달
    console.log(titleContents);
    console.log(bodyContents);
    //console.log(stickers);
    document.getElementById('screenshot')?.click();
  };

  return {
    handleCompleteButtonClick,
  };
};

export { useEditorCompleteButton };
