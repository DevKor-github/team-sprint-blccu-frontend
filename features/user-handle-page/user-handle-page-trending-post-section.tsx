'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { type UserPrimaryResponseDto } from '@/__generated__/data-contracts';
import { HorizontalScrollablePostCard } from '@/components/ui-unstable/horizontal-scrollable-post-card';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ROUTES } from '@/constants/routes';
import { getUserHandlePageTrendingPostSectionTitleDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type UserHandlePageTrendingPostSectionProps = {
  user: UserPrimaryResponseDto;
};

const UserHandlePageTrendingPostSection = ({
  user,
}: UserHandlePageTrendingPostSectionProps) => {
  const { data } = useQuery(queries.posts.userTrending(user.kakaoId));

  const titleDescriptor = getUserHandlePageTrendingPostSectionTitleDescriptor(
    user.username,
  );

  const posts = data?.data.data ?? [];

  return (
    <Section className="ml-4 pb-6">
      <SectionTitle>{titleDescriptor}</SectionTitle>
      <SectionContent>
        <ScrollArea>
          <div className="mr-4 flex gap-3 pb-4">
            {posts.map((post) => (
              <Link href={ROUTES.POST_OF(user.handle, post.id)} key={post.id}>
                <HorizontalScrollablePostCard post={post} />
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </SectionContent>
    </Section>
  );
};

export { UserHandlePageTrendingPostSection };
