import Link from 'next/link';

import { Bell, Search } from 'lucide-react';

import BlccuLogo from '@/assets/svg/blccu-logo.svg';
import { ROUTES } from '@/constants/routes';

const RootPageHeader = () => {
  return (
    <header className="flex items-center justify-between px-4">
      <Link href={ROUTES.ROOT}>
        <BlccuLogo className="w-14" />
      </Link>
      <div className="flex items-center">
        <Link href={ROUTES.NOTIFICATIONS}>
          <div className="px-3 py-4">
            <Bell className="h-5 w-5" />
          </div>
        </Link>
        <Link href={ROUTES.SEARCH_USER}>
          <div className="px-3 py-4">
            <Search className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export { RootPageHeader };
