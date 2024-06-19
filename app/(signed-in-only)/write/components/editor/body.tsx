'use client';

import Bold from '@tiptap/extension-bold';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import DropCursor from '@tiptap/extension-dropcursor';
import FontFamily from '@tiptap/extension-font-family';
import GapCursor from '@tiptap/extension-gapcursor';
import History from '@tiptap/extension-history';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import {
  EditorContent,
  NodeViewWrapper,
  ReactNodeViewRenderer,
  mergeAttributes,
  useEditor,
} from '@tiptap/react';

import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useReprImageStore from '@/app/(signed-in-only)/write/store/reprImage';
import useSelectedEditorStore from '@/app/(signed-in-only)/write/store/selectedEditor';
import { FontSize } from '@/app/(signed-in-only)/write/utils/setFontSize';

import './font.css';
import './placeholder.css';

const Body = () => {
  const { setBodyContents } = useEditorContentsStore((state) => state);

  const setSelectedEditor = useSelectedEditorStore(
    (state: any) => state.setSelectedEditor,
  );

  const CustomImageComponent = (props: any) => {
    const reprImageId = useReprImageStore((state: any) => state.reprImageId);
    const setReprImageId = useReprImageStore(
      (state: any) => state.setReprImageId,
    );

    const setReprImageSrc = useReprImageStore(
      (state: any) => state.setReprImageSrc,
    );

    const { src, alt, id } = props.node.attrs;

    const buttonStyle = `${reprImageId === id ? 'bg-[#FFFFFF] text-[#1A1A1A]' : 'bg-[#1A1A1A] text-[#FFFFFF]'} absolute top-2 left-2 p-1`;

    return (
      <NodeViewWrapper className="grid place-items-center">
        <div className="relative">
          <img src={src} alt={alt} id={id} />
          <button
            onClick={() => {
              setReprImageId(id);
              setReprImageSrc(src);
            }}
            className={buttonStyle}
          >
            대표 이미지
          </button>
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

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      History,
      DropCursor,
      GapCursor,
      Bold,
      Italic,
      Strike,
      TextStyle,
      FontSize,
      Color,
      FontFamily,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      CustomImage,
      Placeholder.configure({ placeholder: '본문을 작성해주세요' }),
    ],
    onUpdate: ({ editor }) => {
      const json = editor.getHTML();
      setBodyContents(json);
    },
  });

  return (
    <div className="pt-[2%]">
      <EditorContent
        editor={editor}
        onFocus={() => {
          setSelectedEditor(editor);
        }}
      />
    </div>
  );
};

export default Body;
