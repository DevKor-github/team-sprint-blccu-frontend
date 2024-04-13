type CategoryIdEditPageProps = {
  params: {
    categoryId: number;
  };
};

const CategoryIdEditPage = ({
  params: { categoryId },
}: CategoryIdEditPageProps) => {
  return <div>CategoryIdEditPage (categoryId: {categoryId})</div>;
};

export default CategoryIdEditPage;
