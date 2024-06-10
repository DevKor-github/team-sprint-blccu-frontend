'use client';

import { useState } from 'react';

import { UserSearchBar } from '@/app/(public)/search-user/_components/user-search-bar';
import { UserSearchResult } from '@/app/(public)/search-user/_components/user-search-result';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';

const SearchUserPage = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value);
  };

  return (
    <div>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>유저 검색</AppBarTitle>
      </AppBar>
      <div className="pt-14">
        <UserSearchBar value={search} handleValueChange={handleSearchChange} />
        <UserSearchResult search={search} />
      </div>
    </div>
  );
};

export default SearchUserPage;
