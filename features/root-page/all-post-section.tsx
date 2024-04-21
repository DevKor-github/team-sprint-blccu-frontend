'use client';

import Link from 'next/link';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { ROUTES } from '@/constants/routes';
import { generatePosts } from '@/lib/utils';

const posts = generatePosts(42);

const AllPostSection = () => {
  return (
    <Section className="mx-4">
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
              {posts.map(({ author, slug, thumbnail }, index) => (
                <Link href={ROUTES.POST_OF(author.handle, slug)} key={index}>
                  <img src={thumbnail} alt="photo" className="rounded-md" />
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
