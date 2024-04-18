import { type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import { type PropsWithClassName } from '@/types/props';

const AppDetailBar = ({
  className,
  children,
}: PropsWithClassName & PropsWithChildren) => {
  return (
    <div
      className={cn(
        'flex h-12 w-full items-center bg-blccu-neutral-200 px-1',
        className,
      )}
    >
      {children}
    </div>
  );
};

const AppDetailBarTitle = ({ children }: PropsWithChildren) => {
  return <p className="ml-4 font-bold">{children}</p>;
};

export { AppDetailBar, AppDetailBarTitle };
