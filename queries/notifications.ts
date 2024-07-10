import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const notifications = createQueryKeys('notifications', {
  all: {
    queryKey: null,
    queryFn: () =>
      api.notifications.notificationsControllerGetNotifications({
        isChecked: true,
      }),
  },
});

export { notifications };
