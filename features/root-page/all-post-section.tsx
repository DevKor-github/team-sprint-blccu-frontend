'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
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
              {posts.map(({ thumbnail }, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt="photo"
                  className="rounded-md"
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </SectionContent>
    </Section>
  );
};

export { AllPostSection };
