import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { UserSearchBar } from '@/features/search-user-page/user-search-bar';
import { UserSearchResult } from '@/features/search-user-page/user-search-result';

const SearchUserPage = () => {
  return (
    <div>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>유저 검색</AppBarTitle>
      </AppBar>
      <div className="pt-14">
        <UserSearchBar />
        <UserSearchResult />
      </div>
    </div>
  );
};

export default SearchUserPage;
