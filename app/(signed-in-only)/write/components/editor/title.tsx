'use client';

import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

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
      StarterKit,
      TextStyle,
      Color,
      FontFamily,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: '제목' }),
    ],
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
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
