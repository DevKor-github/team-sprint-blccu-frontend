'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedCategoryCard } from '@/components/ui-unstable/stacked-category-card';
import { ROUTES } from '@/constants/routes';
import { UpdateCategoryPageBottomActionSheet } from '@/features/update-category-page/update-category-page-bottom-action-sheet';
import { queries } from '@/queries';

const UpdateCategoryPage = () => {
  const { data: meData } = useQuery({
    ...queries.users.me,
    retry: false,
  });

  const { data: categoriesData } = useQuery({
    ...queries.users.categories(meData?.data.kakaoId),
    enabled: meData !== undefined,
  });

  const categories = categoriesData?.data ?? [];

  const sortedCategoriesDesc = categories.sort(
    (a, b) => b.postCount - a.postCount,
  );

  const total = sortedCategoriesDesc.reduce(
    (acc, { postCount }) => acc + postCount,
    0,
  );

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
            <StackedCategoryCard
              category={{
                categoryId: '',
                categoryName: '전체글',
                postCount: total,
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
