const SaveToolbar = () => {
  const numberOfSaveFiles = 5;

  return (
    <div className="fixed bottom-[15%] left-[50%] z-50 h-[8%] w-[28rem] -translate-x-[50%] rounded-[20px] bg-[#fffffff5] shadow-[8px_8px_8px_#00000014] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
      <div>임시저장하기</div>
      <div>임시저장 불러오기 {numberOfSaveFiles}</div>
    </div>
  );
};

export default SaveToolbar;
