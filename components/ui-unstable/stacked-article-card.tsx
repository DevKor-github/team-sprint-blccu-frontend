'use client';

import Link from 'next/link';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { format } from 'date-fns';

import { type ArticleWithUserDto } from '@/__generated__/data-contracts';
import icon from '@/assets/png/icon.png';
import { ImageWithFallback } from '@/components/ui-unstable/image-with-fallback';
import { ROUTES } from '@/constants/routes';

type StackedArticleCardProps = {
  article: ArticleWithUserDto;
};

const StackedArticleCard = ({
  article: { user, mainImageUrl, mainDescription, dateCreated, title },
}: StackedArticleCardProps) => {
  const formattedDate = format(dateCreated, 'yyyy. MM. dd.');

  return (
    <div className="flex h-20 gap-2">
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-1 text-sm font-medium">{title}</h3>
          <p className="line-clamp-2 text-xs text-blccu-neutral-500">
            {mainDescription}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
            <p className="line-clamp-1 max-w-28 text-2xs text-blccu-neutral-500">
              {user.username}
            </p>
          </Link>
          <p className="text-2xs text-blccu-neutral-500">{formattedDate}</p>
        </div>
      </div>
      <div className="w-20 flex-shrink-0">
        <AspectRatio ratio={1}>
          <ImageWithFallback
            src={mainImageUrl}
            alt="thumbnail"
            fallbackSrc={icon}
            fill
            sizes="100px"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export { StackedArticleCard };
