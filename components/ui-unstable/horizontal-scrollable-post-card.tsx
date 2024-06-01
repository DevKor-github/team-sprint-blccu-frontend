import Link from 'next/link';

import { type PostResponseDto } from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

type HorizontalScrollablePostCardProps = {
  post: PostResponseDto;
};

const HorizontalScrollablePostCard = ({
  post: { main_image_url, user, title },
}: HorizontalScrollablePostCardProps) => {
  return (
    <figure
      className={cn(
        'relative flex h-52 w-36 flex-col rounded-lg bg-cover bg-center shadow-lg transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blccu-ring',
      )}
      style={{
        backgroundImage: `url(${main_image_url})`,
      }}
    >
      <div className="absolute bottom-0 flex w-full items-center gap-2 rounded-b-lg bg-blccu-white px-2 py-3">
        <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
          <Avatar size="xs">
            <AvatarImage src={user.profile_image} alt="avatar" />
            <AvatarFallback className="bg-blccu-neutral-400" />
          </Avatar>
        </Link>
        <div className="flex w-full flex-col">
          <h3 className="line-clamp-1 text-sm">{title}</h3>
          <p className="line-clamp-1 text-2xs font-light text-blccu-neutral-600">
            {user.username}
          </p>
        </div>
      </div>
    </figure>
  );
};

export { HorizontalScrollablePostCard };
