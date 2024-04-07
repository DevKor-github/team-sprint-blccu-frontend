type CommentsPageProps = {
  params: {
    username: string;
    slug: string;
  };
};

const CommentsPage = ({ params: { username, slug } }: CommentsPageProps) => {
  return (
    <div>
      CommentsPage (username: {username}, slug: {slug})
    </div>
  );
};

export default CommentsPage;
