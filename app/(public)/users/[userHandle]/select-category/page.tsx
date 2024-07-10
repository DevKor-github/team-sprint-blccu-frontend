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
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { useUserDetailByHandleQuery } from '@/hooks/queries/use-user-detail-by-handle-query';
import { queries } from '@/queries';

type SelectCategoryPageProps = {
  params: {
    userHandle: string;
  };
};

const SelectCategoryPage = ({
  params: { userHandle },
}: SelectCategoryPageProps) => {
  const { user, isExist } = useUserDetailByHandleQuery(userHandle);
  const { me } = useMeQuery();

  const { data: categoriesData } = useQuery({
    ...queries.users.categories(user?.id),
    enabled: isExist,
  });

  const categories = categoriesData?.data ?? [];

  const sortedCategoriesDesc = categories.sort(
    (a, b) => b.articleCount - a.articleCount,
  );

  const total = sortedCategoriesDesc.reduce(
    (acc, { articleCount }) => acc + articleCount,
    0,
  );

  const isMe = me?.id === user?.id;

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
          <Link href={ROUTES.USER_HANDLE_OF(userHandle)} replace={true}>
            <div className="px-4">
              <StackedCategoryCard
                category={{
                  categoryId: 0, // FIXME: dummy
                  categoryName: '전체글',
                  articleCount: total,
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
              replace={true}
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
