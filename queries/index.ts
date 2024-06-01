import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { announcements } from '@/queries/announcements';
import { posts } from '@/queries/posts';
import { users } from '@/queries/users';

const queries = mergeQueryKeys(users, posts, announcements);

export { queries };
