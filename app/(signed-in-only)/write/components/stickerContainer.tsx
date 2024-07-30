'use client';

import { Sticker } from '@/app/(signed-in-only)/write/components/sticker';
import { useStickersStore } from '@/app/(signed-in-only)/write/store/stickers';

const StickerContainer = () => {
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

export { StickerContainer };
