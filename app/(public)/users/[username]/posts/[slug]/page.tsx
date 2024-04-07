type PostPageProps = {
  params: {
    username: string;
    slug: string;
  };
};

const PostPage = ({ params: { username, slug } }: PostPageProps) => {
  return (
    <div>
      PostPage (username: {username}, slug: {slug})
    </div>
  );
};

export default PostPage;
