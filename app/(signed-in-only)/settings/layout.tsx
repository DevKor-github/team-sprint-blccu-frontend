import { type PropsWithChildren } from 'react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';

const SettingsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>설정</AppBarTitle>
      </AppBar>
      <div className="pt-14">{children}</div>
    </div>
  );
};

export default SettingsLayout;
