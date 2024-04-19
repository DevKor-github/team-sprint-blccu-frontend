import Link from 'next/link';

import { Pencil } from 'lucide-react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedCategoryCard } from '@/components/ui-unstable/stacked-category-card';
import { ROUTES } from '@/constants/routes';
import { generateCategories, generateUser } from '@/lib/utils';

const categories = generateCategories(10);

const sortedCategoriesDesc = categories.sort((a, b) => b.count - a.count);

const me = generateUser();

const { handle } = me;

type SelectCategoryPageProps = {
  params: {
    userHandle: string;
  };
};

const SelectCategoryPage = ({
  params: { userHandle: _ },
}: SelectCategoryPageProps) => {
  const total = sortedCategoriesDesc.reduce((acc, { count }) => acc + count, 0);

  return (
    <div>
      <AppBar className="flex justify-between">
        <AppBarBack />
        <AppBarTitle align="center">카테고리</AppBarTitle>
        <Link href={ROUTES.UPDATE_CATEGORY}>
          <div className="px-3 py-4">
            <Pencil className="h-5 w-5" />
          </div>
        </Link>
      </AppBar>
      <div className="pt-14">
        <div className="flex flex-col pt-2">
          <Link href={ROUTES.USER_HANDLE_OF(handle)}>
            <div className="px-4">
              <StackedCategoryCard category="전체글" count={total} />
            </div>
          </Link>
          {sortedCategoriesDesc.map(({ name, count }, index) => (
            <Link href={ROUTES.USER_HANDLE_OF(handle)} key={index}>
              <div className="px-4">
                <StackedCategoryCard category={name} count={count} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCategoryPage;
