import { format } from 'date-fns';

import { type AnnouncementResponseDto } from '@/__generated__/data-contracts';

type StackedAnnouncementCardProps = {
  announcement: AnnouncementResponseDto;
};

const StackedAnnouncementCard = ({
  announcement: { title, content, date_updated },
}: StackedAnnouncementCardProps) => {
  const formattedDate = format(date_updated, 'yyyy.MM.dd.');

  return (
    <div className="flex flex-col gap-1 rounded-lg bg-blccu-neutral-200 p-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-blccu-neutral-600">{content}</p>
      <p className="text-xs text-blccu-neutral-600">{formattedDate}</p>
    </div>
  );
};

export { StackedAnnouncementCard };
