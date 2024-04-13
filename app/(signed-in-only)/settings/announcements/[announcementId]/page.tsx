type AnnouncementIdPageProps = {
  params: {
    announcementId: number;
  };
};

const AnnouncementIdPage = ({
  params: { announcementId },
}: AnnouncementIdPageProps) => {
  return <div>AnnouncementIdPage (announcementId: {announcementId})</div>;
};

export default AnnouncementIdPage;
