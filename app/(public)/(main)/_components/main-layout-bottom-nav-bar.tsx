'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { Home, Pencil, User } from 'lucide-react';

import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { queries } from '@/queries';

const MainLayoutBottomNavBar = () => {
  const { data } = useQuery({ ...queries.users.me, retry: false });

  const me = data?.data;

  const isSignedIn = me !== undefined;

  // if (!isSignedIn) {
  //   return null;
  // }

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-1/2 w-full max-w-screen-sm -translate-x-1/2',
        'bg-blccu-white shadow-blccu-top',
      )}
    >
      <ul className="flex justify-between px-11">
        <li>
          <Link href={ROUTES.ROOT}>
            <div className="p-5">
              <Home className="h-5 w-5" />
            </div>
          </Link>
        </li>
        <li>
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
          <Link href={ROUTES.USER_HANDLE_OF(me?.handle ?? '')}>
            {/* FIXME: me.handle 로 바꿔 */}
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
