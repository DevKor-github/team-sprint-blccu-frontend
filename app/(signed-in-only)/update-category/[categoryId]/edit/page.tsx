'use client';

import { useQuery } from '@tanstack/react-query';

import { CategoryIdEditForm } from '@/app/(signed-in-only)/update-category/[categoryId]/edit/_components/category-id-edit-form';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { queries } from '@/queries';

type CategoryIdEditPageProps = {
  params: {
    categoryId: number;
  };
};

const CategoryIdEditPage = ({
  params: { categoryId },
}: CategoryIdEditPageProps) => {
  const { data: categoryData } = useQuery(queries.users.category(categoryId));

  const category = categoryData?.data;

  if (category === undefined) {
    return null;
  }

  return (
    <>
      <AppBar className="flex justify-between" shadow>
        <AppBarBack />
        <AppBarTitle align="center">카테고리 수정</AppBarTitle>
      </AppBar>
      <CategoryIdEditForm
        category={category}
        defaultValues={{ name: category.name }}
      />
    </>
  );
};

export default CategoryIdEditPage;
