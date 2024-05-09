import Link from 'next/link';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { ROUTES } from '@/constants/routes';
import { generatePosts } from '@/lib/utils';

const posts = generatePosts(10);

const FollowerPostSection = () => {
  return (
    <Section>
      <SectionTitle className="mx-4">팔로워 최신글</SectionTitle>
      <SectionContent>
        <div className="flex flex-col">
          {posts.map(
            (
              { author, title, id: postId, description, thumbnail, createdAt },
              index,
            ) => (
              <Link href={ROUTES.POST_OF(author.handle, postId)} key={index}>
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

export { FollowerPostSection };
