'use client';

import { useEffect } from 'react';

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

import { FontSize } from '@/app/(signed-in-only)/write/_lib/tiptap-extension/font-size';
import { useEditorContentsStore } from '@/app/(signed-in-only)/write/_store/use-editor-contents-store';
import { useSelectedEditorStore } from '@/app/(signed-in-only)/write/_store/use-selected-editor-store';
import { useTempLoadStore } from '@/app/(signed-in-only)/write/_store/use-temp-load-store';

import './font.css';
import './placeholder.css';

const TitleEditor = () => {
  const { titleContents, setTitleContents } = useEditorContentsStore();
  const { setSelectedEditor } = useSelectedEditorStore();
  const { tempLoad, setTempLoad } = useTempLoadStore();

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
      Placeholder.configure({ placeholder: '제목' }),
    ],
    onUpdate: ({ editor }) => {
      const json = editor.getHTML();
      setTitleContents(json);
    },
    onCreate: ({ editor }) => {
      editor.commands.setFontFamily('var(--noto-sans-kr)');
      editor.commands.setFontSize('24');
      editor.commands.setColor('#000000');
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(titleContents);
    }

    setTempLoad(false);
  }, [tempLoad]);

  return (
    <div className="title-editor" style={{ fontSize: '24px' }}>
      <EditorContent
        editor={editor}
        onFocus={() => {
          setSelectedEditor(editor);
        }}
      />
    </div>
  );
};

export { TitleEditor };
