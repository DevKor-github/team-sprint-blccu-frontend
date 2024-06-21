'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import useModeStore from '@/app/(signed-in-only)/write/store/mode';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';

import useCaptureModeStore from '@/app/(signed-in-only)/write/store/captureMode';

interface StickerProps {
  clientId: string;
}

interface Transform {
  scale: number;
  angle: number;
  posX: number;
  posY: number;
}

const Sticker: React.FC<StickerProps> = ({ clientId }) => {
  // DB에서 가져온 이미지 정보를 이용해 스티커를 생성하는 컴포넌트

  const stickerProps = useStickersStore(
    (state: any) => state.stickers[clientId],
  );

  const editPosition = useStickersStore((state: any) => state.editPosition);
  const editSize = useStickersStore((state: any) => state.editSize);

  const focused = useStickersStore((state: any) => state.focused);
  const setFocused = useStickersStore((state: any) => state.setFocused);
  const captureMode = useCaptureModeStore((state: any) => state.captureMode);

  const mode = useModeStore((state: any) => state.mode);

  const freeze = () => {
    if (mode === 'write') return 'none';
    return;
  };
  const zIndex = () => {
    if (mode === 'write') return 'z-0';
    return 'z-10';
  };

  const [transform, setTransform] = useState<Transform>({
    scale: 1,
    angle: 0,
    posX: 100,
    posY: 100,
  });
  const transformRef = useRef<Transform>(transform);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizingRef = useRef(false);
  const draggingRef = useRef(false);
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null);
  const throttleTimeoutRef = useRef<number | null>(null);

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
      x: transform.posX,
      y: transform.posY,
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
    width: '30px',
    height: '30px',
    border: '2px solid black',
    backgroundColor: 'white',
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
          pointerEvents: freeze(),
        }}
        className={zIndex()}
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
          <div
            id="resize-control"
            style={{
              ...resizeControlStyle,
              position: 'absolute',
              bottom: '-15px',
              right: '-15px',
            }}
            onMouseDown={handleResizeMouseDown}
            onTouchStart={handleResizeTouchStart}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Sticker;
