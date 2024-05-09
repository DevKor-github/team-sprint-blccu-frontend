import Link from 'next/link';

import { HorizontalScrollablePostCard } from '@/components/ui-unstable/horizontal-scrollable-post-card';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ROUTES } from '@/constants/routes';
import { generatePosts } from '@/lib/utils';

const posts = generatePosts(10);

const TrendingPostSection = () => {
  return (
    <Section className="ml-4">
      <SectionTitle>인기글</SectionTitle>
      <SectionContent>
        <ScrollArea>
          <div className="mr-4 flex gap-3 pb-4">
            {posts.map(
              (
                {
                  author,
                  title,
                  id: postId,
                  description,
                  thumbnail,
                  createdAt,
                },
                index,
              ) => (
                <Link href={ROUTES.POST_OF(author.handle, postId)} key={index}>
                  <HorizontalScrollablePostCard
                    username={author.username}
                    userHandle={author.handle}
                    avatar={author.profileImage}
                    title={title}
                    thumbnail={thumbnail}
                  />
                </Link>
              ),
            )}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </SectionContent>
    </Section>
  );
};

export { TrendingPostSection };
