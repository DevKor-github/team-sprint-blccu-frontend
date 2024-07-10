import Link from 'next/link';

import { type ArticleWithUserDto } from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

type HorizontalScrollableArticleCardProps = {
  article: ArticleWithUserDto;
};

const HorizontalScrollableArticleCard = ({
  article: { mainImageUrl, user, title },
}: HorizontalScrollableArticleCardProps) => {
  return (
    <figure
      className={cn(
        'relative flex h-48 w-32 flex-col rounded-lg bg-cover bg-center shadow-blccu-bottom transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blccu-ring',
      )}
      style={{
        backgroundImage: `url(${mainImageUrl})`,
      }}
    >
      <div className="absolute bottom-0 flex w-full items-center gap-2 rounded-b-lg bg-blccu-white px-2 py-3 outline-white">
        <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
          <Avatar size="xs">
            <AvatarImage src={user.profileImage} alt="avatar" />
            <AvatarFallback className="bg-blccu-neutral-400" />
          </Avatar>
        </Link>
        <div className="flex w-full flex-col">
          <h3 className="line-clamp-1 text-xs font-medium">{title}</h3>
          <p className="line-clamp-1 text-2xs text-blccu-neutral-500">
            {user.username}
          </p>
        </div>
      </div>
    </figure>
  );
};

export { HorizontalScrollableArticleCard };
