const PROXY_API_PREFIX = '/backend-api';

const ROUTES = {
  /* -------------------------------------------------------------------------------------------------
   * not-signed-in-only layout
   * -----------------------------------------------------------------------------------------------*/
  SIGN_IN: '/sign-in',

  /* -------------------------------------------------------------------------------------------------
   * onboarding layout
   * -----------------------------------------------------------------------------------------------*/
  NEW: '/new',

  /* -------------------------------------------------------------------------------------------------
   * public layout
   * -----------------------------------------------------------------------------------------------*/
  ROOT: '/',
  SEARCH_USER: '/search-user',

  /* user handle page */
  USER_HANDLE_OF: (userHandle: string) => `/@${userHandle}`,
  SELECT_CATEGORY_OF: (userHandle: string) => `/@${userHandle}/select-category`,
  FOLLOWERS_OF: (userHandle: string) => `/@${userHandle}/followers`,
  FOLLOWING_OF: (userHandle: string) => `/@${userHandle}/following`,
  ARTICLE_OF: (userHandle: string, articleId: number) =>
    `/@${userHandle}/${articleId}`,
  COMMENTS_OF: (userHandle: string, articleId: number) =>
    `/@${userHandle}/${articleId}/comments`,
  LIKES_OF: (userHandle: string, postId: number) =>
    `/@${userHandle}/${postId}/likes`,

  /* -------------------------------------------------------------------------------------------------
   * signed-in-only layout
   * -----------------------------------------------------------------------------------------------*/
  UPDATE_CATEGORY: '/update-category',
  CREATE_CATEGORY: '/create-category',
  CATEGORY_ID_EDIT_OF: (categoryId: number) =>
    `/update-category/${categoryId}/edit`,
  NOTIFICATIONS: '/notifications',
  REPORT_COMMENT_ID_OF: (commentId: number) => `/report/comments/${commentId}`,
  REPORT_ARTICLE_ID_OF: (articleId: number) => `/report/posts/${articleId}`,

  /* settings page */
  SETTINGS: '/settings',
  ANNOUNCEMENTS: '/settings/announcements',
  ANNOUNCEMENT_ID_OF: (announcementId: number) =>
    `/settings/announcements/${announcementId}`,
  LEGAL: '/settings/legal',
  TERMS_OF_USE: '/settings/legal/terms-of-use',
  PRIVACY_POLICY: '/settings/legal/privacy-policy',
  MANAGE_ACCOUNT: '/settings/manage-account',

  LEAVE: '/leave',

  WRITE: '/write',
} as const;

const API_ROUTES = {
  AUTH_KAKAO_LOGIN: `${PROXY_API_PREFIX}/auth/login/kakao`,
} as const;

export { API_ROUTES, PROXY_API_PREFIX, ROUTES };
