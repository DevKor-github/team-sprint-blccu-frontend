const ImageToolbar = () => {
  return (
    <div className="fixed bottom-[15%] left-[50%] z-50 h-[8%] w-[28rem] -translate-x-[50%] rounded-[20px] bg-[#fffffff5] shadow-[8px_8px_8px_#00000014] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
      <div className="flex items-center justify-around py-5 align-middle">
        <div>자르기</div>
        <div>회전</div>
        <div>대표 사진</div>
        <div>버리기</div>
      </div>
    </div>
  );
};

export default ImageToolbar;
