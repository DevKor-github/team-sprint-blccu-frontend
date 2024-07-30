'use client';

import { NodeViewWrapper } from '@tiptap/react';

import { useCaptureModeStore } from '@/app/(signed-in-only)/write/store/captureMode';
import { useFocusedStore } from '@/app/(signed-in-only)/write/store/focused';
import { useReprImageStore } from '@/app/(signed-in-only)/write/store/reprImage';
import { cn } from '@/lib/utils';

import './font.css';
import './placeholder.css';

// FIXME: props type any
const CustomImageComponent = (props: any) => {
  const { reprImageId, setReprImageId, setReprImageSrc } = useReprImageStore();
  const { setFocused } = useFocusedStore();
  const { captureMode } = useCaptureModeStore();

  const { src, alt, id } = props.node.attrs;

  return (
    <NodeViewWrapper className="grid place-items-center">
      <div className="relative">
        <img src={src} alt={alt} id={id} onClick={() => setFocused('image')} />
        {captureMode || (
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
        )}
      </div>
    </NodeViewWrapper>
  );
};

export { CustomImageComponent };
