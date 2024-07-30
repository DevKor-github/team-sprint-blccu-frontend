'use client';

import { useEffect, useRef } from 'react';

import Image from '@tiptap/extension-image';
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  mergeAttributes,
} from '@tiptap/react';

import { useCaptureModeStore } from '@/app/(signed-in-only)/write/_store/use-capture-mode-store';
import { useFocusedStore } from '@/app/(signed-in-only)/write/_store/use-focused-store';
import { useReprImageStore } from '@/app/(signed-in-only)/write/_store/use-repr-image-store';
import { cn } from '@/lib/utils';

import './font.css';
import './placeholder.css';

// FIXME: props type any
const CustomImageComponent = (props: any) => {
  const { reprImageId, setReprImageId, setReprImageSrc } = useReprImageStore();
  const { setFocused } = useFocusedStore();
  const { captureMode } = useCaptureModeStore();

  const { src, alt, id, style } = props.node.attrs;

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const handleResize = (e: MouseEvent, direction: string) => {
      e.preventDefault();
      let startX = e.clientX;
      let startWidth = imgElement.offsetWidth;

      const onMouseMove = (e: MouseEvent) => {
        let deltaX = e.clientX - startX;
        if (
          direction === 'left' ||
          direction === 'left-0 top-0' ||
          direction === 'bottom-0 left-0'
        ) {
          deltaX = -deltaX;
        }
        imgElement.style.width = `${startWidth + deltaX}px`;
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const addResizeHandlers = () => {
      const resizeDirections = [
        'left-0 top-0',
        'right-0 top-0',
        'bottom-0 left-0',
        'bottom-0 right-0',
      ];
      resizeDirections.forEach((direction) => {
        const resizeHandle = document.createElement('div');
        resizeHandle.className = `absolute w-3 h-3 bg-gray-500 ${direction}`;
        resizeHandle.style.cursor = `${direction.includes('left') ? 'nwse-resize' : 'nesw-resize'}`;
        resizeHandle.onmousedown = (e) => handleResize(e, direction);
        imgElement.parentElement?.appendChild(resizeHandle);
      });
    };

    const removeResizeHandlers = () => {
      const resizeHandles = imgElement.parentElement?.querySelectorAll(
        '.absolute.w-3.h-3.bg-gray-500',
      );
      resizeHandles?.forEach((handle) => handle.remove());
    };

    const handleClick = () => {
      if (
        imgElement.parentElement?.querySelectorAll(
          '.absolute.w-3.h-3.bg-gray-500',
        ).length
      ) {
        removeResizeHandlers();
      } else {
        addResizeHandlers();
      }
    };

    imgElement.addEventListener('click', handleClick);
    return () => {
      imgElement.removeEventListener('click', handleClick);
    };
  }, []);

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

  return (
    <NodeViewWrapper className="grid h-auto w-auto" style={{ ...style }}>
      <div className="relative h-auto w-auto" ref={containerRef}>
        <img
          src={src}
          alt={alt}
          id={id}
          ref={imgRef}
          style={style}
          onClick={() => setFocused('image')}
        />
        {captureMode || (
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
            <div className="absolute left-1/2 top-0 flex -translate-x-1/2 transform space-x-2">
              <img
                src="left-align-icon-url"
                className="cursor-pointer"
                onClick={() => handlePosition('left')}
              />
              <img
                src="center-align-icon-url"
                className="cursor-pointer"
                onClick={() => handlePosition('center')}
              />
              <img
                src="right-align-icon-url"
                className="cursor-pointer"
                onClick={() => handlePosition('right')}
              />
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
