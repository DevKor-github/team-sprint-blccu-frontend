import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const announcements = createQueryKeys('announcements', {
  all: {
    queryKey: null,
    queryFn: () => api.anmts.announcementsControllerGetAnnouncements(),
  },
});

export { announcements };
