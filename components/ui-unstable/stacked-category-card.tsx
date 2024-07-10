import { type ArticleCategoriesResponseDto } from '@/__generated__/data-contracts';
import { cn } from '@/lib/utils';

type StackedCategoryCardProps = {
  category: ArticleCategoriesResponseDto;
  disabled?: boolean;
};

const StackedCategoryCard = ({
  category: { categoryName, articleCount },
  disabled,
}: StackedCategoryCardProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 px-3 py-2',
        disabled && 'cursor-not-allowed opacity-50',
      )}
    >
      <p className="font-medium">{categoryName}</p>
      <p className="text-sm">{articleCount.toLocaleString()}</p>
    </div>
  );
};

export { StackedCategoryCard };
