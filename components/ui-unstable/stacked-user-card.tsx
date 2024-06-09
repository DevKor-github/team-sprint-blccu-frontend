import Link from 'next/link';

import { type ReactNode } from 'react';

import { type UserResponseDto } from '@/__generated__/data-contracts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ROUTES } from '@/constants/routes';

type StackedUserCardProps = {
  user: UserResponseDto;
  right?: ReactNode;
};

const StackedUserCard = ({
  user: { profile_image, username, handle, description },
  right,
}: StackedUserCardProps) => {
  return (
    <div className="flex items-center gap-4">
      <Link
        href={ROUTES.USER_HANDLE_OF(handle)}
        className="flex flex-1 items-center gap-4 py-2"
      >
        <Avatar>
          <AvatarImage src={profile_image} />
          <AvatarFallback className="bg-blccu-neutral-400" />
        </Avatar>
        <div className="flex flex-1 flex-col">
          <h3 className="line-clamp-1 font-medium text-blccu-neutral-600">
            {username}
          </h3>
          {description !== undefined && (
            <p className="line-clamp-1 text-xs text-blccu-neutral-400">
              {description}
            </p>
          )}
        </div>
      </Link>
      {right !== undefined && right}
    </div>
  );
};

export { StackedUserCard };
