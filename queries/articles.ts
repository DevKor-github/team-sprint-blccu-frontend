import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/lib/api';

const articles = createQueryKeys('articles', {
  all: {
    queryKey: null,
  },
  trending: {
    queryKey: null,
    queryFn: () =>
      api.articles.articlesReadControllerFetchCursor({
        sort: 'DESC',
        take: 10,
        order: 'VIEW',
        dateCreated: 'MONTH',
      }),
  },
  following: {
    queryKey: null,
    queryFn: () =>
      api.articles.articlesReadControllerFetchFriendsCursor({
        sort: 'DESC',
        take: 10,
        dateCreated: 'MONTH',
      }),
  },
  userTrending: (userId: number) => ({
    queryKey: [userId],
    queryFn: () =>
      api.articles.articlesReadControllerFetchUserArticles({
        userId,
        sort: 'DESC',
        take: 10,
        order: 'VIEW',
      }),
  }),
  userByCategory: (userId: number, categoryId?: number) => ({
    queryKey: [userId, categoryId],
  }),
  detail: (articleId: number) => ({
    queryKey: [articleId],
    queryFn: () =>
      api.articles.articlesReadControllerFetchArticleDetail(articleId),
  }),
  like: (articleId: number) => ({
    queryKey: [articleId],
    queryFn: () => api.articles.likesControllerFetchIfLiked(articleId),
  }),
  likeUsers: (articleId: number) => ({
    queryKey: [articleId],
    queryFn: () => api.articles.likesControllerFetchLikes(articleId),
  }),
  comments: (articleId: number) => ({
    queryKey: [articleId],
    queryFn: () => api.articles.commentsControllerFetchComments(articleId),
  }),

  /* editor */
  background: {
    queryKey: null,
    queryFn: () =>
      api.articles.articleBackgroundsControllerGetArticleBackgrounds(),
  },
  tempPosts: {
    queryKey: null,
    queryFn: () => api.articles.articlesReadControllerFetchTempArticles(),
  },
  stickers: (articleId: number) => ({
    queryKey: [articleId],
    queryFn: () => api.articles.articlesReadControllerFetchArticle(articleId),
  }),
});

export { articles };
