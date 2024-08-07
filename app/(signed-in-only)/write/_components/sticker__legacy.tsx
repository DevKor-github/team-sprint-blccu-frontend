'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useCaptureModeStore } from '@/app/(signed-in-only)/write/_store/use-capture-mode-store';
import { useEditorModeStore } from '@/app/(signed-in-only)/write/_store/use-editor-mode-store';
import { useStickersStore } from '@/app/(signed-in-only)/write/_store/use-stickers-store';
import { cn } from '@/lib/utils';

interface Sticker__LegacyProps {
  clientId: string;
}

interface Transform {
  scale: number;
  angle: number;
  posX: number;
  posY: number;
}

const Sticker__Legacy = ({ clientId }: Sticker__LegacyProps) => {
  // DB에서 가져온 이미지 정보를 이용해 스티커를 생성하는 컴포넌트

  const {
    stickers,
    focused,
    setFocused,
    editPosition,
    editSize,
    deleteSticker,
  } = useStickersStore();
  const { captureMode } = useCaptureModeStore();
  const { editorMode } = useEditorModeStore();

  const stickerProps = stickers[clientId];

  const [transform, setTransform] = useState<Transform>({
    scale: 1,
    angle: 0,
    posX: 100,
    posY: 100,
  });

  useEffect(() => {
    if (stickerProps) {
      setTransform({
        scale: stickerProps.scale,
        angle: stickerProps.angle,
        posX: stickerProps.posX,
        posY: stickerProps.posY,
      });
    }
  }, []);

  const transformRef = useRef<Transform>(transform);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizingRef = useRef(false);
  const draggingRef = useRef(false);
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null);
  const throttleTimeoutRef = useRef<number | null>(null);

  // TODO: type this
  const throttle = (func: (...args: any[]) => void, delay: number) => {
    return (...args: any[]) => {
      if (throttleTimeoutRef.current === null) {
        func(...args);
        throttleTimeoutRef.current = window.setTimeout(() => {
          throttleTimeoutRef.current = null;
        }, delay);
      }
    };
  };

  const handleMouseOrTouchMove = useCallback(
    (event: TouchEvent | MouseEvent): void => {
      const clientX =
        event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
      const clientY =
        event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;

      if (focused === clientId) {
        if (resizingRef.current) {
          // Resizing
          if (!containerRef.current) return;
          event.stopPropagation();

          const rect = containerRef.current.getBoundingClientRect();
          const center = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };

          const dx = clientX - center.x;
          const dy = clientY - center.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);

          setTransform((prev) => ({
            ...prev,
            scale: distance / (rect.width / 2) || 1,
            angle: angle - 90,
          }));
        } else if (draggingRef.current && lastPositionRef.current) {
          // Dragging
          event.stopPropagation();

          const dx = clientX - lastPositionRef.current.x;
          const dy = clientY - lastPositionRef.current.y;

          if (Number.isNaN(dx) || Number.isNaN(dy)) {
            return;
          }

          setTransform((prev) => ({
            ...prev,
            posX: prev.posX + dx,
            posY: prev.posY + dy,
          }));

          lastPositionRef.current = { x: clientX, y: clientY };
        }
      }
    },
    [clientId, focused],
  );

  const throttledMouseOrTouchMove = useCallback(
    throttle(handleMouseOrTouchMove, 50),
    [handleMouseOrTouchMove],
  );

  const handleMouseOrTouchEnd = useCallback((): void => {
    draggingRef.current = false;
    resizingRef.current = false;
    transformRef.current = transform;
    editPosition({
      clientId,
      posX: transform.posX,
      posY: transform.posY,
    });
    editSize({
      clientId,
      scale: transform.scale,
      angle: transform.angle,
    });
  }, [transform]);

  const handleMouseDown = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setFocused(clientId);
    draggingRef.current = true;
    lastPositionRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleTouchStart = (event: React.TouchEvent): void => {
    event.stopPropagation();
    setFocused(clientId);
    draggingRef.current = true;
    if (event.touches.length > 0) {
      lastPositionRef.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    }
  };

  const handleResizeMouseDown = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setFocused(clientId);
    resizingRef.current = true;
  };

  const handleResizeTouchStart = (event: React.TouchEvent): void => {
    event.stopPropagation();
    setFocused(clientId);
    resizingRef.current = true;
  };

  // Add and remove global event listeners for mouse/touch movement and end events
  useEffect(() => {
    const handleMove = (event: TouchEvent | MouseEvent) =>
      throttledMouseOrTouchMove(event);
    const handleEnd = () => handleMouseOrTouchEnd();

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [throttledMouseOrTouchMove, handleMouseOrTouchEnd]);

  const resizeControlStyle = {
    position: 'absolute',
    width: '24px',
    height: '24px',
    transform: `scale(${1 / transform.scale})`,
    border: '2px solid black',
    backgroundColor: 'white',
    borderRadius: '50%',
    touchAction: 'none',
    cursor: 'pointer',
  };

  const deleteControlStyle = {
    position: 'absolute',
    width: '24px',
    height: '24px',
    transform: `scale(${1 / transform.scale})`,
    backgroundColor: 'red',
    borderRadius: '50%',
    touchAction: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          touchAction: 'none',
          width: '200px',
          top: transform.posY,
          left: transform.posX,
          transform: `rotate(${transform.angle}deg) scale(${transform.scale})`,
          transformOrigin: 'center',
          transition: 'transform 0.1s ease',
          border:
            focused === clientId && !captureMode ? '2px solid black' : 'none',
        }}
        className={cn(
          editorMode === 'write' ? 'pointer-events-none z-0' : 'z-10',
        )}
        id={stickerProps.clientId.toString()}
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
      >
        <img
          src={stickerProps.src}
          alt="sticker"
          className="h-full w-full object-contain"
          crossOrigin="anonymous"
        />
        {focused === clientId && !captureMode ? (
          <>
            <div
              id="resize-control"
              style={{
                ...resizeControlStyle,
                position: 'absolute',
                bottom: '-12px',
                right: '-12px',
              }}
              onMouseDown={handleResizeMouseDown}
              onTouchStart={handleResizeTouchStart}
            />
            <div
              id="delete-control"
              style={{
                ...deleteControlStyle,
                position: 'absolute',
                top: '-12px',
                right: '-12px',
              }}
              onClick={() => {
                deleteSticker(stickerProps);
              }}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

// export { Sticker__Legacy };
