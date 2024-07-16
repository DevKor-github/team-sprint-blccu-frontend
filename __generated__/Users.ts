/* eslint-disable */

/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import {
  AgreementCreateRequestDto,
  AgreementPatchRequestDto,
  AgreementsControllerAgreeData,
  AgreementsControllerFetchAgreementAdminData,
  AgreementsControllerFetchAgreementsData,
  AgreementsControllerGetContractData,
  AgreementsControllerGetContractParams,
  AgreementsControllerPatchAgreementData,
  AnnouncementCreateRequestDto,
  AnnouncementPatchRequestDto,
  AnnouncementsControllerCreateAnmtData,
  AnnouncementsControllerPatchAnmtData,
  AnnouncementsControllerRemoveAnmtData,
  ArticleBackgroundsControllerCreateArticleBackgroundData,
  ArticleBackgroundsControllerDeleteData,
  ArticleCategoriesControllerCreateArticleCategoryData,
  ArticleCategoriesControllerDeleteArticleCategoryData,
  ArticleCategoriesControllerFetchArticleCategoriesData,
  ArticleCategoriesControllerFetchMyCategoryData,
  ArticleCategoriesControllerPatchArticleCategoryData,
  ArticleCategoryCreateRequestDto,
  ArticleCategoryPatchRequestDto,
  CommentsControllerFetchUserCommentsData,
  FeedbackCreateRequestDto,
  FeedbacksControllerCreateFeedbackData,
  FeedbacksControllerGetFeedbacksData,
  FollowsControllerCheckFollowerData,
  FollowsControllerCheckFollowingData,
  FollowsControllerFollowUserData,
  FollowsControllerGetFollowersData,
  FollowsControllerGetFollowsData,
  FollowsControllerUnfollowUserData,
  ImageUploadRequestDto,
  ReportsControllerFetchAllData,
  StickerCategoriesControllerCreateCategoryData,
  StickerCategoriesControllerMapCategoryData,
  StickerCategoriesMapDto,
  StickerCategoryCreateRequestDto,
  StickersControllerCreatePublicStickerData,
  UserDeleteRequestDto,
  UserPatchRequestDto,
  UsersDeleteControllerDeleteUserData,
  UsersReadControllerGetMyProfileData,
  UsersReadControllerGetUserByHandleData,
  UsersReadControllerGetUserByIdData,
  UsersReadControllerGetUsersByNameData,
  UsersUpdateControllerPatchUserData,
  UsersUpdateControllerPostProfileImageData,
  UsersUpdateControllerUploadBackgroundImageData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 공지 API, 어드민 API
   * @name AnnouncementsControllerCreateAnmt
   * @summary [어드민용] 공지사항 작성
   * @request POST:/users/admin/anmts
   * @secure
   */
  announcementsControllerCreateAnmt = (
    data: AnnouncementCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<AnnouncementsControllerCreateAnmtData, any>({
      path: `/users/admin/anmts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 공지 API, 어드민 API
   * @name AnnouncementsControllerPatchAnmt
   * @summary [어드민용] 공지사항 수정
   * @request PATCH:/users/admin/anmts/{announcementId}
   * @secure
   */
  announcementsControllerPatchAnmt = (
    announcementId: number,
    data: AnnouncementPatchRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<AnnouncementsControllerPatchAnmtData, any>({
      path: `/users/admin/anmts/${announcementId}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description id에 해당하는 공지사항 삭제, 삭제된 공지사항을 반환
   *
   * @tags 공지 API, 어드민 API
   * @name AnnouncementsControllerRemoveAnmt
   * @summary [어드민용] 공지사항 삭제
   * @request DELETE:/users/admin/anmts/{announcementId}
   * @secure
   */
  announcementsControllerRemoveAnmt = (
    announcementId: number,
    params: RequestParams = {},
  ) =>
    this.request<AnnouncementsControllerRemoveAnmtData, any>({
      path: `/users/admin/anmts/${announcementId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description 이름에 username이 포함된 유저를 검색한다.
   *
   * @tags 유저 API
   * @name UsersReadControllerGetUsersByName
   * @summary 이름이 포함된 유저 검색
   * @request GET:/users/username/{username}
   */
  usersReadControllerGetUsersByName = (
    username: string,
    params: RequestParams = {},
  ) =>
    this.request<UsersReadControllerGetUsersByNameData, any>({
      path: `/users/username/${username}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description id가 일치하는 유저 프로필을 조회한다.
   *
   * @tags 유저 API
   * @name UsersReadControllerGetUserById
   * @summary 특정 유저 프로필 조회(id)
   * @request GET:/users/profile/id/{userId}
   */
  usersReadControllerGetUserById = (
    userId: number,
    params: RequestParams = {},
  ) =>
    this.request<UsersReadControllerGetUserByIdData, any>({
      path: `/users/profile/id/${userId}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description handle이 일치하는 유저 프로필을 조회한다.
   *
   * @tags 유저 API
   * @name UsersReadControllerGetUserByHandle
   * @summary 특정 유저 프로필 조회(handle)
   * @request GET:/users/profile/handle/{handle}
   */
  usersReadControllerGetUserByHandle = (
    handle: string,
    params: RequestParams = {},
  ) =>
    this.request<UsersReadControllerGetUserByHandleData, any>({
      path: `/users/profile/handle/${handle}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 로그인된 유저의 프로필을 불러온다.
   *
   * @tags 유저 API
   * @name UsersReadControllerGetMyProfile
   * @summary 로그인된 유저의 프로필 불러오기
   * @request GET:/users/me
   * @secure
   */
  usersReadControllerGetMyProfile = (params: RequestParams = {}) =>
    this.request<UsersReadControllerGetMyProfileData, any>({
      path: `/users/me`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 로그인된 유저의 이름이나 설명, 핸들, 혹은 모두를 변경한다.
   *
   * @tags 유저 API
   * @name UsersUpdateControllerPatchUser
   * @summary 로그인된 유저의 이름이나 설명, 핸들을 변경
   * @request PATCH:/users/me
   * @secure
   */
  usersUpdateControllerPatchUser = (
    data: UserPatchRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<UsersUpdateControllerPatchUserData, any>({
      path: `/users/me`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 회원을 탈퇴하고 연동된 게시글과 댓글을 soft delete한다.
   *
   * @tags 유저 API
   * @name UsersDeleteControllerDeleteUser
   * @summary 회원 탈퇴(soft delete)
   * @request DELETE:/users/me
   * @secure
   */
  usersDeleteControllerDeleteUser = (
    data: UserDeleteRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<UsersDeleteControllerDeleteUserData, any>({
      path: `/users/me`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 스토리지에 프로필 사진을 업로드하고 변경한다.
   *
   * @tags 유저 API
   * @name UsersUpdateControllerPostProfileImage
   * @summary 로그인된 유저의 프로필 이미지를 변경
   * @request POST:/users/me/profile-image
   * @secure
   */
  usersUpdateControllerPostProfileImage = (
    data: ImageUploadRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<UsersUpdateControllerPostProfileImageData, any>({
      path: `/users/me/profile-image`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 스토리지에 배경 사진을 업로드하고 변경한다.
   *
   * @tags 유저 API
   * @name UsersUpdateControllerUploadBackgroundImage
   * @summary 로그인된 유저의 배경 이미지를 변경
   * @request POST:/users/me/background-image
   * @secure
   */
  usersUpdateControllerUploadBackgroundImage = (
    data: ImageUploadRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<UsersUpdateControllerUploadBackgroundImageData, any>({
      path: `/users/me/background-image`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API
   * @name AgreementsControllerGetContract
   * @summary contract fetch
   * @request GET:/users/contracts
   */
  agreementsControllerGetContract = (
    query: AgreementsControllerGetContractParams,
    params: RequestParams = {},
  ) =>
    this.request<AgreementsControllerGetContractData, any>({
      path: `/users/contracts`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API
   * @name AgreementsControllerAgree
   * @summary 온보딩 동의
   * @request POST:/users/me/agreement
   * @secure
   */
  agreementsControllerAgree = (
    data: AgreementCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<AgreementsControllerAgreeData, any>({
      path: `/users/me/agreement`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API
   * @name AgreementsControllerFetchAgreements
   * @summary 로그인된 유저의 온보딩 동의 내용들을 fetch
   * @request GET:/users/me/agreements
   * @secure
   */
  agreementsControllerFetchAgreements = (params: RequestParams = {}) =>
    this.request<AgreementsControllerFetchAgreementsData, any>({
      path: `/users/me/agreements`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API, 어드민 API
   * @name AgreementsControllerFetchAgreementAdmin
   * @summary [어드민용] 특정 유저의 온보딩 동의 내용을 조회
   * @request GET:/users/admin/{userId}/agreements
   * @secure
   */
  agreementsControllerFetchAgreementAdmin = (
    userId: number,
    params: RequestParams = {},
  ) =>
    this.request<AgreementsControllerFetchAgreementAdminData, any>({
      path: `/users/admin/${userId}/agreements`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API
   * @name AgreementsControllerPatchAgreement
   * @summary 동의 여부를 수정
   * @request PATCH:/users/me/agreement/{agreementId}
   * @secure
   */
  agreementsControllerPatchAgreement = (
    agreementId: number,
    data: AgreementPatchRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<AgreementsControllerPatchAgreementData, any>({
      path: `/users/me/agreement/${agreementId}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API
   * @name FeedbacksControllerCreateFeedback
   * @summary 피드백 작성하기
   * @request POST:/users/feedback
   * @secure
   */
  feedbacksControllerCreateFeedback = (
    data: FeedbackCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<FeedbacksControllerCreateFeedbackData, any>({
      path: `/users/feedback`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API, 어드민 API
   * @name FeedbacksControllerGetFeedbacks
   * @summary [어드민용] 피드백 내용 조회
   * @request GET:/users/admin/feedbacks
   * @secure
   */
  feedbacksControllerGetFeedbacks = (params: RequestParams = {}) =>
    this.request<FeedbacksControllerGetFeedbacksData, any>({
      path: `/users/admin/feedbacks`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 블꾸에서 제작한 스티커를 업로드한다. 어드민 권한이 있는 유저 전용. 카테고리와 매핑을 해주어야 조회 가능.
   *
   * @tags 스티커 API, 어드민 API
   * @name StickersControllerCreatePublicSticker
   * @summary [어드민용] 공용 스티커를 업로드한다.
   * @request POST:/users/admin/stickers
   * @secure
   */
  stickersControllerCreatePublicSticker = (
    data: ImageUploadRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<StickersControllerCreatePublicStickerData, any>({
      path: `/users/admin/stickers`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description [어드민 전용] 스티커 카테고리를 만든다.
   *
   * @tags 스티커 API, 어드민 API
   * @name StickerCategoriesControllerCreateCategory
   * @summary [어드민용] 스티커 카테고리 생성
   * @request POST:/users/admin/stickers/categories
   * @secure
   */
  stickerCategoriesControllerCreateCategory = (
    data: StickerCategoryCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<StickerCategoriesControllerCreateCategoryData, any>({
      path: `/users/admin/stickers/categories`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description [어드민 전용] 스티커에 카테고리를 매핑한다.
   *
   * @tags 스티커 API, 어드민 API
   * @name StickerCategoriesControllerMapCategory
   * @summary [어드민용] 스티커와 카테고리 매핑
   * @request POST:/users/admin/stickers/map
   * @secure
   */
  stickerCategoriesControllerMapCategory = (
    data: StickerCategoriesMapDto,
    params: RequestParams = {},
  ) =>
    this.request<StickerCategoriesControllerMapCategoryData, any>({
      path: `/users/admin/stickers/map`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 로그인된 유저가 userId를 팔로우한다.
   *
   * @tags 유저 API
   * @name FollowsControllerFollowUser
   * @summary 팔로우 추가하기
   * @request POST:/users/{userId}/follow
   * @secure
   */
  followsControllerFollowUser = (userId: number, params: RequestParams = {}) =>
    this.request<FollowsControllerFollowUserData, void>({
      path: `/users/${userId}/follow`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * @description 로그인된 유저가 userId를 언팔로우 한다.
   *
   * @tags 유저 API
   * @name FollowsControllerUnfollowUser
   * @summary 팔로우 삭제하기
   * @request DELETE:/users/{userId}/follow
   * @secure
   */
  followsControllerUnfollowUser = (
    userId: number,
    params: RequestParams = {},
  ) =>
    this.request<FollowsControllerUnfollowUserData, void>({
      path: `/users/${userId}/follow`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description 나와 팔로우되었는지 유무 체크를 한다.
   *
   * @tags 유저 API
   * @name FollowsControllerCheckFollower
   * @summary 팔로워 유무 조회
   * @request GET:/users/me/follower/{userId}
   * @secure
   */
  followsControllerCheckFollower = (
    userId: number,
    params: RequestParams = {},
  ) =>
    this.request<FollowsControllerCheckFollowerData, any>({
      path: `/users/me/follower/${userId}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 나의 팔로잉인지 유무 체크를 한다.
   *
   * @tags 유저 API
   * @name FollowsControllerCheckFollowing
   * @summary 팔로잉 유무 조회
   * @request GET:/users/me/following/{userId}
   * @secure
   */
  followsControllerCheckFollowing = (
    userId: number,
    params: RequestParams = {},
  ) =>
    this.request<FollowsControllerCheckFollowingData, any>({
      path: `/users/me/following/${userId}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description userId의 팔로워 목록을 조회한다.
   *
   * @tags 유저 API
   * @name FollowsControllerGetFollowers
   * @summary 팔로워 목록 조회
   * @request GET:/users/{userId}/followers
   */
  followsControllerGetFollowers = (
    userId: number,
    params: RequestParams = {},
  ) =>
    this.request<FollowsControllerGetFollowersData, any>({
      path: `/users/${userId}/followers`,
      method: 'GET',
      ...params,
    });
  /**
   * @description userId의 팔로잉 목록을 조회한다.
   *
   * @tags 유저 API
   * @name FollowsControllerGetFollows
   * @summary 팔로잉 목록 조회
   * @request GET:/users/{userId}/followings
   */
  followsControllerGetFollows = (userId: number, params: RequestParams = {}) =>
    this.request<FollowsControllerGetFollowsData, any>({
      path: `/users/${userId}/followings`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 특정 유저가 생성한 카테고리의 이름과 id, 게시글 개수를 조회한다.
   *
   * @tags 유저 API
   * @name ArticleCategoriesControllerFetchArticleCategories
   * @summary 특정 유저의 카테고리 전체 조회
   * @request GET:/users/{userId}/categories
   */
  articleCategoriesControllerFetchArticleCategories = (
    userId: number,
    params: RequestParams = {},
  ) =>
    this.request<ArticleCategoriesControllerFetchArticleCategoriesData, any>({
      path: `/users/${userId}/categories`,
      method: 'GET',
      ...params,
    });
  /**
   * @description id에 해당하는 카테고리를 조회한다.
   *
   * @tags 유저 API
   * @name ArticleCategoriesControllerFetchMyCategory
   * @summary 특정 카테고리 조회
   * @request GET:/users/categories/{articleCategoryId}
   */
  articleCategoriesControllerFetchMyCategory = (
    articleCategoryId: number,
    params: RequestParams = {},
  ) =>
    this.request<ArticleCategoriesControllerFetchMyCategoryData, any>({
      path: `/users/categories/${articleCategoryId}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 로그인된 유저와 연결된 카테고리를 생성한다.
   *
   * @tags 유저 API
   * @name ArticleCategoriesControllerCreateArticleCategory
   * @summary 게시글 카테고리 생성
   * @request POST:/users/me/categories
   * @secure
   */
  articleCategoriesControllerCreateArticleCategory = (
    data: ArticleCategoryCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ArticleCategoriesControllerCreateArticleCategoryData, any>({
      path: `/users/me/categories`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API
   * @name ArticleCategoriesControllerPatchArticleCategory
   * @summary 로그인된 유저의 특정 카테고리 수정
   * @request PATCH:/users/me/categories/{articleCategoryId}
   * @secure
   */
  articleCategoriesControllerPatchArticleCategory = (
    articleCategoryId: number,
    data: ArticleCategoryPatchRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ArticleCategoriesControllerPatchArticleCategoryData, any>({
      path: `/users/me/categories/${articleCategoryId}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 로그인된 유저의 카테고리 중 articleCategoryId 일치하는 카테고리를 삭제한다
   *
   * @tags 유저 API
   * @name ArticleCategoriesControllerDeleteArticleCategory
   * @summary 유저의 지정 카테고리 삭제하기
   * @request DELETE:/users/me/categories/{articleCategoryId}
   * @secure
   */
  articleCategoriesControllerDeleteArticleCategory = (
    articleCategoryId: number,
    params: RequestParams = {},
  ) =>
    this.request<ArticleCategoriesControllerDeleteArticleCategoryData, any>({
      path: `/users/me/categories/${articleCategoryId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 어드민 API
   * @name ArticleBackgroundsControllerCreateArticleBackground
   * @summary 내지 업로드
   * @request POST:/users/admin/article/background
   * @secure
   */
  articleBackgroundsControllerCreateArticleBackground = (
    data: ImageUploadRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ArticleBackgroundsControllerCreateArticleBackgroundData, any>({
      path: `/users/admin/article/background`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags 어드민 API
   * @name ArticleBackgroundsControllerDelete
   * @summary 내지 삭제하기
   * @request DELETE:/users/admin/articles/background/{articleBackgroundId}
   * @secure
   */
  articleBackgroundsControllerDelete = (
    articleBackgroundId: string,
    params: RequestParams = {},
  ) =>
    this.request<ArticleBackgroundsControllerDeleteData, any>({
      path: `/users/admin/articles/background/${articleBackgroundId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API
   * @name CommentsControllerFetchUserComments
   * @summary 자신의 최근 댓글 10개 조회
   * @request GET:/users/me/comments
   * @secure
   */
  commentsControllerFetchUserComments = (params: RequestParams = {}) =>
    this.request<CommentsControllerFetchUserCommentsData, any>({
      path: `/users/me/comments`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 API, 어드민 API
   * @name ReportsControllerFetchAll
   * @summary [어드민용] 신고 내역 조회
   * @request GET:/users/admin/reports
   * @secure
   */
  reportsControllerFetchAll = (params: RequestParams = {}) =>
    this.request<ReportsControllerFetchAllData, any>({
      path: `/users/admin/reports`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
