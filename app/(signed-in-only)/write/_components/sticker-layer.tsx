'use client';

import { useState } from 'react';
import { Layer, Stage } from 'react-konva';

import type Konva from 'konva';

import { Sticker } from '@/app/(signed-in-only)/write/_components/sticker';
import {
  type Sticker as StickerType,
  useStickersStore,
} from '@/app/(signed-in-only)/write/_store/use-stickers-store';

type StickerLayerProps = {
  height: number;
};

const StickerLayer = ({ height }: StickerLayerProps) => {
  const { stickers, setStickers } = useStickersStore();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const checkDeselect = (
    e: Konva.KonvaEventObject<MouseEvent> | Konva.KonvaEventObject<TouchEvent>,
  ) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  return (
    <Stage
      width={Math.min(window.innerWidth, 640)}
      height={height}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      className="absolute"
    >
      <Layer>
        {Object.values(stickers).map((sticker) => (
          <Sticker
            key={sticker.clientId}
            sticker={sticker}
            isSelected={sticker.clientId === selectedId}
            onSelect={() => {
              setSelectedId(sticker.clientId);
            }}
            onChange={(newAttrs: StickerType) => {
              const newStickers = { ...stickers };

              newStickers[sticker.clientId] = {
                ...newAttrs,
              };

              setStickers(newStickers);
            }}
            onDelete={() => {
              const newStickers = { ...stickers };

              delete newStickers[sticker.clientId];

              setStickers(newStickers);
            }}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export { StickerLayer };
