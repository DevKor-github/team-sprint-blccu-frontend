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
          <div className="fixed top-[-200px]">
            <div className="rounded-xl bg-white shadow-lg">
              <div
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setFontFamily('var(--nanum-gothic)')
                    .run()
                }
                style={{ fontFamily: 'var(--nanum-gothic)' }}
              >
                나눔 고딕
              </div>
              <div
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setFontFamily('var(--nanum-myeongjo)')
                    .run()
                }
                style={{ fontFamily: 'var(--nanum-myeongjo)' }}
              >
                나눔 명조
              </div>
              <div
                onClick={() =>
                  editor.chain().focus().setFontFamily('var(--hahmlet)').run()
                }
                style={{ fontFamily: 'var(--hahmlet)' }}
              >
                함렛
              </div>
              <div
                onClick={() =>
                  editor.chain().focus().setFontFamily('var(--sunflower)').run()
                }
                style={{ fontFamily: 'var(--sunflower)' }}
              >
                해바라기
              </div>
              <div
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setFontFamily('var(--gowun-batang)')
                    .run()
                }
                style={{ fontFamily: 'var(--gowun-batang)' }}
              >
                고운 바탕
              </div>
              <div
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setFontFamily('var(--single-day)')
                    .run()
                }
                style={{ fontFamily: 'var(--single-day)' }}
              >
                싱글데이
              </div>
              <div
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setFontFamily('var(--noto-sans-kr)')
                    .run()
                }
                style={{ fontFamily: 'var(--noto-sans-kr)' }}
              >
                Noto Sans KR
              </div>
              <div
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setFontFamily('var(--grandiflora-one)')
                    .run()
                }
                style={{ fontFamily: 'var(--grandiflora-one)' }}
              >
                능소화
              </div>
              <div
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .setFontFamily('var(--gowun-dodum)')
                    .run()
                }
                style={{ fontFamily: 'var(--gowun-dodum)' }}
              >
                고운 돋움
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
          <div className="fixed top-[-200px]">
            <div className="rounded-xl bg-white shadow-lg">
              <div
                onClick={() => editor.chain().focus().setFontSize('12').run()}
              >
                12px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('16').run()}
              >
                16px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('20').run()}
              >
                20px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('24').run()}
              >
                24px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('28').run()}
              >
                28px
              </div>
              <div
                onClick={() => editor.chain().focus().setFontSize('32').run()}
              >
                32px
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
