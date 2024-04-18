'use client';

import Image from 'next/image';
import Link from 'next/link';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { format } from 'date-fns';

import { ROUTES } from '@/constants/routes';

type StackedPostCardProps = {
  username: string;
  title: string;
  description: string;
  thumbnail: string;
  date: Date;
};

const StackedPostCard = ({
  username,
  title,
  description,
  thumbnail,
  date,
}: StackedPostCardProps) => {
  const formattedDate = format(date, 'yyyy. MM. dd.');

  return (
    <div className="flex h-20 items-center gap-2 py-2">
      <div className="flex w-full flex-col gap-2">
        <h3 className="line-clamp-1 text-sm">{title}</h3>
        <div className="flex flex-col gap-1">
          <p className="line-clamp-2 text-xs font-light text-blccu-neutral-600">
            {description}
          </p>
          <div className="flex items-center gap-2">
            <Link href={ROUTES.USERNAME_OF(username)}>
              <p className="line-clamp-1 max-w-28 text-2xs font-light text-blccu-neutral-400">
                {username}
              </p>
            </Link>
            <p className="text-2xs font-light text-blccu-neutral-400">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
      <div className="w-20 flex-shrink-0">
        <AspectRatio ratio={1}>
          <Image
            src={thumbnail}
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
