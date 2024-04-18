'use client';

import { useRouter } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { ChevronLeft } from 'lucide-react';

import { IconButton } from '@/components/ui/icon-button';
import { cn } from '@/lib/utils';
import { type PropsWithClassName } from '@/types/props';

const AppBar = ({
  className,
  children,
}: PropsWithChildren & PropsWithClassName) => {
  return (
    <header
      className={cn(
        'fixed left-1/2 top-0 z-50 flex h-14 w-full max-w-md -translate-x-1/2 items-center border-b bg-blccu-white px-1 ',
        className,
      )}
    >
      {children}
    </header>
  );
};

type AppBarBackProps = {
  onClick?: () => void;
};

const AppBarBack = ({ onClick }: AppBarBackProps) => {
  const router = useRouter();

  return (
    <IconButton size="lg" onClick={onClick ?? router.back}>
      <ChevronLeft className="h-6 w-6" />
    </IconButton>
  );
};

type AppBarTitleProps = {
  align?: 'center' | 'left';
} & PropsWithChildren;

const AppBarTitle = ({ align = 'left', children }: AppBarTitleProps) => {
  return (
    <p
      className={cn(
        'text-lg font-bold',
        align === 'center' &&
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        align === 'left' && 'ml-2',
      )}
    >
      {children}
    </p>
  );
};

export { AppBar, AppBarBack, AppBarTitle };
