import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const auth = createQueryKeys('auth', {
  logout: {
    queryKey: null,
    queryFn: () => api.auth.authControllerLogout(),
  },
});

export { auth };
