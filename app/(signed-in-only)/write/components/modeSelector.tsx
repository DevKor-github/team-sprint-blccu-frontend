'use client';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';
import useModeStore from '@/app/(signed-in-only)/write/store/mode';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ModeSelector = () => {
  const switchMode = useModeStore((state: any) => state.switchMode);
  const setFocused = useFocusedStore((state: any) => state.setFocused);

  const handleValueChange = (value: string) => {
    switchMode(value);
    setFocused('init');
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

export default ModeSelector;
