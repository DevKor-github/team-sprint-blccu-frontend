import { type PropsWithChildren, Suspense } from 'react';

const LeaveLayout__ForSuspense = ({ children }: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

export default LeaveLayout__ForSuspense;
