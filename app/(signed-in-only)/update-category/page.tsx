'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';

import { UpdateCategoryPageBottomActionSheet } from '@/app/(signed-in-only)/update-category/_components/update-category-page-bottom-action-sheet';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedCategoryCard } from '@/components/ui-unstable/stacked-category-card';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { queries } from '@/queries';

const UpdateCategoryPage = () => {
  const { isSignedIn, me } = useMeQuery();

  const { data: categoriesData } = useQuery({
    ...queries.users.categories(me?.id),
    enabled: isSignedIn,
  });

  const categories = categoriesData?.data ?? [];

  const sortedCategoriesDesc = categories.sort(
    (a, b) => b.articleCount - a.articleCount,
  );

  const total = sortedCategoriesDesc.reduce(
    (acc, { articleCount }) => acc + articleCount,
    0,
  );

  return (
    <div>
      <AppBar className="flex justify-between" shadow>
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
            <StackedCategoryCard
              category={{
                categoryId: 0, // FIXME: dummy
                categoryName: '전체글',
                articleCount: total,
              }}
              disabled
            />
          </div>
          {sortedCategoriesDesc.map((category, index) => (
            <UpdateCategoryPageBottomActionSheet
              key={index}
              id={category.categoryId}
              trigger={
                <div className="cursor-pointer px-4" tabIndex={0}>
                  <StackedCategoryCard category={category} />
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
