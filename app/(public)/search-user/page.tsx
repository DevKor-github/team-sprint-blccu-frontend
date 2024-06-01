'use client';

import { useState } from 'react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { UserSearchBar } from '@/features/search-user-page/user-search-bar';
import { UserSearchResult } from '@/features/search-user-page/user-search-result';

const SearchUserPage = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value);
  };

  return (
    <div>
      <AppBar>
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
