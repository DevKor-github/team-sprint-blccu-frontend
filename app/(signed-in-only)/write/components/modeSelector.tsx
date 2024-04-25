'use client';

import React, { useState } from 'react';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';
import useModeStore from '@/app/(signed-in-only)/write/store/mode';

const ModeSelector = () => {
  const mode = useModeStore((state: any) => state.mode);
  const switchMode = useModeStore((state: any) => state.switchMode);
  const setFocused = useFocusedStore((state: any) => state.setFocused);
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className={`rounded px-4 py-2 ${
          mode === 'write'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => {
          switchMode('write');
          setFocused('init');
        }}
      >
        글쓰기
      </button>
      <button
        className={`rounded px-4 py-2 ${
          mode === 'deco'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => {
          switchMode('deco');
          setFocused('init');
        }}
      >
        꾸미기
      </button>
    </div>
  );
};

export default ModeSelector;