'use client';

import Link from 'next/link';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { useQuery } from '@tanstack/react-query';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { ROUTES } from '@/constants/routes';
import { queries } from '@/queries';

const AllPostSection = () => {
  const { data } = useQuery(queries.posts.all);

  const posts = data?.data.data ?? [];

  return (
    <Section className="px-4">
      <SectionTitle>전체글</SectionTitle>
      <SectionContent>
        <div className="max-h-[1200px] overflow-y-hidden">
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              0: 1,
              240: 2,
              360: 3,
            }}
          >
            <Masonry gutter="10px">
              {posts.map((post) => (
                <Link
                  href={ROUTES.POST_OF(post.user.handle, post.id)}
                  key={post.id}
                >
                  <img
                    src={post.main_image_url}
                    alt="photo"
                    className="rounded-md"
                  />
                </Link>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </SectionContent>
    </Section>
  );
};

export { AllPostSection };
