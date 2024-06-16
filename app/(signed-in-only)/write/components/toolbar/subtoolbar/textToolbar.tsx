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
          onClick={() => editor.chain().focus().run()}
        >
          <Ligature className="h-6 w-6" />
          <p className="text-xs">글씨체</p>
          <div className="fixed top-[-100px]">
            <div className="rounded-xl bg-white shadow-lg">
              <div
                onClick={() =>
                  editor.chain().focus().setFontFamily('Inter').run()
                }
              >
                Inter
              </div>
              {/* 나머지 폰트 추가 및 setFontFamily 버전업 필요 */}
              <div
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setFontFamily('var(--nanum-gothic)')
                    .run()
                }
              >
                나눔고딕
              </div>
              <div
                onClick={() =>
                  editor.chain().focus().setFontFamily('Ubuntu').run()
                }
              >
                Ubuntu
              </div>
              <div
                onClick={() =>
                  editor.chain().focus().setFontFamily('Open Sans').run()
                }
              >
                Open Sans
              </div>
              <div
                onClick={() =>
                  editor.chain().focus().setFontFamily('Montserrat').run()
                }
              >
                Montserrat
              </div>
            </div>
          </div>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().run()}
        >
          <Type className="h-6 w-6" />
          <p className="text-xs">크기</p>
          <div className="fixed top-[-100px]">
            <div className="rounded-xl bg-white shadow-lg">
              <div
                onClick={() => editor.chain().focus().setFontSize('12').run()}
              >
                12px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('14').run()}
              >
                14px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('16').run()}
              >
                16px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('18').run()}
              >
                18px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('20').run()}
              >
                20px
              </div>
            </div>
          </div>
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
