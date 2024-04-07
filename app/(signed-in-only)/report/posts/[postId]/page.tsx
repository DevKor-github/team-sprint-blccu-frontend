type ReportPostIdPageProps = {
  params: {
    postId: number;
  };
};

const ReportPostIdPage = ({ params: { postId } }: ReportPostIdPageProps) => {
  return <div>ReportPostIdPage (postId: {postId})</div>;
};

export default ReportPostIdPage;
