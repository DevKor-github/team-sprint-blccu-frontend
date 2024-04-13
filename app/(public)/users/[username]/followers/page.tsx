type FollowersPageProps = {
  params: {
    username: string;
  };
};

const FollowersPage = ({ params: { username } }: FollowersPageProps) => {
  return <div>FollowersPage (username: {username})</div>;
};

export default FollowersPage;
