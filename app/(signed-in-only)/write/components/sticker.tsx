'use client';

import React, { useState } from 'react';

import useModeStore from '@/app/(signed-in-only)/write/store/mode';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';
import dragEvent from '@/app/(signed-in-only)/write/utils/dragEvent';

const Sticker = ({ clientId }: { clientId: string }) => {
  // DB에서 가져온 이미지 정보를 이용해 스티커를 생성하는 컴포넌트

  const stickerProps = useStickersStore(
    (state: any) => state.stickers[clientId],
  );

  const [position, setPosition] = useState({ x: 200, y: 200 });
  const [size, setSize] = useState({ width: 200, height: 200 });
  const mode = useModeStore((state: any) => state.mode);
  const freeze = () => {
    if (mode === 'write') return 'none';
    return;
  };
  const zIndex = () => {
    if (mode === 'write') return 'z-0';
    return 'z-10';
  };

  return (
    <div
      style={{
        width: size.width,
        height: size.height,
        left: position.x,
        top: position.y,
        pointerEvents: freeze(),
      }}
      className={`absolute ${zIndex()}`}
      id={stickerProps.clientId.toString()}
      {...dragEvent((dx, dy) => {
        setPosition({ x: position.x + dx, y: position.y + dy });
      }, true)}
    >
      <img
        src={stickerProps.src}
        alt="sticker"
        className="h-full w-full object-cover"
      />
      {/* Top left */}
      <div
        className="absolute -left-1 -top-1 h-4 w-4 cursor-nw-resize"
        style={{}}
        {...dragEvent((dx, dy) => {
          setPosition({ x: position.x + dx, y: position.y + dy });
          setSize({ width: size.width - dx, height: size.height - dy });
        }, true)}
      />
      {/* Top right */}
      <div
        className="absolute -right-1 -top-1 h-4 w-4 cursor-ne-resize"
        style={{}}
        {...dragEvent((dx, dy) => {
          setPosition({ x: position.x, y: position.y + dy });
          setSize({ width: size.width + dx, height: size.height - dy });
        }, true)}
      />
      {/* Bottom left */}
      <div
        className="absolute -bottom-1 -left-1 h-4 w-4 cursor-sw-resize"
        style={{}}
        {...dragEvent((dx, dy) => {
          setPosition({ x: position.x + dx, y: position.y });
          setSize({ width: size.width - dx, height: size.height + dy });
        }, true)}
      />
      {/* Bottom right */}
      <div
        className="absolute -bottom-1 -right-1 h-4 w-4 cursor-se-resize"
        style={{}}
        {...dragEvent((dx, dy) => {
          setSize({ width: size.width + dx, height: size.height + dy });
        }, true)}
      />
    </div>
  );
};

export default Sticker;
