import { useEffect, useRef, useState } from 'react';
import { Circle, Image, Transformer } from 'react-konva';

import type Konva from 'konva';
import useImage from 'use-image';

import { useCaptureModeStore } from '@/app/(signed-in-only)/write/_store/use-capture-mode-store';
import { type Sticker as StickerType } from '@/app/(signed-in-only)/write/_store/use-stickers-store';

type StickerProps = {
  sticker: StickerType;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: StickerType) => void;
  onDelete: () => void;
};

const calculateRatio = (width?: number, height?: number) => {
  if (width && height) {
    return width / height;
  }

  return 1;
};

const Sticker = ({
  sticker,
  isSelected,
  onSelect,
  onChange,
  onDelete,
}: StickerProps) => {
  const shapeRef = useRef<Konva.Image>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const deleteButtonRef = useRef<Konva.Circle>(null);

  const [image] = useImage(sticker.src, 'anonymous');

  const [ratio, setRatio] = useState<number>(1);

  const { captureMode } = useCaptureModeStore();

  useEffect(() => {
    if (shapeRef.current === null || trRef.current === null) {
      return;
    }

    if (isSelected) {
      // Move the sticker to the top when selected
      shapeRef.current.moveToTop();

      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected, shapeRef, trRef]);

  useEffect(() => {
    setRatio(calculateRatio(image?.width, image?.height));
  }, [image]);

  return (
    <>
      <Image
        image={image}
        width={100 * ratio}
        height={100}
        x={sticker.posX}
        y={sticker.posY}
        onClick={() => {
          onSelect();
          shapeRef.current?.moveToTop();
        }}
        onTap={() => {
          onSelect();
          shapeRef.current?.moveToTop();
        }}
        ref={shapeRef}
        draggable
        onDragStart={() => {
          onSelect();
          shapeRef.current?.moveToTop();
        }}
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
        >
          <Circle
            radius={8}
            fill="#eeeeee"
            x={-12}
            y={-12}
            ref={deleteButtonRef}
            onClick={onDelete}
          />
        </Transformer>
      )}
    </>
  );
};

export { Sticker };

// Ref: https://konvajs.org/docs/react/Transformer.html
