type FollowingPageProps = {
  params: {
    username: string;
  };
};

const FollowingPage = ({ params: { username } }: FollowingPageProps) => {
  return <div>FollowingPage (username: {username})</div>;
};

export default FollowingPage;
