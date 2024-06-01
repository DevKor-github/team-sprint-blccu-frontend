'use client';

import { useQuery } from '@tanstack/react-query';

import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';
import { queries } from '@/queries';

type UserSearchResultProps = {
  search: string;
};

const UserSearchResult = ({ search }: UserSearchResultProps) => {
  const { data: meData } = useQuery({ ...queries.users.me, retry: false });
  const { data: usersByNameData } = useQuery({
    ...queries.users.search(search),
    enabled: search.length > 0,
  });

  const users = usersByNameData?.data ?? [];

  const me = meData?.data;

  const isSignedIn = me !== undefined;

  return (
    <div className="mt-4 flex flex-col gap-2 px-4">
      {users.map(({ isFollowing, ...user }, index) => (
        <StackedUserCard
          key={index}
          user={user}
          right={
            isSignedIn && (
              <>
                {isFollowing ? (
                  <Button variant="secondary" size="sm" radius="full">
                    팔로잉
                  </Button>
                ) : (
                  <Button size="sm" radius="full">
                    팔로우
                  </Button>
                )}
              </>
            )
          }
        />
      ))}
    </div>
  );
};

export { UserSearchResult };
