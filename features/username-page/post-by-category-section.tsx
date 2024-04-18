import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { generatePosts } from '@/lib/utils';
import { type User } from '@/types/mocking-entity';

type PostByCategorySectionProps = {
  user: User;
};

const PostByCategorySection = ({ user }: PostByCategorySectionProps) => {
  const posts = generatePosts(5, user);

  return (
    <Section className="mx-4">
      <SectionTitle>전체글</SectionTitle>
      <SectionContent>
        <div className="flex flex-col gap-6">
          {posts.map(
            (
              { author, title, slug, description, thumbnail, createdAt },
              index,
            ) => (
              <StackedPostCard
                key={index}
                username={author.username}
                title={title}
                description={description}
                thumbnail={thumbnail}
                date={createdAt}
              />
            ),
          )}
        </div>
      </SectionContent>
    </Section>
  );
};

export { PostByCategorySection };
