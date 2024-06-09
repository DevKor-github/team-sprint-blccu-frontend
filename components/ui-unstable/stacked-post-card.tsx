'use client';

import Image from 'next/image';
import Link from 'next/link';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { format } from 'date-fns';

import { type PostResponseDto } from '@/__generated__/data-contracts';
import { ROUTES } from '@/constants/routes';

type StackedPostCardProps = {
  post: PostResponseDto;
};

const StackedPostCard = ({
  post: { user, main_image_url, content, date_created, title },
}: StackedPostCardProps) => {
  const formattedDate = format(date_created, 'yyyy. MM. dd.');

  return (
    <div className="my-2 flex h-20 gap-2">
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-1 text-sm">{title}</h3>
          <p className="line-clamp-2 text-xs font-light text-blccu-neutral-600">
            {content}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
            <p className="line-clamp-1 max-w-28 text-2xs font-light text-blccu-neutral-400">
              {user.username}
            </p>
          </Link>
          <p className="text-2xs font-light text-blccu-neutral-400">
            {formattedDate}
          </p>
        </div>
      </div>
      <div className="w-20 flex-shrink-0">
        <AspectRatio ratio={1}>
          <Image
            src={main_image_url}
            alt="thumbnail"
            fill
            sizes="100px"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export { StackedPostCard };
