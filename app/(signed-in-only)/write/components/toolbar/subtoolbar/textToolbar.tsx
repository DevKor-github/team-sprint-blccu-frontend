'use client';

import {
  Bold,
  Italic,
  Ligature,
  Palette,
  Strikethrough,
  Type,
  Underline,
} from 'lucide-react';

import useSelectedEditor from '@/app/(signed-in-only)/write/store/selectedEditor';
import {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-sub-nav-bar';

const TextToolbar = () => {
  const editor = useSelectedEditor((state: any) => state.selectedEditor);

  const colorInput = (e: any) => {
    if (!editor) {
      return;
    }
    editor
      ?.chain()
      .focus()
      .setColor((e.target as HTMLInputElement).value)
      .run();
  };

  return (
    <EditorBottomSubNavBar>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().setFontFamily('Inter').run()}
        >
          <Ligature className="h-6 w-6" />
          <p className="text-xs">글씨체</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().run()}
        >
          <Type className="h-6 w-6" />
          <p className="text-xs">크기</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => document.getElementById('setcolor')?.click()}
        >
          <Palette className="h-6 w-6" />
          <p className="text-xs">색상</p>
          <input
            type="color"
            style={{ display: 'none' }}
            onInput={colorInput}
            id="setcolor"
          />
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-6 w-6" />
          <p className="text-xs">굵게</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline className="h-6 w-6" />
          <p className="text-xs">밑줄</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-6 w-6" />
          <p className="text-xs">취소선</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-6 w-6" />
          <p className="text-xs">기울이기</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
    </EditorBottomSubNavBar>
  );
};

export default TextToolbar;
