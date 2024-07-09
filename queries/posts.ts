import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const posts = createQueryKeys('posts', {
  all: {
    queryKey: null,
  },
  trending: {
    queryKey: null,
    queryFn: () =>
      api.posts.postsControllerFetchCursor({
        sort: 'DESC',
        take: 10,
        order: 'VIEW',
        date_created: 'MONTH',
      }),
  },
  following: {
    queryKey: null,
    queryFn: () =>
      api.posts.postsControllerFetchFriendsCursor({
        sort: 'DESC',
        take: 10,
        date_created: 'MONTH',
      }),
  },
  userTrending: (userId: number) => ({
    queryKey: [userId],
    queryFn: () =>
      api.posts.postsControllerFetchUserPosts({
        userId,
        sort: 'DESC',
        take: 10,
        order: 'VIEW',
      }),
  }),
  userByCategory: (userId: number, categoryId?: string) => ({
    queryKey: [userId, categoryId],
  }),
  detail: (postId: number) => ({
    queryKey: [postId],
    queryFn: () => api.posts.postsControllerFetchPostDetail(postId),
  }),
  like: (postId: number) => ({
    queryKey: [postId],
    queryFn: () => api.posts.likesControllerFetchIfLiked(postId),
  }),
  likeUsers: (postId: number) => ({
    queryKey: [postId],
    queryFn: () => api.posts.likesControllerFetchLikes(postId),
  }),
  comments: (postId: number) => ({
    queryKey: [postId],
    queryFn: () => api.posts.commentsControllerFetchComments(postId),
  }),

  /* editor */
  background: {
    queryKey: null,
    queryFn: () => api.posts.postBackgroundsControllerFetchAll(),
  },

  tempPosts: {
    queryKey: null,
    queryFn: () => api.posts.postsControllerFetchTempPosts(),
  },
});

export { posts };
