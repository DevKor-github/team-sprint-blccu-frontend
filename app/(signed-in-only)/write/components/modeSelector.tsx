'use client';

import { useFocusedStore } from '@/app/(signed-in-only)/write/store/focused';
import {
  type EditorMode,
  useEditorModeStore,
} from '@/app/(signed-in-only)/write/store/mode';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ModeSelector = () => {
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

export { ModeSelector };
