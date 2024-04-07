type UsernamePageProps = {
  params: {
    username: string;
  };
};

const UsernamePage = ({ params: { username } }: UsernamePageProps) => {
  return <div>UsernamePage (username: {username})</div>;
};

export default UsernamePage;
