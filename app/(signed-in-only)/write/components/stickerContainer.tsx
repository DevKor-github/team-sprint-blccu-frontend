'use client';

import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';
import Sticker from './sticker';

const StickerContainer = () => {
  const stickers = useStickersStore((state: any) => state.stickers);
  return (
    <div className="absolute">
      {Object.values(stickers).map((sticker: any) => (
        <Sticker
          key={sticker.clientId}
          clientId={sticker.clientId.toString()}
        />
      ))}
    </div>
  );
};

export default StickerContainer;
