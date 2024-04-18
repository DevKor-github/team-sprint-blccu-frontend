import { type PropsWithChildren, Suspense } from 'react';

const NewLayout__ForSuspense = ({ children }: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

export default NewLayout__ForSuspense;
