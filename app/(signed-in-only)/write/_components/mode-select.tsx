'use client';

import {
  type EditorMode,
  useEditorModeStore,
} from '@/app/(signed-in-only)/write/_store/use-editor-mode-store';
import { useFocusedStore } from '@/app/(signed-in-only)/write/_store/use-focused-store';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ModeSelect = () => {
  const { setEditorMode } = useEditorModeStore();
  const { setFocused, setSubFocused } = useFocusedStore();

  const handleValueChange = (value: string) => {
    setEditorMode(value as EditorMode); // assertion
    setFocused('init');
    setSubFocused('init');
  };

  return (
    <Tabs defaultValue="write" onValueChange={handleValueChange}>
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="write">글쓰기</TabsTrigger>
        <TabsTrigger value="deco">꾸미기</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export { ModeSelect };
