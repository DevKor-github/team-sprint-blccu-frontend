import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';
import { generateUsers, sampleSize } from '@/lib/utils';

const USERS_COUNT = 21;

const users = generateUsers(USERS_COUNT);

const FollowingButtons = [
  <Button key="follow-button" size="sm" radius="full">
    팔로우
  </Button>,
  <Button key="following-button" variant="secondary" size="sm" radius="full">
    팔로잉
  </Button>,
];

const FollowingButton = sampleSize(FollowingButtons, USERS_COUNT);

const UserSearchResult = () => {
  return (
    <div className="mt-4 flex flex-col gap-2 px-4">
      {users.map(
        (
          { username, handle, description, profileImage, backgroundImage },
          index,
        ) => (
          <StackedUserCard
            key={index}
            avatar={profileImage}
            username={username}
            userHandle={handle}
            description={description}
            right={FollowingButton[index]}
          />
        ),
      )}
    </div>
  );
};

export { UserSearchResult };
