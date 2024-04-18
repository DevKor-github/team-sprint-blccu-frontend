import Link from 'next/link';

import { Plus } from 'lucide-react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedCategoryCard } from '@/components/ui-unstable/stacked-category-card';
import { ROUTES } from '@/constants/routes';
import { UpdateCategoryPageBottomActionSheet } from '@/features/update-category-page/update-category-page-bottom-action-sheet';
import { generateCategories } from '@/lib/utils';

const categories = generateCategories(10);

const sortedCategoriesDesc = categories.sort((a, b) => b.count - a.count);

const UpdateCategoryPage = () => {
  const total = sortedCategoriesDesc.reduce((acc, { count }) => acc + count, 0);

  return (
    <div>
      <AppBar className="flex justify-between">
        <AppBarBack />
        <AppBarTitle align="center">카테고리 수정</AppBarTitle>
        <Link href={ROUTES.CREATE_CATEGORY}>
          <div className="px-3 py-4">
            <Plus className="h-5 w-5" />
          </div>
        </Link>
      </AppBar>
      <div className="pt-14">
        <div className="flex flex-col pt-2">
          <div className="px-4">
            <StackedCategoryCard category="전체글" count={total} disabled />
          </div>
          {sortedCategoriesDesc.map(({ name, count }, index) => (
            <UpdateCategoryPageBottomActionSheet
              key={index}
              trigger={
                <div className="cursor-pointer px-4" tabIndex={0}>
                  <StackedCategoryCard category={name} count={count} />
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateCategoryPage;
