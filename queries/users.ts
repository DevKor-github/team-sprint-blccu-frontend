import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const users = createQueryKeys('users', {
  me: {
    queryKey: null,
    queryFn: api.users.usersControllerFetchUser,
  },
  agreements: {
    queryKey: null,
    queryFn: api.users.agreementsControllerFetchAgreements,
  },
  detailByKakaoId: (kakaoId: number) => ({
    queryKey: [kakaoId],
    queryFn: () => api.users.usersControllerFindUserByKakaoId(kakaoId),
  }),
  detailByHandle: (handle: string) => ({
    queryKey: [handle],
    queryFn: () => api.users.usersControllerFindUserByHandle(handle),
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
  categories: (id: number | undefined) => ({
    queryKey: [id],
    queryFn: () => {
      if (id === undefined) {
        return Promise.reject(new Error('User ID is undefined'));
      }

      return api.users.postCategoriesControllerFetchPostCategories(id);
    },
  }),
  category: (categoryId: string | undefined) => ({
    queryKey: [categoryId],
    queryFn: () => {
      if (categoryId === undefined) {
        return Promise.reject(new Error('Category ID is undefined'));
      }

      return api.users.postCategoriesControllerFetchMyCategory(categoryId);
    },
  }),
  search: (search: string) => ({
    queryKey: [search],
    queryFn: () => api.users.usersControllerFindUsersByName(search),
  }),
});

export { users };
