'use client';

import { useRouter } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { ChevronLeft } from 'lucide-react';

import { IconButton } from '@/components/ui/icon-button';
import { cn } from '@/lib/utils';
import { type PropsWithClassName } from '@/types/util';

type AppBarProps = {
  shadow?: boolean;
} & PropsWithChildren &
  PropsWithClassName;

const AppBar = ({ className, children, shadow }: AppBarProps) => {
  return (
    <header
      className={cn(
        'fixed left-1/2 top-0 z-50 flex h-14 w-full max-w-screen-sm -translate-x-1/2 items-center bg-blccu-white px-1',
        shadow && 'shadow-blccu-bottom',
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
} & PropsWithChildren &
  PropsWithClassName;

const AppBarTitle = ({
  align = 'left',
  children,
  className,
}: AppBarTitleProps) => {
  return (
    <div
      className={cn(
        'text-lg font-bold',
        align === 'center' &&
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        align === 'left' && 'ml-2',
        className,
      )}
    >
      {children}
    </div>
  );
};

export { AppBar, AppBarBack, AppBarTitle };
