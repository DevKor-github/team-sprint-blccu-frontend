import { cn } from '@/lib/utils';

type StackedCategoryCardProps = {
  category: string;
  count: number;
  disabled?: boolean;
};

const StackedCategoryCard = ({
  category,
  count,
  disabled,
}: StackedCategoryCardProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 px-3 py-2',
        disabled && 'cursor-not-allowed opacity-50',
      )}
    >
      <p className="font-medium">{category}</p>
      <p className="text-sm">{count.toLocaleString()}</p>
    </div>
  );
};

export { StackedCategoryCard };
