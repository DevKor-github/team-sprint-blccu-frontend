import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { StackedUserCard } from '@/components/ui-unstable/stacked-user-card';
import { Button } from '@/components/ui/button';
import { generateUsers, sampleSize } from '@/lib/utils';

const users = generateUsers(21);

const FollowingButtons = [
  <Button key="follow-button" size="sm" radius="full">
    팔로우
  </Button>,
  <Button key="following-button" variant="secondary" size="sm" radius="full">
    팔로잉
  </Button>,
];

const FollowingButton = sampleSize(FollowingButtons, 21);

type FollowingPageProps = {
  params: {
    username: string;
  };
};

const FollowingPage = ({ params: { username: _ } }: FollowingPageProps) => {
  return (
    <div>
      <AppBar>
        <AppBarBack />
        <AppBarTitle>팔로잉 목록</AppBarTitle>
      </AppBar>
      <div className="pt-14">
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
      </div>
    </div>
  );
};

export default FollowingPage;
