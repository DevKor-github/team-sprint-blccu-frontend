import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { type UserPrimaryResponseDto } from '@/__generated__/data-contracts';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { ROUTES } from '@/constants/routes';
import { getPostPageAllPostSectionTitleDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type PostPageAllPostSectionProps = {
  user: UserPrimaryResponseDto;
};

const PostPageAllPostSection = ({ user }: PostPageAllPostSectionProps) => {
  const { data } = useQuery(queries.posts.userAll(user.kakaoId));

  const titleDescriptor = getPostPageAllPostSectionTitleDescriptor(
    user.username,
  );

  const posts = data?.data.data ?? [];

  return (
    <Section>
      <SectionTitle className="mx-4">{titleDescriptor}</SectionTitle>
      <SectionContent>
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link href={ROUTES.POST_OF(user.handle, post.id)} key={post.id}>
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

export { PostPageAllPostSection };
