import { useQuery } from '@tanstack/react-query';

import { queries } from '@/queries';

const useMeQuery = () => {
  const { isLoading, data } = useQuery({ ...queries.users.me, retry: false });

  const me = data?.data;

  return { isLoading, me, isSignedIn: me !== undefined };
};

export { useMeQuery };
