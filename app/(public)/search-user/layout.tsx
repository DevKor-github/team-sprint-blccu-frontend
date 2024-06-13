import { type PropsWithChildren, Suspense } from 'react';

const SearchUserLayout__ForSuspense = ({ children }: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

export default SearchUserLayout__ForSuspense;
