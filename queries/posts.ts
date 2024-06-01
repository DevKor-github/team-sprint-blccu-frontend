import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const posts = createQueryKeys('posts', {
  all: {
    queryKey: null,
    queryFn: () =>
      api.posts.postsControllerFetchCursor({
        sort: 'DESC',
        take: 50,
      }),
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
      api.posts.postsControllerFetchFriendsPosts({
        pageSize: 10,
      }),
  },
  userAll: (userId: number) => ({
    queryKey: [userId],
    queryFn: () =>
      api.posts.postsControllerFetchUserPosts({
        userId,
        sort: 'DESC',
        take: 10,
      }),
  }),
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
    queryFn: () =>
      api.posts.postsControllerFetchUserPosts({
        userId,
        sort: 'DESC',
        take: 10,
        categoryId,
      }),
  }),
  detail: (postId: number) => ({
    queryKey: [postId],
    queryFn: () => api.posts.postsControllerFetchPostDetail(postId),
  }),
  likeUsers: (postId: number) => ({
    queryKey: [postId],
    queryFn: () => api.posts.likesControllerFetchLikes(postId),
  }),
  comments: (postId: number) => ({
    queryKey: [postId],
    queryFn: () => api.posts.commentsControllerFetchComments(postId),
  }),
});

export { posts };