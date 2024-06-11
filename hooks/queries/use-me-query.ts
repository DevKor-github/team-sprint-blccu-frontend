import { useQuery } from '@tanstack/react-query';

import { queries } from '@/queries';

const useMeQuery = () => {
  const { isLoading, data } = useQuery({ ...queries.users.me, retry: false });

  const me = data?.data;

  if (me === undefined) {
    return { isLoading, me: undefined, isSignedIn: false as const };
  }

  return { isLoading, me, isSignedIn: true as const };
};

export { useMeQuery };
