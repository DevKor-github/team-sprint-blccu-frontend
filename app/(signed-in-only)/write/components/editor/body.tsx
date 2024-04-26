'use client';

import React from 'react';

import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useReprImageStore from '@/app/(signed-in-only)/write/store/reprImage';
import useSelectedEditorStore from '@/app/(signed-in-only)/write/store/selectedEditor';

import './placeholder.css';

const Body = () => {
  const setBodyContents = useEditorContentsStore(
    (state: any) => state.setBodyContents,
  );
  const setSelectedEditor = useSelectedEditorStore(
    (state: any) => state.setSelectedEditor,
  );

  const reprImage = useReprImageStore((state: any) => state.reprImage);
  const setReprImage = useReprImageStore((state: any) => state.setReprImage);

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
    addNodeView() {
      return ({ node }) => {
        const container = document.createElement('p');
        const img = document.createElement('img');
        const src = node.attrs.src;
        const id = node.attrs.id;
        const className = node.attrs.className;
        img.id = id;
        img.src = src;
        container.className = className;
        container.append(img);

        return {
          dom: container,
          contentDOM: img,
        };
      };
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      FontFamily,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      CustomImage,
      Placeholder.configure({ placeholder: '본문을 작성해주세요' }),
    ],
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
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
