import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { announcements } from '@/queries/announcements';
import { articles } from '@/queries/articles';
import { auth } from '@/queries/auth';
import { notifications } from '@/queries/notifications';
import { stickers } from '@/queries/stickers';
import { users } from '@/queries/users';

const queries = mergeQueryKeys(
  users,
  articles,
  announcements,
  auth,
  stickers,
  notifications,
);

export { queries };
