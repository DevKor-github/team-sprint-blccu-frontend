type ReportCommentIdPageProps = {
  params: {
    commentId: number;
  };
};

const ReportCommentIdPage = ({
  params: { commentId },
}: ReportCommentIdPageProps) => {
  return <div>ReportCommentIdPage (commentId: {commentId})</div>;
};

export default ReportCommentIdPage;
