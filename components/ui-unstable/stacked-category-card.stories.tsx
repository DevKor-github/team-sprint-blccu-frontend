import type { Meta, StoryObj } from '@storybook/react';

import { StackedCategoryCard } from '@/components/ui-unstable/stacked-category-card';

const meta: Meta<typeof StackedCategoryCard> = {
  title: 'Unstable/StackedCategoryCard',
  component: StackedCategoryCard,
  argTypes: {
    category: {
      control: {
        type: 'text',
      },
    },
    count: {
      control: {
        type: 'number',
      },
    },
  },
};

type Story = StoryObj<typeof StackedCategoryCard>;

const Playground: Story = {
  args: {
    category: '일기',
    count: 10,
  },
};

const exampleData = [
  {
    category: '일기',
    count: 10,
  },
  {
    category: '개발',
    count: 2,
  },
  {
    category: '리뷰',
    count: 5,
  },
] as const;

const Example: Story = {
  render: () => {
    const total = exampleData.reduce((acc, { count }) => acc + count, 0);

    return (
      <div className="flex flex-col">
        <StackedCategoryCard category="전체글" count={total} />
        <div className="my-2 h-px bg-blccu-neutral-200" />
        {exampleData.map((data, index) => (
          <StackedCategoryCard key={index} {...data} />
        ))}
      </div>
    );
  },
};

export { Example, Playground };
export default meta;
