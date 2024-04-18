import { type UUID } from 'crypto';

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

  /* username page */
  USERNAME_OF: (username: string) => `/@${username}`,
  SELECT_CATEGORY_OF: (username: string) => `/@${username}/select-category`,
  FOLLOWERS_OF: (username: string) => `/@${username}/followers`,
  FOLLOWING_OF: (username: string) => `/@${username}/following`,
  POST_OF: (username: string, slug: string) => `/@${username}/${slug}`,
  COMMENTS_OF: (username: string, slug: string) =>
    `/@${username}/${slug}/comments`,

  /* -------------------------------------------------------------------------------------------------
   * signed-in-only layout
   * -----------------------------------------------------------------------------------------------*/
  UPDATE_CATEGORY: '/update-category',
  CREATE_CATEGORY: '/create-category',
  CATEGORY_ID_EDIT_OF: (categoryId: UUID) =>
    `/update-category/${categoryId}/edit`,
  NOTIFICATIONS: '/notifications',
  REPORT_COMMENT_ID_OF: (commentId: UUID) => `/report/comments/${commentId}`,
  REPORT_POST_ID_OF: (postId: UUID) => `/report/posts/${postId}`,

  /* settings page */
  SETTINGS: '/settings',
  ANNOUNCEMENTS: '/settings/announcements',
  ANNOUNCEMENT_ID_OF: (announcementId: UUID) =>
    `/settings/announcements/${announcementId}`,
  LEGAL: '/settings/legal',
  TERMS_OF_USE: '/settings/legal/terms-of-use',
  PRIVACY_POLICY: '/settings/legal/privacy-policy',
  DESIGN_LICENSE: '/settings/legal/design-license',
  MANAGE_ACCOUNT: '/settings/manage-account',

  LEAVE: '/leave',

  WRITE: '/write',
} as const;

interface ApiRoutes {
  ROOT: string;
}

const MOCK_API_ROUTES: ApiRoutes = {
  ROOT: '/',
} as const;

const API_ROUTES: ApiRoutes = {
  ROOT: '/',
} as const;

export { API_ROUTES, ROUTES };
