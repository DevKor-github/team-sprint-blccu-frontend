import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { announcements } from '@/queries/announcements';
import { auth } from '@/queries/auth';
import { notifications } from '@/queries/notifications';
import { posts } from '@/queries/posts';
import { stickers } from '@/queries/stickers';
import { users } from '@/queries/users';

const queries = mergeQueryKeys(
  users,
  posts,
  announcements,
  auth,
  stickers,
  notifications,
);

export { queries };
