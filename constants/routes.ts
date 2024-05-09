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

  /* user handle page */
  USER_HANDLE_OF: (userHandle: string) => `/@${userHandle}`,
  SELECT_CATEGORY_OF: (userHandle: string) => `/@${userHandle}/select-category`,
  FOLLOWERS_OF: (userHandle: string) => `/@${userHandle}/followers`,
  FOLLOWING_OF: (userHandle: string) => `/@${userHandle}/following`,
  POST_OF: (userHandle: string, postId: number) => `/@${userHandle}/${postId}`,
  COMMENTS_OF: (userHandle: string, postId: number) =>
    `/@${userHandle}/${postId}/comments`,

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
