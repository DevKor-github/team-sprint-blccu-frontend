import { type PropsWithChildren } from 'react';

import { MainLayoutBottomNavBar } from '@/app/(public)/(main)/_components/main-layout-bottom-nav-bar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <div className="pb-24">{children}</div>
      <MainLayoutBottomNavBar />
    </main>
  );
};

export default MainLayout;
