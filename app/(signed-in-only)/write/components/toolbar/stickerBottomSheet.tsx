'use client';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';

const StickerBottomSheet = () => {
  /*
    const {isPending, error, data} = useQuery({
        queryKey: ['stickercg'],
        queryFn: async () => {
            const res = await fetch('https://api.blccu.com/stickercg');
            return res.json();
        }
    });
    */

  const data = [
    { id: 1, name: '카테고리1' },
    { id: 2, name: '카테고리2' },
    { id: 3, name: '카테고리3' },
  ];

  const dummyStickerData = [
    {
      id: 1,
      src: 'https://picsum.photos/600/600',
      x: 200,
      y: 200,
      w: 200,
      h: 200,
    },
    {
      id: 2,
      src: 'https://picsum.photos/600/600',
      x: 200,
      y: 200,
      w: 200,
      h: 200,
    },
    {
      id: 2,
      src: 'https://picsum.photos/600/600',
      x: 200,
      y: 200,
      w: 200,
      h: 200,
    },
    {
      id: 3,
      src: 'https://picsum.photos/600/600',
      x: 200,
      y: 200,
      w: 200,
      h: 200,
    },
    {
      id: 4,
      src: 'https://picsum.photos/600/600',
      x: 200,
      y: 200,
      w: 200,
      h: 200,
    },
  ];

  const focused = useFocusedStore((state: any) => state.focused);
  const setFocused = useFocusedStore((state: any) => state.setFocused);
  const addSticker = useStickersStore((state: any) => state.addSticker);

  const addStickerOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const id = Number((e.target as HTMLElement).getAttribute('id'));
    const stickerProps = {
      ...dummyStickerData[id - 1],
      clientId: Math.floor(Math.random() * 1000000).toString(),
    };
    addSticker(
      // 스티커 정보 추가
      stickerProps,
    );
  };

  if (focused !== 'sticker') {
    return null;
  }

  return (
    <div>
      <div
        className="fixed left-[50%] top-0 z-50 h-[50%] w-[32rem] max-w-lg -translate-x-[50%] bg-opacity-100"
        onClick={() => {
          setFocused('init');
        }}
      />
      <div className="fixed bottom-0 left-[50%] z-50 h-[50%] w-[32rem] max-w-lg -translate-x-[50%] rounded-[20px_20px_0px_0px] bg-[#FFFFFF] shadow-[8px_-40px_40px_#0000000a]">
        <div className="container flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {data.map((item) => (
              <div className="px-4 py-2" key={item.id}>
                {item.name}
              </div>
            ))}
            <div>스티커 추가</div>
          </div>
        </div>
        <div className="container grid max-h-[50vh] grid-cols-4 gap-4 overflow-y-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src={dummyStickerData[0].src}
              id={dummyStickerData[0].id.toString()}
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
              onClick={addStickerOnClick}
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src={dummyStickerData[1].src}
              id={dummyStickerData[1].id.toString()}
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src={dummyStickerData[2].src}
              id={dummyStickerData[2].id.toString()}
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src={dummyStickerData[3].src}
              id={dummyStickerData[3].id.toString()}
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src="https://picsum.photos/600/600"
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src="https://picsum.photos/600/600"
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src="https://picsum.photos/600/600"
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src="https://picsum.photos/600/600"
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg">
            <img
              src="https://picsum.photos/600/600"
              alt="sticker"
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            Sticker3
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerBottomSheet;
