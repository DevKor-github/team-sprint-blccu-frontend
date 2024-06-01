import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { posts } from '@/queries/posts';
import { users } from '@/queries/users';

const queries = mergeQueryKeys(users, posts);

export { queries };
