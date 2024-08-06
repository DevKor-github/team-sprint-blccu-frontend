import { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';

import type Konva from 'konva';
import useImage from 'use-image';

import { useCaptureModeStore } from '@/app/(signed-in-only)/write/_store/use-capture-mode-store';
import { type Sticker as StickerType } from '@/app/(signed-in-only)/write/_store/use-stickers-store';

type StickerProps = {
  sticker: StickerType;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: StickerType) => void;
};

const Sticker = ({ sticker, isSelected, onSelect, onChange }: StickerProps) => {
  const shapeRef = useRef<Konva.Image>(null);
  const trRef = useRef<Konva.Transformer>(null);

  const [image] = useImage(sticker.src, 'anonymous');

  const { captureMode } = useCaptureModeStore();

  useEffect(() => {
    if (shapeRef.current === null || trRef.current === null) {
      return;
    }

    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected, shapeRef, trRef]);

  return (
    <>
      <Image
        image={image}
        width={300}
        height={300}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...sticker,
            posX: e.target.x(),
            posY: e.target.y(),
          });
        }}
      />
      {isSelected && !captureMode && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export { Sticker };

// Ref: https://konvajs.org/docs/react/Transformer.html
