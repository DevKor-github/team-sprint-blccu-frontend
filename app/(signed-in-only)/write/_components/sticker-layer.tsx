'use client';

import { useEffect, useState } from 'react';
import { Layer, Stage } from 'react-konva';

import type Konva from 'konva';

import { Sticker } from '@/app/(signed-in-only)/write/_components/sticker';
import { useCaptureModeStore } from '@/app/(signed-in-only)/write/_store/use-capture-mode-store';
import { useEditorContentsStore } from '@/app/(signed-in-only)/write/_store/use-editor-contents-store';
import { useEditorModeStore } from '@/app/(signed-in-only)/write/_store/use-editor-mode-store';
import {
  type Sticker as StickerType,
  useStickersStore,
} from '@/app/(signed-in-only)/write/_store/use-stickers-store';
import { cn } from '@/lib/utils';

type StickerLayerProps = {
  height: number;
};

const StickerLayer = ({ height }: StickerLayerProps) => {
  const { stickers, setStickers } = useStickersStore();

  const { editorMode } = useEditorModeStore();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { setBackground } = useEditorContentsStore();

  useEffect(() => {
    setStickers({});
    setBackground(null);

    return () => {
      setStickers({});
      setBackground(null);
    };
  }, [setStickers, setBackground]);

  useEffect(() => {
    const unsubscribeEditorMode = useEditorModeStore.subscribe(
      ({ editorMode }) => {
        if (editorMode === 'write') {
          setSelectedId(null);
        }
      },
    );

    const unsubscribeCaptureMode = useCaptureModeStore.subscribe(
      ({ captureMode }) => {
        if (captureMode) {
          setSelectedId(null);
        }
      },
    );

    return () => {
      unsubscribeEditorMode();
      unsubscribeCaptureMode();
    };
  });

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
      className={cn('absolute', editorMode === 'deco' && 'z-10')}
    >
      <Layer listening={editorMode === 'deco'}>
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
