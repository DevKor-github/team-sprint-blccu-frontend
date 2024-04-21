'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { ChevronDown } from 'lucide-react';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { BLCCU_DUMMY_DATASET } from '@/constants/dummy';
import { QUERY_KEY } from '@/constants/query';
import { ROUTES } from '@/constants/routes';
import { generatePosts } from '@/lib/utils';
import { type User } from '@/types/mocking-entity';

type PostByCategorySectionProps = {
  user: User;
};

const PostByCategorySection = ({ user }: PostByCategorySectionProps) => {
  const searchParams = useSearchParams();
  const categoryIdParam = searchParams.get(QUERY_KEY.CATEGORY_ID);

  const categoryId = categoryIdParam ? parseInt(categoryIdParam) : null;

  const categoryName =
    BLCCU_DUMMY_DATASET.CATEGORIES.find(({ id }) => id === categoryId)?.name ??
    '전체글';

  const posts = generatePosts(5, user);

  return (
    <Section>
      <SectionTitle className="mx-4">
        <div className="flex items-center gap-0.5">
          {categoryName}
          <Link href={ROUTES.SELECT_CATEGORY_OF(user.handle)}>
            <div className="p-2">
              <ChevronDown className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </SectionTitle>
      <SectionContent>
        <div className="flex flex-col">
          {posts.map(
            (
              { author, title, slug, description, thumbnail, createdAt },
              index,
            ) => (
              <Link href={ROUTES.POST_OF(author.handle, slug)} key={index}>
                <div className="px-4 py-3">
                  <StackedPostCard
                    username={author.username}
                    userHandle={author.handle}
                    title={title}
                    description={description}
                    thumbnail={thumbnail}
                    date={createdAt}
                  />
                </div>
              </Link>
            ),
          )}
        </div>
      </SectionContent>
    </Section>
  );
};

export { PostByCategorySection };
