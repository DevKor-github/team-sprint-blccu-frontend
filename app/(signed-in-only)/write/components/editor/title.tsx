'use client';

import Bold from '@tiptap/extension-bold';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import DropCursor from '@tiptap/extension-dropcursor';
import FontFamily from '@tiptap/extension-font-family';
import GapCursor from '@tiptap/extension-gapcursor';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import FontSize from 'tiptap-extension-font-size';

import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useModeStore from '@/app/(signed-in-only)/write/store/mode';
import useSelectedEditorStore from '@/app/(signed-in-only)/write/store/selectedEditor';

import './placeholder.css';

const Title = () => {
  const titleContents = useEditorContentsStore(
    (state: any) => state.titleContents,
  );
  const setTitleContents = useEditorContentsStore(
    (state: any) => state.setTitleContents,
  );
  const setSelectedEditor = useSelectedEditorStore(
    (state: any) => state.setSelectedEditor,
  );

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
      FontSize,
      TextStyle,
      Color,
      FontFamily,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: '제목' }),
    ],
    onUpdate: ({ editor }) => {
      const json = editor.getHTML();
      setTitleContents(json);
    },
  });

  return (
    <EditorContent
      editor={editor}
      onFocus={() => {
        setSelectedEditor(editor);
      }}
    />
  );
};

export default Title;
