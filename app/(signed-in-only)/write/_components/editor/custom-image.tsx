'use client';

import { useEffect, useRef } from 'react';

import Image from '@tiptap/extension-image';
import {
  type NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
  mergeAttributes,
} from '@tiptap/react';

import { useCaptureModeStore } from '@/app/(signed-in-only)/write/_store/use-capture-mode-store';
import { useReprImageStore } from '@/app/(signed-in-only)/write/_store/use-repr-image-store';
import AlignCenter from '@/assets/svg/align-center.svg';
import AlignLeft from '@/assets/svg/align-left.svg';
import AlignRight from '@/assets/svg/align-right.svg';
import Delete from '@/assets/svg/delete.svg';
import ImageResizer from '@/assets/svg/image-resizer.svg';
import { cn } from '@/lib/utils';

import { useCustomImageFocusStore } from '@/app/(signed-in-only)/write/_store/use-custom-image-focus-store';
import './font.css';
import './placeholder.css';

const CustomImageComponent = (props: NodeViewProps) => {
  const { reprImageId, setReprImageId, setReprImageSrc } = useReprImageStore();
  const { captureMode } = useCaptureModeStore();
  const { focusedCustomImage, setFocusedCustomImage } =
    useCustomImageFocusStore();

  const { src, alt, id, style } = props.node.attrs;
  const isFocusedCustomImage = focusedCustomImage === id;

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    const resizeHandle = resizerRef.current;
    if (!imgElement || !resizeHandle) return;

    const handleResize = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      let startX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      let startWidth = imgElement.offsetWidth;

      const onMove = (e: MouseEvent | TouchEvent) => {
        let clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        let deltaX = clientX - startX;
        imgElement.style.width = `${startWidth + deltaX}px`;
      };

      const onEnd = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onEnd);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onEnd);
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onEnd);
      document.addEventListener('touchmove', onMove);
      document.addEventListener('touchend', onEnd);
    };

    resizeHandle.ontouchstart = (e) => handleResize(e);
    resizeHandle.onmousedown = (e) => handleResize(e);

    return () => {
      resizeHandle.removeEventListener('mousedown', handleResize);
      resizeHandle.removeEventListener('touchstart', handleResize);
    };
  }, [focusedCustomImage, id, setFocusedCustomImage]);

  const handlePosition = (position: string) => {
    if (containerRef.current) {
      switch (position) {
        case 'left':
          containerRef.current.style.margin = '0 auto 0 0';
          break;
        case 'center':
          containerRef.current.style.margin = '0 auto';
          break;
        case 'right':
          containerRef.current.style.margin = '0 0 0 auto';
          break;
        default:
          break;
      }
    }
  };

  const deleteImage = () => {
    props.deleteNode();
  };

  return (
    <NodeViewWrapper className="grid h-auto w-auto" style={{ ...style }}>
      <div
        className={`relative mb-0 ml-0 mr-auto mt-0 h-auto w-auto ${isFocusedCustomImage && !captureMode ? 'border-2 border-[#1A1A1A]' : ''}`}
        ref={containerRef}
      >
        <img
          src={src}
          alt={alt}
          id={id}
          ref={imgRef}
          style={style}
          onClick={() => setFocusedCustomImage(id)}
        />
        {!captureMode && isFocusedCustomImage && (
          <>
            <button
              onClick={() => {
                setReprImageId(id);
                setReprImageSrc(src);
              }}
              className={cn(
                'absolute left-2 top-2 p-1',
                reprImageId === id
                  ? 'border-2 border-[#FFFFFF] bg-[#1A1A1A] text-[#FFFFFF]'
                  : 'border-2 border-[#1A1A1A] bg-[#FFFFFF] text-[#1A1A1A] opacity-60',
              )}
            >
              대표 이미지
            </button>
            <div className="absolute left-1/2 top-[-50px] h-[40px] w-1/2 -translate-x-1/2 transform content-center justify-center space-x-2 rounded-full bg-blccu-white drop-shadow-md">
              <div className="flex h-[20px] w-[100%] content-center justify-center gap-[10%]">
                <AlignLeft
                  className="cursor-pointer"
                  onClick={() => handlePosition('left')}
                />
                <AlignCenter
                  className="cursor-pointer"
                  onClick={() => handlePosition('center')}
                />
                <AlignRight
                  className="cursor-pointer"
                  onClick={() => handlePosition('right')}
                />
                <Delete className="cursor-pointer" onClick={deleteImage} />
              </div>
            </div>
            <div
              ref={resizerRef}
              className="absolute bottom-[-10px] right-[-10px] cursor-pointer"
            >
              <ImageResizer />
            </div>
          </>
        )}
      </div>
    </NodeViewWrapper>
  );
};

const CustomImage = Image.extend({
  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      id: {
        default: null,
      },
      className: {
        default: 'grid place-items-center',
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(CustomImageComponent);
  },
});

export { CustomImage };
