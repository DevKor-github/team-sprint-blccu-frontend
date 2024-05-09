import Link from 'next/link';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { ROUTES } from '@/constants/routes';
import { getPostPageAllPostSectionTitleDescriptor } from '@/lib/get-descriptor';
import { generatePosts } from '@/lib/utils';
import { type User } from '@/types/mocking-entity';

type PostPageAllPostSectionProps = {
  user: User;
};

const PostPageAllPostSection = ({ user }: PostPageAllPostSectionProps) => {
  const posts = generatePosts(5, user);

  const titleDescriptor = getPostPageAllPostSectionTitleDescriptor(
    user.username,
  );

  return (
    <Section>
      <SectionTitle className="mx-4">{titleDescriptor}</SectionTitle>
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

export { PostPageAllPostSection };
