'use client';

import Link from 'next/link';

import { Home, Pencil, User } from 'lucide-react';

import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { cn } from '@/lib/utils';

const MainLayoutBottomNavBar = () => {
  const { isSignedIn, me } = useMeQuery();

  if (!isSignedIn) {
    return null;
  }

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-1/2 w-full max-w-screen-sm -translate-x-1/2',
        'bg-blccu-white shadow-blccu-top',
      )}
    >
      <ul className="flex justify-evenly">
        <li className="mr-5">
          <Link href={ROUTES.ROOT}>
            <div className="p-5">
              <Home className="h-5 w-5" />
            </div>
          </Link>
        </li>
        <li className="ml-5">
          <Link href={ROUTES.WRITE}>
            <div
              className={cn(
                'fixed bottom-[30px] left-1/2 -translate-x-1/2',
                'rounded-full bg-blccu-black p-4 text-white',
              )}
            >
              <Pencil className="h-6 w-6" />
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.USER_HANDLE_OF(me.handle)}>
            <div className="p-5">
              <User className="h-5 w-5" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { MainLayoutBottomNavBar };
