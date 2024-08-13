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
          keepRatio
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
          ]}
          borderStroke="#dddddd"
          anchorStroke="#dddddd"
          anchorCornerRadius={5}
          rotateAnchorCursor="pointer"
          rotateAnchorOffset={20}
          padding={12}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 20 || Math.abs(newBox.height) < 20) {
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
