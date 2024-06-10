import { CreateCategoryForm } from '@/app/(signed-in-only)/create-category/_components/create-category-form';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';

const CreateCategoryPage = () => {
  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle align="center">카테고리 생성</AppBarTitle>
      </AppBar>
      <CreateCategoryForm />
    </>
  );
};

export default CreateCategoryPage;
