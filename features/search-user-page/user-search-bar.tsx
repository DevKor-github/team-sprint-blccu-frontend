'use client';

import { useState } from 'react';

import { Search } from 'lucide-react';

import { cn } from '@/lib/utils';

const UserSearchBar = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value);
  };

  return (
    <div
      className={cn(
        'mx-4 mt-4 flex items-center rounded-full bg-blccu-neutral-200 py-2 pl-7 pr-5',
        'transition-shadow focus-within:outline-none focus-within:ring-1 focus-within:ring-blccu-ring',
      )}
    >
      <input
        className={cn(
          'w-full bg-transparent',
          'focus:outline-none',
          'placeholder:text-blccu-neutral-400',
        )}
        placeholder="닉네임 또는 아이디로 검색하세요"
        value={value}
        onChange={handleChange}
      />
      <Search className="ml-2 h-5 w-5 text-blccu-neutral-600" />
    </div>
  );
};

export { UserSearchBar };
