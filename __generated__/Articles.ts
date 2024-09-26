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
  ArticleBackgroundsControllerGetArticleBackgroundsData,
  ArticleCreateDraftRequestDto,
  ArticleCreateRequestDto,
  ArticleDeleteRequestDto,
  ArticlePatchRequestDto,
  ArticlesCreateControllerCreateDraftData,
  ArticlesCreateControllerPublishArticleData,
  ArticlesCreateControllerUploadImageData,
  ArticlesReadControllerFetchArticleData,
  ArticlesReadControllerFetchArticleDetailData,
  ArticlesReadControllerFetchCursorData,
  ArticlesReadControllerFetchCursorParams,
  ArticlesReadControllerFetchFriendsCursorData,
  ArticlesReadControllerFetchFriendsCursorParams,
  ArticlesReadControllerFetchTempArticlesData,
  ArticlesReadControllerFetchUserArticlesData,
  ArticlesReadControllerFetchUserArticlesParams,
  ArticlesUpdateControllerPatchArticleData,
  CommentCreateRequestDto,
  CommentPatchRequestDto,
  CommentsControllerCreateCommentData,
  CommentsControllerDeleteCommentData,
  CommentsControllerFetchCommentsData,
  CommentsControllerPatchCommentData,
  ImageUploadRequestDto,
  LikesControllerDeleteLikeData,
  LikesControllerFetchIfLikedData,
  LikesControllerFetchLikesData,
  LikesControllerLikeData,
  ReportCreateRequestDto,
  ReportsControllerReportArticleData,
  ReportsControllerReportCommentData,
  StickerBlocksControllerCreateStickerBlocksData,
  StickerBlocksCreateRequestDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Articles<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 게시글과 스티커 아이디를 매핑한 스티커 블록을 생성한다. 세부 스타일 좌표값을 저장한다.
   *
   * @tags 게시글 API
   * @name StickerBlocksControllerCreateStickerBlocks
   * @summary 게시글 속 스티커 생성
   * @request POST:/articles/{articleId}/stickers/bulk
   * @secure
   */
  stickerBlocksControllerCreateStickerBlocks = (
    articleId: number,
    data: StickerBlocksCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<StickerBlocksControllerCreateStickerBlocksData, void>({
      path: `/articles/${articleId}/stickers/bulk`,
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
   * @name ArticlesCreateControllerPublishArticle
   * @summary 게시글 등록
   * @request POST:/articles
   * @secure
   */
  articlesCreateControllerPublishArticle = (
    data: ArticleCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesCreateControllerPublishArticleData, void>({
      path: `/articles`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 게시글을 임시등록한다.
   *
   * @tags 게시글 API
   * @name ArticlesCreateControllerCreateDraft
   * @summary 게시글 임시등록
   * @request POST:/articles/temp
   * @secure
   */
  articlesCreateControllerCreateDraft = (
    data: ArticleCreateDraftRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesCreateControllerCreateDraftData, void>({
      path: `/articles/temp`,
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
   * @name ArticlesReadControllerFetchTempArticles
   * @summary 임시작성 게시글 조회
   * @request GET:/articles/temp
   * @secure
   */
  articlesReadControllerFetchTempArticles = (params: RequestParams = {}) =>
    this.request<ArticlesReadControllerFetchTempArticlesData, any>({
      path: `/articles/temp`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 이미지를 서버에 업로드한다. url을 반환 받는다. 게시글 내부 이미지 업로드 및 캡처 이미지 업로드용. max_width=1280px
   *
   * @tags 게시글 API
   * @name ArticlesCreateControllerUploadImage
   * @summary 이미지 업로드
   * @request POST:/articles/image
   */
  articlesCreateControllerUploadImage = (
    data: ImageUploadRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesCreateControllerUploadImageData, void>({
      path: `/articles/image`,
      method: 'POST',
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description id에 해당하는 게시글을 가져온다. 조회수를 올린다. 보호된 게시글은 권한이 있는 사용자만 접근 가능하다.
   *
   * @tags 게시글 API
   * @name ArticlesReadControllerFetchArticleDetail
   * @summary 게시글 디테일 뷰 fetch
   * @request GET:/articles/detail/{articleId}
   */
  articlesReadControllerFetchArticleDetail = (
    articleId: number,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesReadControllerFetchArticleDetailData, void>({
      path: `/articles/detail/${articleId}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 본인 게시글 수정용으로 id에 해당하는 게시글에 조인된 스티커 블록들의 값과 게시글 세부 데이터를 모두 가져온다.
   *
   * @tags 게시글 API
   * @name ArticlesReadControllerFetchArticle
   * @summary [수정용] 게시글 및 스티커 상세 데이터 fetch
   * @request GET:/articles/update/{articleId}
   * @secure
   */
  articlesReadControllerFetchArticle = (
    articleId: number,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesReadControllerFetchArticleData, void>({
      path: `/articles/update/${articleId}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 커서 기반으로 게시글을 조회한다. 최초 조회 시 커서 값을 비워서 요청한다. 쿼리 옵션을 변경할 경우 기존의 커서 값을 쓸 수 없다. PUBLIC 게시글만 조회한다.
   *
   * @tags 게시글 API
   * @name ArticlesReadControllerFetchCursor
   * @summary [cursor]전체 게시글 조회 API
   * @request GET:/articles/cursor
   */
  articlesReadControllerFetchCursor = (
    query: ArticlesReadControllerFetchCursorParams,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesReadControllerFetchCursorData, any>({
      path: `/articles/cursor`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 커서 기반으로 게시글을 조회한다. 최초 조회 시 커서 값을 비워서 요청한다. 쿼리 옵션을 변경할 경우 기존의 커서 값을 쓸 수 없다.
   *
   * @tags 게시글 API
   * @name ArticlesReadControllerFetchFriendsCursor
   * @summary [cursor]친구 게시글 조회 API
   * @request GET:/articles/cursor/friends
   * @secure
   */
  articlesReadControllerFetchFriendsCursor = (
    query: ArticlesReadControllerFetchFriendsCursorParams,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesReadControllerFetchFriendsCursorData, void>({
      path: `/articles/cursor/friends`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 로그인 된 유저의 경우 private/protected 게시글 조회 권한 체크 후 조회. 카테고리 이름으로 필터링 가능
   *
   * @tags 게시글 API
   * @name ArticlesReadControllerFetchUserArticles
   * @summary [cursor]특정 유저의 게시글 조회
   * @request GET:/articles/cursor/user/{userId}
   */
  articlesReadControllerFetchUserArticles = (
    { userId, ...query }: ArticlesReadControllerFetchUserArticlesParams,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesReadControllerFetchUserArticlesData, any>({
      path: `/articles/cursor/user/${userId}`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name ArticlesUpdateControllerPatchArticle
   * @summary 게시글 patch
   * @request PATCH:/articles/{articleId}
   * @secure
   */
  articlesUpdateControllerPatchArticle = (
    articleId: number,
    data: ArticlePatchRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ArticlesUpdateControllerPatchArticleData, void>({
      path: `/articles/${articleId}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 로그인 된 유저의 postId에 해당하는 게시글을 삭제한다. isHardDelete(nullable)을 통해 삭제 방식 결정
   *
   * @tags 게시글 API
   * @name ArticlesDeleteControllerSoftDelete
   * @summary 게시글 삭제
   * @request DELETE:/articles/{articleId}
   * @secure
   */
  articlesDeleteControllerSoftDelete = (
    articleId: number,
    data: ArticleDeleteRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/articles/${articleId}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name ArticleBackgroundsControllerGetArticleBackgrounds
   * @summary 내지 모두 불러오기
   * @request GET:/articles/backgrounds
   */
  articleBackgroundsControllerGetArticleBackgrounds = (
    params: RequestParams = {},
  ) =>
    this.request<ArticleBackgroundsControllerGetArticleBackgroundsData, any>({
      path: `/articles/backgrounds`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 댓글을 작성한다.
   *
   * @tags 게시글 API
   * @name CommentsControllerCreateComment
   * @summary 댓글을 작성한다.
   * @request POST:/articles/{articleId}/comments
   * @secure
   */
  commentsControllerCreateComment = (
    articleId: number,
    data: CommentCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<CommentsControllerCreateCommentData, void>({
      path: `/articles/${articleId}/comments`,
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
   * @request GET:/articles/{articleId}/comments
   */
  commentsControllerFetchComments = (
    articleId: number,
    params: RequestParams = {},
  ) =>
    this.request<CommentsControllerFetchCommentsData, any>({
      path: `/articles/${articleId}/comments`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name CommentsControllerPatchComment
   * @summary 특정 게시글에 대한 댓글 수정
   * @request PATCH:/articles/{articleId}/comments/{commentId}
   */
  commentsControllerPatchComment = (
    articleId: number,
    commentId: number,
    data: CommentPatchRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<CommentsControllerPatchCommentData, void>({
      path: `/articles/${articleId}/comments/${commentId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 댓글을 논리삭제한다. date_deleted 칼럼에 값이 생긴다.
   *
   * @tags 게시글 API
   * @name CommentsControllerDeleteComment
   * @summary 댓글을 삭제한다.
   * @request DELETE:/articles/{articleId}/comments/{commentId}
   * @secure
   */
  commentsControllerDeleteComment = (
    articleId: number,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.request<CommentsControllerDeleteCommentData, void>({
      path: `/articles/${articleId}/comments/${commentId}`,
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
   * @request POST:/articles/{articleId}/like
   * @secure
   */
  likesControllerLike = (articleId: number, params: RequestParams = {}) =>
    this.request<LikesControllerLikeData, void>({
      path: `/articles/${articleId}/like`,
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
   * @request DELETE:/articles/{articleId}/like
   * @secure
   */
  likesControllerDeleteLike = (articleId: number, params: RequestParams = {}) =>
    this.request<LikesControllerDeleteLikeData, void>({
      path: `/articles/${articleId}/like`,
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
   * @request GET:/articles/{articleId}/like
   * @secure
   */
  likesControllerFetchIfLiked = (
    articleId: number,
    params: RequestParams = {},
  ) =>
    this.request<LikesControllerFetchIfLikedData, any>({
      path: `/articles/${articleId}/like`,
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
   * @request GET:/articles/{articleId}/like-users
   */
  likesControllerFetchLikes = (articleId: number, params: RequestParams = {}) =>
    this.request<LikesControllerFetchLikesData, any>({
      path: `/articles/${articleId}/like-users`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 게시글 API
   * @name ReportsControllerReportArticle
   * @summary 게시물 신고
   * @request POST:/articles/{articleId}/report
   * @secure
   */
  reportsControllerReportArticle = (
    articleId: number,
    data: ReportCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ReportsControllerReportArticleData, void>({
      path: `/articles/${articleId}/report`,
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
   * @request POST:/articles/comments/{commentId}/report
   * @secure
   */
  reportsControllerReportComment = (
    commentId: number,
    data: ReportCreateRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<ReportsControllerReportCommentData, void>({
      path: `/articles/comments/${commentId}/report`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
