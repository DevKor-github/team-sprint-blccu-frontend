import Link from 'next/link';

import { useEffect } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from '@uidotdev/usehooks';

import { type UserPrimaryResponseDto } from '@/__generated__/data-contracts';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { Skeleton } from '@/components/ui/skeleton';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import { getPostPageAllPostSectionTitleDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type PostPageAllPostSectionProps = {
  user: UserPrimaryResponseDto;
};

const PostPageAllPostSection = ({ user }: PostPageAllPostSectionProps) => {
  const {
    isLoading: isPostLoading,
    data: postData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: queries.posts.userByCategory(user.kakaoId).queryKey,
    queryFn: ({ pageParam }) =>
      api.posts.postsControllerFetchUserPosts({
        userId: user.kakaoId,
        sort: 'DESC',
        take: 5,
        cursor: pageParam,
      }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: ({
      data: {
        meta: { hasNextData, customCursor },
      },
    }) => (hasNextData ? customCursor : undefined),
  });

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
  });

  const isIntersecting = entry?.isIntersecting ?? false;

  useEffect(() => {
    if (isIntersecting) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  const titleDescriptor = getPostPageAllPostSectionTitleDescriptor(
    user.username,
  );

  const posts = postData?.pages.flatMap((page) => page.data.data) ?? [];

  return (
    <Section>
      <SectionTitle className="mx-4">{titleDescriptor}</SectionTitle>
      <SectionContent>
        <div className="flex flex-col">
          {isPostLoading &&
            [...Array(5)].map((_, index) => (
              <div key={index} className="px-4 py-2">
                <Skeleton className="h-24 w-full" />
              </div>
            ))}
          {posts.map((post) => (
            <Link href={ROUTES.POST_OF(user.handle, post.id)} key={post.id}>
              <div className="px-4 py-3">
                <StackedPostCard post={post} />
              </div>
            </Link>
          ))}
          {!isFetchingNextPage && <div ref={ref} />}
        </div>
      </SectionContent>
    </Section>
  );
};

export { PostPageAllPostSection };
