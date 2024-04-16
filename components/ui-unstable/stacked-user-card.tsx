import { type ReactNode } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type StackedUserCardProps = {
  avatar: string;
  username: string;
  description?: string;
  right?: ReactNode;
};

const StackedUserCard = ({
  avatar,
  username,
  description,
  right,
}: StackedUserCardProps) => {
  return (
    <div className="flex items-center gap-4 py-2">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback className="bg-blccu-neutral-400" />
      </Avatar>
      <div className="flex flex-1 flex-col gap-0.5">
        <h3 className="line-clamp-1 font-medium text-blccu-neutral-600">
          {username}
        </h3>
        {description !== undefined && (
          <p className="line-clamp-1 text-xs text-blccu-neutral-400">
            {description}
          </p>
        )}
      </div>
      {right !== undefined && right}
    </div>
  );
};

export { StackedUserCard };