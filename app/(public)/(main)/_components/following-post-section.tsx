'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { ROUTES } from '@/constants/routes';
import { queries } from '@/queries';

const FollowingPostSection = () => {
  const { data } = useQuery(queries.posts.following);

  const posts = data?.data.items ?? [];

  return (
    <Section>
      <SectionTitle className="mx-4">팔로잉 최신글</SectionTitle>
      <SectionContent>
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link
              href={ROUTES.POST_OF(post.user.handle, post.id)}
              key={post.id}
            >
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

export { FollowingPostSection };
