'use client';

import { Sticker } from '@/app/(signed-in-only)/write/_components/sticker';
import { useStickersStore } from '@/app/(signed-in-only)/write/_store/use-stickers-store';

const StickerLayer = () => {
  const { stickers } = useStickersStore();

  return (
    <div className="absolute">
      {Object.values(stickers).map((sticker) => (
        <Sticker
          key={sticker.clientId}
          clientId={sticker.clientId.toString()}
        />
      ))}
    </div>
  );
};

export { StickerLayer };
