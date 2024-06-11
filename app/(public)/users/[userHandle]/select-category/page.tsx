'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { Pencil } from 'lucide-react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedCategoryCard } from '@/components/ui-unstable/stacked-category-card';
import { QUERY_PARAMS } from '@/constants/constants';
import { ROUTES } from '@/constants/routes';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import { queries } from '@/queries';

type SelectCategoryPageProps = {
  params: {
    userHandle: string;
  };
};

const SelectCategoryPage = ({
  params: { userHandle },
}: SelectCategoryPageProps) => {
  const { data: userData } = useQuery({
    ...queries.users.detailByHandle(userHandle),
    retry: false,
  });

  const { data: categoriesData } = useQuery({
    ...queries.users.categories(userData?.data.kakaoId),
    enabled: userData !== undefined,
  });

  const { me } = useFetchMe();

  const categories = categoriesData?.data ?? [];

  const sortedCategoriesDesc = categories.sort(
    (a, b) => b.postCount - a.postCount,
  );

  const total = sortedCategoriesDesc.reduce(
    (acc, { postCount }) => acc + postCount,
    0,
  );

  const user = userData?.data;

  const isMe = me?.kakaoId === user?.kakaoId;

  return (
    <div>
      <AppBar className="flex justify-between" shadow>
        <AppBarBack />
        <AppBarTitle align="center">카테고리</AppBarTitle>
        {isMe && (
          <Link href={ROUTES.UPDATE_CATEGORY}>
            <div className="px-3 py-4">
              <Pencil className="h-5 w-5" />
            </div>
          </Link>
        )}
      </AppBar>
      <div className="pt-14">
        <div className="flex flex-col pt-2">
          <Link href={ROUTES.USER_HANDLE_OF(userHandle)}>
            <div className="px-4">
              <StackedCategoryCard
                category={{
                  categoryId: '',
                  categoryName: '전체글',
                  postCount: total,
                }}
              />
            </div>
          </Link>
          {sortedCategoriesDesc.map((category) => (
            <Link
              href={{
                pathname: ROUTES.USER_HANDLE_OF(userHandle),
                query: {
                  [QUERY_PARAMS.CATEGORY_ID]: category.categoryId,
                },
              }}
              key={category.categoryId}
            >
              <div className="px-4">
                <StackedCategoryCard category={category} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCategoryPage;
