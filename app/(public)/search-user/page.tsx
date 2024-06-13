'use client';

import { useDebounce } from '@uidotdev/usehooks';
import { parseAsString, useQueryState } from 'nuqs';

import { UserSearchBar } from '@/app/(public)/search-user/_components/user-search-bar';
import { UserSearchResult } from '@/app/(public)/search-user/_components/user-search-result';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { QUERY_PARAMS } from '@/constants/constants';

const SearchUserPage = () => {
  const [search, setSearch] = useQueryState(
    QUERY_PARAMS.SEARCH,
    parseAsString.withDefault(''),
  );
  const debouncedSearch = useDebounce(search, 300);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value.length !== 0 ? value : null);
  };

  return (
    <div>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>유저 검색</AppBarTitle>
      </AppBar>
      <div className="pt-14">
        <UserSearchBar value={search} handleValueChange={handleSearchChange} />
        <UserSearchResult search={debouncedSearch} />
      </div>
    </div>
  );
};

export default SearchUserPage;
