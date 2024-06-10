'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';
import { ChevronDown } from 'lucide-react';

import { type UserResponseDto } from '@/__generated__/data-contracts';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { QUERY_KEY } from '@/constants/query';
import { ROUTES } from '@/constants/routes';
import { queries } from '@/queries';

type PostByCategorySectionProps = {
  user: UserResponseDto;
};

const PostByCategorySection = ({ user }: PostByCategorySectionProps) => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get(QUERY_KEY.CATEGORY_ID) ?? undefined;

  const { data: postData } = useQuery(
    queries.posts.userByCategory(user.kakaoId, categoryId),
  );
  const { data: categoryData } = useQuery({
    ...queries.users.category(categoryId),
    enabled: categoryId !== undefined,
  });

  const categoryName = categoryData?.data.name ?? '전체글';
  const posts = postData?.data.data ?? [];

  return (
    <Section>
      <SectionTitle className="mx-4">
        <div className="flex items-center gap-0.5">
          <div>{categoryName}</div>
          <Link href={ROUTES.SELECT_CATEGORY_OF(user.handle)}>
            <div className="p-2">
              <ChevronDown className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </SectionTitle>
      <SectionContent>
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link href={ROUTES.POST_OF(user.handle, post.id)} key={post.id}>
              <div className="px-4 py-3">
                <StackedPostCard post={post} />
              </div>
            </Link>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export { PostByCategorySection };
