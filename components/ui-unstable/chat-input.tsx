'use client';

import { useState } from 'react';

import { Send } from 'lucide-react';

import { IconButton } from '@/components/ui/icon-button';
import { cn } from '@/lib/utils';

const ChatInput = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value);
  };

  return (
    <div
      className={cn(
        'mx-4 mt-4 flex items-center rounded-full bg-blccu-neutral-200/50 py-2 pl-7 pr-5',
        'transition-shadow focus-within:outline-none focus-within:ring-1 focus-within:ring-blccu-ring',
      )}
    >
      <input
        className={cn(
          'w-full bg-transparent',
          'focus:outline-none',
          'placeholder:text-blccu-neutral-400',
        )}
        placeholder="댓글을 작성하세요."
        value={value}
        onChange={handleChange}
      />
      <IconButton className="ml-2">
        <Send className="h-5 w-5 text-blccu-neutral-600" />
      </IconButton>
    </div>
  );
};

export { ChatInput };
