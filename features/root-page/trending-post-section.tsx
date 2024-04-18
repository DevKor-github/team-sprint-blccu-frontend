import { HorizontalScrollablePostCard } from '@/components/ui-unstable/horizontal-scrollable-post-card';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
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
                { author, title, slug, description, thumbnail, createdAt },
                index,
              ) => (
                <HorizontalScrollablePostCard
                  key={index}
                  username={author.username}
                  avatar={author.profileImage}
                  title={title}
                  thumbnail={thumbnail}
                />
              ),
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </SectionContent>
    </Section>
  );
};

export { TrendingPostSection };
