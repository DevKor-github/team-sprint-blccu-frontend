import { HorizontalScrollablePostCard } from '@/components/ui-unstable/horizontal-scrollable-post-card';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { getUsernamePageTrendingPostSectionTitleDescriptor } from '@/lib/get-descriptor';
import { generatePosts } from '@/lib/utils';
import { type User } from '@/types/mocking-entity';

type UsernamePageTrendingPostSectionProps = {
  user: User;
};

const UsernamePageTrendingPostSection = ({
  user,
}: UsernamePageTrendingPostSectionProps) => {
  const posts = generatePosts(10, user);

  const titleDescriptor = getUsernamePageTrendingPostSectionTitleDescriptor(
    user.username,
  );

  return (
    <Section className="ml-4 pb-6">
      <SectionTitle>{titleDescriptor}</SectionTitle>
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

export { UsernamePageTrendingPostSection };
