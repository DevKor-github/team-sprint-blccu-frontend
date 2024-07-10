import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const users = createQueryKeys('users', {
  me: {
    queryKey: null,
    queryFn: api.users.usersReadControllerGetMyProfile,
  },
  agreements: {
    queryKey: null,
    queryFn: api.users.agreementsControllerFetchAgreements,
  },
  detailById: (userId: number) => ({
    queryKey: [userId],
    queryFn: () => api.users.usersReadControllerGetUserById(userId),
  }),
  detailByHandle: (handle: string) => ({
    queryKey: [handle],
    queryFn: () => api.users.usersReadControllerGetUserByHandle(handle),
  }),
  follower: (id: number | undefined) => ({
    queryKey: [id],
    queryFn: () => {
      if (id === undefined) {
        return Promise.reject(new Error('User ID is undefined'));
      }

      return api.users.followsControllerCheckFollower(id);
    },
  }),
  followers: (id: number | undefined) => ({
    queryKey: [id],
    queryFn: () => {
      if (id === undefined) {
        return Promise.reject(new Error('User ID is undefined'));
      }

      return api.users.followsControllerGetFollowers(id);
    },
  }),
  followings: (id: number | undefined) => ({
    queryKey: [id],
    queryFn: () => {
      if (id === undefined) {
        return Promise.reject(new Error('User ID is undefined'));
      }

      return api.users.followsControllerGetFollows(id);
    },
  }),
  categories: (userId: number | undefined) => ({
    queryKey: [userId],
    queryFn: () => {
      if (userId === undefined) {
        return Promise.reject(new Error('User ID is undefined'));
      }

      return api.users.articleCategoriesControllerFetchArticleCategories(
        userId,
      );
    },
  }),
  category: (articleCategoryId: number | undefined) => ({
    queryKey: [articleCategoryId],
    queryFn: () => {
      if (articleCategoryId === undefined) {
        return Promise.reject(new Error('Category ID is undefined'));
      }

      return api.users.articleCategoriesControllerFetchMyCategory(
        articleCategoryId,
      );
    },
  }),
  search: (search: string) => ({
    queryKey: [search],
    queryFn: () => api.users.usersReadControllerGetUsersByName(search),
  }),
});

export { users };
