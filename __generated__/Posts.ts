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
  CommentsControllerDeleteCommentData,
  CommentsControllerFetchCommentsData,
  CommentsControllerInsertCommentData,
  CommentsControllerPatchCommentData,
  CreateCommentInput,
  CreatePostInput,
  CreateReportInput,
  CreateStickerBlocksInput,
  ImageUploadDto,
  LikesControllerDeleteLikeData,
  LikesControllerFetchIfLikedData,
  LikesControllerFetchLikesData,
  LikesControllerLikeData,
  PatchCommentDto,
  PatchPostInput,
  PostBackgroundsControllerFetchAllData,
  PostsControllerCreatePrivateStickerData,
  PostsControllerFetchCursorData,
  PostsControllerFetchCursorParams,
  PostsControllerFetchFriendsCursorData,
  PostsControllerFetchFriendsCursorParams,
  PostsControllerFetchFriendsPostsData,
  PostsControllerFetchFriendsPostsParams,
  PostsControllerFetchPostData,
  PostsControllerFetchPostDetailData,
  PostsControllerFetchPostsData,
  PostsControllerFetchPostsParams,
  PostsControllerFetchTempPostsData,
  PostsControllerFetchUserPostsData,
  PostsControllerFetchUserPostsParams,
  PostsControllerPatchPostData,
  PostsControllerPublishPostData,
  PostsControllerSoftDeleteData,
  PostsControllerUpdatePostData,
  PublishPostInput,
  ReportsControllerReportCommentData,
  ReportsControllerReportPostData,
  StickerBlocksControllerCreateStickerBlocksData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Posts<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 게시글과 스티커 아이디를 매핑한 스티커 블록을 생성한다. 세부 스타일 좌표값을 저장한다.
   *
   * @tags 게시글 API
   * @name StickerBlocksControllerCreateStickerBlocks
   * @summary 게시글 속 스티커 생성
   * @request POST:/posts/{postId}/stickers/bulk
   * @secure
   */
  stickerBlocksControllerCreateStickerBlocks = (
    postId: number,
    data: CreateStickerBlocksInput,
    params: RequestParams = {},
  ) =>
    this.request<StickerBlocksControllerCreateStickerBlocksData, any>({
      path: `/posts/${postId}/stickers/bulk`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 게시글을 등록한다.
   *
   * @tags 게시글 API
   * @name PostsControllerPublishPost
   * @summary 게시글 등록
   * @request POST:/posts
   * @secure
   */
  postsControllerPublishPost = (
    data: PublishPostInput,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerPublishPostData, any>({
      path: `/posts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 로그인 된 유저의 postId에 해당하는 게시글을 논리삭제한다.
   *
   * @tags 게시글 API
   * @name PostsControllerSoftDelete
   * @summary 게시글 논리 삭제
   * @request DELETE:/posts/{postId}
   * @secure
   */
  postsControllerSoftDelete = (postId: number, params: RequestParams = {}) =>
    this.request<PostsControllerSoftDeleteData, any>({
      path: `/posts/${postId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name PostsControllerPatchPost
   * @summary 게시글 patch
   * @request PATCH:/posts/{postId}
   * @secure
   */
  postsControllerPatchPost = (
    postId: number,
    data: PatchPostInput,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerPatchPostData, any>({
      path: `/posts/${postId}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 게시글을 임시등록한다.
   *
   * @tags 게시글 API
   * @name PostsControllerUpdatePost
   * @summary 게시글 임시등록
   * @request POST:/posts/temp
   * @secure
   */
  postsControllerUpdatePost = (
    data: CreatePostInput,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerUpdatePostData, any>({
      path: `/posts/temp`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 로그인된 유저의 임시작성 게시글을 조회한다.
   *
   * @tags 게시글 API
   * @name PostsControllerFetchTempPosts
   * @summary 임시작성 게시글 조회
   * @request GET:/posts/temp
   * @secure
   */
  postsControllerFetchTempPosts = (params: RequestParams = {}) =>
    this.request<PostsControllerFetchTempPostsData, any>({
      path: `/posts/temp`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 이미지를 서버에 업로드한다. url을 반환 받는다. 게시글 내부 이미지 업로드 및 캡처 이미지 업로드용. max_width=1280px
   *
   * @tags 게시글 API
   * @name PostsControllerCreatePrivateSticker
   * @summary 이미지 업로드
   * @request POST:/posts/image
   * @secure
   */
  postsControllerCreatePrivateSticker = (
    data: ImageUploadDto,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerCreatePrivateStickerData, any>({
      path: `/posts/image`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description id에 해당하는 게시글을 가져온다. 조회수를 올린다. 보호된 게시글은 권한이 있는 사용자만 접근 가능하다.
   *
   * @tags 게시글 API
   * @name PostsControllerFetchPostDetail
   * @summary 게시글 디테일 뷰 fetch
   * @request GET:/posts/detail/{postId}
   */
  postsControllerFetchPostDetail = (
    postId: number,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerFetchPostDetailData, any>({
      path: `/posts/detail/${postId}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 본인 게시글 수정용으로 id에 해당하는 게시글에 조인된 스티커 블록들의 값과 게시글 세부 데이터를 모두 가져온다.
   *
   * @tags 게시글 API
   * @name PostsControllerFetchPost
   * @summary [수정용] 게시글 및 스티커 상세 데이터 fetch
   * @request GET:/posts/update/{postId}
   * @secure
   */
  postsControllerFetchPost = (postId: number, params: RequestParams = {}) =>
    this.request<PostsControllerFetchPostData, any>({
      path: `/posts/update/${postId}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description Query를 통해 오프셋 페이지네이션 가능. default) pageNo: 1, pageSize: 10
   *
   * @tags 게시글 API
   * @name PostsControllerFetchPosts
   * @summary [offset]전체 게시글 조회 API
   * @request GET:/posts/offset
   */
  postsControllerFetchPosts = (
    query: PostsControllerFetchPostsParams,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerFetchPostsData, any>({
      path: `/posts/offset`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 친구의 게시글을 조회한다. Query를 통해 오프셋 페이지네이션 가능. default) pageNo: 1, pageSize: 10
   *
   * @tags 게시글 API
   * @name PostsControllerFetchFriendsPosts
   * @summary [offset]친구 게시글 조회
   * @request GET:/posts/offset/friends
   * @secure
   */
  postsControllerFetchFriendsPosts = (
    query: PostsControllerFetchFriendsPostsParams,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerFetchFriendsPostsData, any>({
      path: `/posts/offset/friends`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 커서 기반으로 게시글을 조회한다. 최초 조회 시 커서 값을 비워서 요청한다. 쿼리 옵션을 변경할 경우 기존의 커서 값을 쓸 수 없다. PUBLIC 게시글만 조회한다.
   *
   * @tags 게시글 API
   * @name PostsControllerFetchCursor
   * @summary [cursor]전체 게시글 조회 API
   * @request GET:/posts/cursor
   */
  postsControllerFetchCursor = (
    query: PostsControllerFetchCursorParams,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerFetchCursorData, any>({
      path: `/posts/cursor`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 커서 기반으로 게시글을 조회한다. 최초 조회 시 커서 값을 비워서 요청한다. 쿼리 옵션을 변경할 경우 기존의 커서 값을 쓸 수 없다.
   *
   * @tags 게시글 API
   * @name PostsControllerFetchFriendsCursor
   * @summary [cursor]친구 게시글 조회 API
   * @request GET:/posts/cursor/friends
   */
  postsControllerFetchFriendsCursor = (
    query: PostsControllerFetchFriendsCursorParams,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerFetchFriendsCursorData, any>({
      path: `/posts/cursor/friends`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 로그인 된 유저의 경우 private/protected 게시글 조회 권한 체크 후 조회. 카테고리 이름으로 필터링 가능
   *
   * @tags 게시글 API
   * @name PostsControllerFetchUserPosts
   * @summary [cursor]특정 유저의 게시글 조회
   * @request GET:/posts/cursor/user/{userId}
   */
  postsControllerFetchUserPosts = (
    { userId, ...query }: PostsControllerFetchUserPostsParams,
    params: RequestParams = {},
  ) =>
    this.request<PostsControllerFetchUserPostsData, any>({
      path: `/posts/cursor/user/${userId}`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 댓글을 작성한다.
   *
   * @tags 게시글 API
   * @name CommentsControllerInsertComment
   * @summary 댓글을 작성한다.
   * @request POST:/posts/{postId}/comments
   * @secure
   */
  commentsControllerInsertComment = (
    postId: number,
    data: CreateCommentInput,
    params: RequestParams = {},
  ) =>
    this.request<CommentsControllerInsertCommentData, any>({
      path: `/posts/${postId}/comments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name CommentsControllerFetchComments
   * @summary 특정 게시글에 대한 댓글 조회
   * @request GET:/posts/{postId}/comments
   */
  commentsControllerFetchComments = (
    postId: number,
    params: RequestParams = {},
  ) =>
    this.request<CommentsControllerFetchCommentsData, any>({
      path: `/posts/${postId}/comments`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name CommentsControllerPatchComment
   * @summary 특정 게시글에 대한 댓글 수정
   * @request PATCH:/posts/{postId}/comments/{commentId}
   * @secure
   */
  commentsControllerPatchComment = (
    postId: number,
    commentId: number,
    data: PatchCommentDto,
    params: RequestParams = {},
  ) =>
    this.request<CommentsControllerPatchCommentData, any>({
      path: `/posts/${postId}/comments/${commentId}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 댓글을 논리삭제한다. date_deleted 칼럼에 값이 생긴다.
   *
   * @tags 게시글 API
   * @name CommentsControllerDeleteComment
   * @summary 댓글을 삭제한다.
   * @request DELETE:/posts/{postId}/comments/{commentId}
   * @secure
   */
  commentsControllerDeleteComment = (
    postId: number,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.request<CommentsControllerDeleteCommentData, any>({
      path: `/posts/${postId}/comments/${commentId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description 로그인 된 유저가 {id}인 게시글에 좋아요를 한다.
   *
   * @tags 게시글 API
   * @name LikesControllerLike
   * @summary 좋아요
   * @request POST:/posts/{postId}/like
   * @secure
   */
  likesControllerLike = (postId: number, params: RequestParams = {}) =>
    this.request<LikesControllerLikeData, void>({
      path: `/posts/${postId}/like`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * @description 로그인 된 유저가 {id}인 게시글에 좋아요를 취소한다.
   *
   * @tags 게시글 API
   * @name LikesControllerDeleteLike
   * @summary 좋아요 취소
   * @request DELETE:/posts/{postId}/like
   * @secure
   */
  likesControllerDeleteLike = (postId: number, params: RequestParams = {}) =>
    this.request<LikesControllerDeleteLikeData, void>({
      path: `/posts/${postId}/like`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description 특정 게시글에 내가 좋아요를 눌렀는 지 체크
   *
   * @tags 게시글 API
   * @name LikesControllerFetchIfLiked
   * @summary 게시글 좋아요 여부 체크
   * @request GET:/posts/{postId}/like
   * @secure
   */
  likesControllerFetchIfLiked = (postId: number, params: RequestParams = {}) =>
    this.request<LikesControllerFetchIfLikedData, any>({
      path: `/posts/${postId}/like`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 게시글에 좋아요를 누른 사람들을 확인한다.
   *
   * @tags 게시글 API
   * @name LikesControllerFetchLikes
   * @summary 좋아요 누른 대상 조회하기
   * @request GET:/posts/{postId}/like-users
   */
  likesControllerFetchLikes = (postId: number, params: RequestParams = {}) =>
    this.request<LikesControllerFetchLikesData, any>({
      path: `/posts/${postId}/like-users`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name PostBackgroundsControllerFetchAll
   * @summary 내지 모두 불러오기
   * @request GET:/posts/backgrounds
   */
  postBackgroundsControllerFetchAll = (params: RequestParams = {}) =>
    this.request<PostBackgroundsControllerFetchAllData, any>({
      path: `/posts/backgrounds`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name ReportsControllerReportPost
   * @summary 게시물 신고
   * @request POST:/posts/{postId}/report
   * @secure
   */
  reportsControllerReportPost = (
    postId: number,
    data: CreateReportInput,
    params: RequestParams = {},
  ) =>
    this.request<ReportsControllerReportPostData, any>({
      path: `/posts/${postId}/report`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name ReportsControllerReportComment
   * @summary 댓글 신고
   * @request POST:/posts/comments/{commentId}/report
   * @secure
   */
  reportsControllerReportComment = (
    commentId: number,
    data: CreateReportInput,
    params: RequestParams = {},
  ) =>
    this.request<ReportsControllerReportCommentData, any>({
      path: `/posts/comments/${commentId}/report`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
