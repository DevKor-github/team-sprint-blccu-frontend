import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { CreateCategoryForm } from '@/features/create-category-page/create-category-form';

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
