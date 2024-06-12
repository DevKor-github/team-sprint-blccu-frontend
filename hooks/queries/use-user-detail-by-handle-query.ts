import { useQuery } from '@tanstack/react-query';

import { queries } from '@/queries';

const useUserDetailByHandleQuery = (userHandle: string) => {
  const { isLoading, data } = useQuery({
    ...queries.users.detailByHandle(userHandle),
    retry: false,
  });

  const user = data?.data;

  if (user === undefined) {
    return { isLoading, user: undefined, isExist: false as const };
  }

  return { isLoading, user, isExist: true as const };
};

export { useUserDetailByHandleQuery };
