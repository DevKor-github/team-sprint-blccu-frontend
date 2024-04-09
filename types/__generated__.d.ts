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
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export interface CreateCommentInput {
  /** 루트 게시글 아이디 */
  postsId: number;
  /** 댓글 내용 */
  content: string;
  /** [optional] 부모 댓글 id */
  parentId?: number;
  /** [optional] 수정 시 댓글 id */
  id?: number;
}

export interface DeleteCommentDto {
  /** 삭제하고자 하는 댓글 id */
  id: number;
}

export interface UserResponseDto {
  /** 카카오 id */
  kakaoId: number;
  /** 어드민 유저 여부 */
  isAdmin: boolean;
  /** 유저 이름 */
  username: string;
  /** 유저 설명 */
  description: string;
  /** 프로필 이미지 url */
  profile_image: string;
  /** 프로필 배경 이미지 url */
  background_image: string;
  /**
   * 생성된 날짜
   * @format date-time
   */
  date_created: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  date_deleted: string;
}

export interface PatchUserInput {
  /**
   * [optional] username 변경
   * @example "optional"
   */
  username?: string;
  /**
   * [optional] description 변경
   * @example "optional"
   */
  description?: string;
}

export interface ImageUploadDto {
  /**
   *  multipart/form-data 이미지
   * @format binary
   */
  file: File;
}

export interface ImageUploadResponseDto {
  /** 이미지가 저장된 url */
  image_url: string;
}

export interface Sticker {
  /** PK: A_I */
  id: number;
  /** 제작한 유저 fk */
  userKakaoId: number;
  /** 스티커 이미지 주소 */
  image_url: string;
  /** 블꾸 기본 제공 스티커 유무 */
  isDefault: boolean;
  /** 재사용 가능 유무 */
  isReusable: boolean;
}

export interface StickerCategory {
  /** PK: A_I_ */
  id: number;
  /** 카테고리 이름 */
  name: string;
}

export interface MapCategoryDto {
  /** 매핑 하고자 하는 스티커의 id */
  stickerId: number;
  /** 매핑 하고자 하는 카테고리의 id */
  stickerCategoryId: number;
}

export interface CreateStickerBlockDto {
  /** 참조하는 스티커의 아이디 */
  stickerId: number;
  /** 참조하는 포스트 아이디 */
  postsId: number;
  /** 스티커의 depth */
  depth: number;
  /** 스티커의 fill */
  fill: string;
  /** 스티커의 x좌표 */
  x: string;
  /** 스티커의 y좌표 */
  y: string;
  /** 스티커의 가로 폭 */
  width: string;
  /** 스티커의 세로 폭 */
  height: string;
}

export interface CreatePostInput {
  /** 포스트의 고유 아이디 */
  id?: number;
  /** 연결된 카테고리 fk */
  postCategoryId?: string;
  /** 연결된 내지 fk */
  postBackgroundId?: string;
  /** 제목(최대 100자) */
  title: string;
  /** 댓글 허용 여부(boolean) */
  allow_comment?: boolean;
  /** [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개 */
  scope?: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
}

export interface PublishPostDto {
  /** 포스트의 고유 아이디 */
  id: number;
  /** 연결된 카테고리 fk */
  postCategoryId: string;
  /** 연결된 내지 fk */
  postBackgroundId: string;
  /** 작성한 유저 fk */
  userKakaoId: number;
  /** 제목(최대 100자) */
  title: string;
  /** 임시저장(false), 발행(true) */
  isPublished: boolean;
  /** 좋아요 카운트 */
  like_count: number;
  /** 조회수 카운트 */
  view_count: number;
  /** 댓글수 카운트 */
  comment_count: number;
  /** 댓글 허용 여부(boolean) */
  allow_comment: boolean;
  /** [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개 */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /**
   * 생성된 날짜
   * @format date-time
   */
  date_created: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  date_updated: string;
  /**
   * soft delete column
   * @format date-time
   */
  date_deleted: string;
  /** 게시글 내용 */
  content: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
}

export interface PublishPostInput {
  /** 포스트의 고유 아이디 */
  id?: number;
  /** 연결된 카테고리 fk */
  postCategoryId: string;
  /** 연결된 내지 fk */
  postBackgroundId: string;
  /** 제목(최대 100자) */
  title: string;
  /** 댓글 허용 여부(boolean) */
  allow_comment: boolean;
  /** [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개 */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
}

export interface PostCategory {
  /** PK: uuid */
  id: string;
  /** 카테고리 이름 */
  name: string;
}

export interface PostBackground {
  /** PK: uuid */
  id: string;
  /** 이미지가 저장된 url */
  image_url: string;
}

export interface PostResponseDto {
  /** 임시저장 된 포스트의 아이디 */
  id: number;
  /** 작성자의 정보 */
  user: UserResponseDto;
  /** 지정할 카테고리의 아이디 */
  postCategory: PostCategory;
  /** 지정할 내지의 아이디 */
  postBackground: PostBackground;
  /** 제목 설정(최대 100자) */
  title: string;
  /** 댓글 허용 여부(boolean) */
  allow_comment: boolean;
  /** [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개 */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
}

export interface PagePostResponseDto {
  /** 한 페이지 당 아이템 갯수 */
  pageSize: number;
  /** 전체 아이템 갯수 */
  totalCount: number;
  /** 요청할 페이지 번호 */
  totalPage: number;
  /** 조회된 포스트 */
  items: PostResponseDto[];
}

export interface ToggleLikeDto {
  /** post_id */
  id: number;
}

export interface ToggleLikeResponseDto {
  /** 포스트의 고유 아이디 */
  id: number;
  /** 제목(최대 100자) */
  title: string;
  /** 임시저장(false), 발행(true) */
  isPublished: boolean;
  /** 좋아요 카운트 */
  like_count: number;
  /** 조회수 카운트 */
  view_count: number;
  /** 댓글 허용 여부(boolean) */
  allow_comment: boolean;
  /** [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개 */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /**
   * 생성된 날짜
   * @format date-time
   */
  date_created: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  date_updated: string;
  /**
   * soft delete column
   * @format date-time
   */
  date_deleted: string;
}

export interface User {
  /** 카카오 id */
  kakaoId: number;
  /** crypted refresh token */
  current_refresh_token: string;
  /** 어드민 유저 여부 */
  isAdmin: boolean;
  /** 유저 이름 */
  username: string;
  /** 유저 설명 */
  description: string;
  /** 프로필 이미지 url */
  profile_image: string;
  /** 프로필 배경 이미지 url */
  background_image: string;
  /**
   * 생성된 날짜
   * @format date-time
   */
  date_created: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  date_deleted: string;
}

export interface FetchLikesResponseDto {
  /** PK: uuid */
  id: string;
  /** 좋아요를 누른 유저 */
  user: User;
}

export interface FollowDto {
  /**
   * 카카오 id
   * @example 3388766789
   */
  follow_id: number;
}

export interface FollowUserDto {
  /** PK: uuid */
  id: string;
  /** FK: kakaoId */
  to_user: number;
  /** FK: kakaoId */
  from_user: number;
}

export interface FromUserResponseDto {
  /** @example "b6993606-1992-427e-bf73-c3fc778a48ff" */
  id: string;
  from_user: UserResponseDto;
}

export interface ToUserResponseDto {
  /** @example "b6993606-1992-427e-bf73-c3fc778a48ff" */
  id: string;
  to_user: UserResponseDto;
}

export interface CreatePostCategoryDto {
  /** 카테고리 이름 */
  name: string;
}

export interface CreatePostCategoryResponseDto {
  /** PK: uuid */
  id: string;
  /** 카테고리 이름 */
  name: string;
  /** 유저 kakaoId */
  user: number;
}

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { 'Content-Type': type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title blccu.com
 * @version 1.0
 * @contact
 *
 * blccu.com API spec
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  comments = {
    /**
     * @description 댓글을 작성하거나 (optional)id에 해당하는 댓글을 수정한다.
     *
     * @tags 댓글 API
     * @name CommentsControllerUpsertComment
     * @summary 댓글을 작성하거나 수정한다.
     * @request POST:/comments
     */
    commentsControllerUpsertComment: (
      data: CreateCommentInput,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/comments`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 댓글을 논리삭제한다. date_deleted 칼럼에 값이 생긴다.
     *
     * @tags 댓글 API
     * @name CommentsControllerDeleteComment
     * @summary 댓글을 삭제한다.
     * @request DELETE:/comments
     */
    commentsControllerDeleteComment: (
      data: DeleteCommentDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/comments`,
        method: 'DELETE',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  users = {
    /**
     * @description 배포 때 삭제할 거임. 개발 및 테스트용
     *
     * @tags 유저 API
     * @name UsersControllerFindAllUsers
     * @summary [ONLY FOR DEV] 모든 유저의 정보를 조회한다
     * @request GET:/users/all
     */
    usersControllerFindAllUsers: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/all`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description 로그인된 유저의 정보를 불러온다.
     *
     * @tags 유저 API
     * @name UsersControllerFetchUser
     * @summary 로그인된 유저의 정보 불러오기
     * @request GET:/users
     * @secure
     */
    usersControllerFetchUser: (params: RequestParams = {}) =>
      this.request<UserResponseDto, any>({
        path: `/users`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인된 유저의 이름이나 설명, 혹은 둘 다를 변경한다.
     *
     * @tags 유저 API
     * @name UsersControllerPatchUser
     * @summary 로그인된 유저의 이름이나 설명을 변경
     * @request PATCH:/users
     * @secure
     */
    usersControllerPatchUser: (
      data: PatchUserInput,
      params: RequestParams = {},
    ) =>
      this.request<PatchUserInput, any>({
        path: `/users`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 스토리지에 프로필 사진을 업로드하고 변경한다.
     *
     * @tags 유저 API
     * @name UsersControllerUploadProfileImage
     * @summary 로그인된 유저의 프로필 이미지를 변경
     * @request POST:/users/profile
     * @secure
     */
    usersControllerUploadProfileImage: (
      data: ImageUploadDto,
      params: RequestParams = {},
    ) =>
      this.request<ImageUploadResponseDto, any>({
        path: `/users/profile`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 스토리지에 배경 사진을 업로드하고 변경한다.
     *
     * @tags 유저 API
     * @name UsersControllerUploadBackgroundImage
     * @summary 로그인된 유저의 배경 이미지를 변경
     * @request POST:/users/background
     * @secure
     */
    usersControllerUploadBackgroundImage: (
      data: ImageUploadDto,
      params: RequestParams = {},
    ) =>
      this.request<ImageUploadResponseDto, any>({
        path: `/users/background`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 이름에 username이 포함된 유저를 검색한다.
     *
     * @tags 유저 API
     * @name UsersControllerFindUsersByName
     * @summary 이름이 포함된 유저 검색
     * @request GET:/users/username/{username}
     */
    usersControllerFindUsersByName: (
      username: string,
      params: RequestParams = {},
    ) =>
      this.request<UserResponseDto[], any>({
        path: `/users/username/${username}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description kakaoId가 param과 일치하는 유저를 검색한다.
     *
     * @tags 유저 API
     * @name UsersControllerFindUserByKakaoId
     * @summary kakaoId에 정확히 부합하는 유저 검색
     * @request GET:/users/kakaoId/{kakaoId}
     */
    usersControllerFindUserByKakaoId: (
      kakaoId: number,
      params: RequestParams = {},
    ) =>
      this.request<UserResponseDto, any>({
        path: `/users/kakaoId/${kakaoId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  stickers = {
    /**
     * @description 개인만 조회 가능한 유저용 스티커를 업로드한다.
     *
     * @tags 스티커 API
     * @name StickersControllerCreatePrivateSticker
     * @summary [유저용] 개인 스티커를 업로드한다.
     * @request POST:/stickers/private
     * @secure
     */
    stickersControllerCreatePrivateSticker: (
      data: ImageUploadDto,
      params: RequestParams = {},
    ) =>
      this.request<Sticker, any>({
        path: `/stickers/private`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 본인이 만든 재사용 가능한 스티커들을 fetch한다.
     *
     * @tags 스티커 API
     * @name StickersControllerFetchPrivateStickers
     * @summary private 스티커를 fetch한다.
     * @request GET:/stickers/private
     * @secure
     */
    stickersControllerFetchPrivateStickers: (params: RequestParams = {}) =>
      this.request<Sticker[], any>({
        path: `/stickers/private`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 블꾸에서 제작한 스티커를 업로드한다. 어드민 권한이 있는 유저 전용. 카테고리와 매핑을 해주어야 조회 가능.
     *
     * @tags 스티커 API
     * @name StickersControllerCreatePublicSticker
     * @summary [어드민용] 공용 스티커를 업로드한다.
     * @request POST:/stickers/public
     * @secure
     */
    stickersControllerCreatePublicSticker: (
      data: ImageUploadDto,
      params: RequestParams = {},
    ) =>
      this.request<Sticker, void>({
        path: `/stickers/public`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 블꾸가 만든 스티커들을 fetch한다.
     *
     * @tags 스티커 API
     * @name StickersControllerFetchPublicStickers
     * @summary public 스티커를 fetch한다.
     * @request GET:/stickers/public
     */
    stickersControllerFetchPublicStickers: (params: RequestParams = {}) =>
      this.request<Sticker[], any>({
        path: `/stickers/public`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description 본인이 만든 스티커의 재사용 여부를 토글한다. 보관함 저장 혹은 삭제 용도로 사용할 것
     *
     * @tags 스티커 API
     * @name StickersControllerToggleReusable
     * @summary 스티커 재사용 여부를 토글한다.
     * @request POST:/stickers/{id}
     * @secure
     */
    stickersControllerToggleReusable: (
      id: number,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/stickers/${id}`,
        method: 'POST',
        secure: true,
        ...params,
      }),
  };
  stickercg = {
    /**
     * @description [어드민 전용] 스티커 카테고리를 만든다.
     *
     * @tags 스티커 카테고리 API
     * @name StickerCategoriesControllerCreateCategory
     * @summary 스티커 카테고리 생성
     * @request POST:/stickercg/{name}
     * @secure
     */
    stickerCategoriesControllerCreateCategory: (
      name: string,
      params: RequestParams = {},
    ) =>
      this.request<StickerCategory, any>({
        path: `/stickercg/${name}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 카테고리를 이름으로 찾고, 이에 매핑된 스티커들을 가져온다
     *
     * @tags 스티커 카테고리 API
     * @name StickerCategoriesControllerFetchStickersByCategoryName
     * @summary 카테고리 이름에 해당하는 스티커를 fetchAll
     * @request GET:/stickercg/{name}
     */
    stickerCategoriesControllerFetchStickersByCategoryName: (
      name: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/stickercg/${name}`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description [어드민 전용] 스티커에 카테고리를 매핑한다.
     *
     * @tags 스티커 카테고리 API
     * @name StickerCategoriesControllerMapCategory
     * @summary 스티커와 카테고리 매핑
     * @request POST:/stickercg
     * @secure
     */
    stickerCategoriesControllerMapCategory: (
      data: MapCategoryDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/stickercg`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 카테고리를 모두 조회한다.
     *
     * @tags 스티커 카테고리 API
     * @name StickerCategoriesControllerFetchCategories
     * @summary 카테고리 fetchAll
     * @request GET:/stickercg
     */
    stickerCategoriesControllerFetchCategories: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/stickercg`,
        method: 'GET',
        ...params,
      }),
  };
  stickerBlocks = {
    /**
     * @description 게시글과 스티커 아이디를 매핑한 스티커 블록을 생성한다. 세부 스타일 좌표값을 저장한다.
     *
     * @tags 스티커 블록 API
     * @name StickerBlocksControllerCreateStickerBlock
     * @summary 게시글 속 스티커 생성
     * @request POST:/stickerBlocks
     */
    stickerBlocksControllerCreateStickerBlock: (
      data: CreateStickerBlockDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/stickerBlocks`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  posts = {
    /**
     * @description 게시글을 임시등록한다. id를 입력하지 않으면 생성하고 있는 아이디를 치면 update하는 로직으로 바로 게시글 생성에 사용해도 되고, 수정용으로 사용해도 된다.
     *
     * @tags 게시글 API
     * @name PostsControllerUpdatePost
     * @summary 게시글 임시등록
     * @request POST:/posts/temp
     */
    postsControllerUpdatePost: (
      data: CreatePostInput,
      params: RequestParams = {},
    ) =>
      this.request<PublishPostDto, any>({
        path: `/posts/temp`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인된 유저의 임시작성 게시글을 조회한다.
     *
     * @tags 게시글 API
     * @name PostsControllerFetchTempPosts
     * @summary 임시작성 게시글 조회
     * @request GET:/posts/temp
     * @secure
     */
    postsControllerFetchTempPosts: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts/temp`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 게시글을 등록한다. id를 입력하지 않으면 생성하고 있는 아이디를 치면 update하는 로직으로 바로 게시글 생성에 사용해도 되고, 수정용으로 사용해도 된다.
     *
     * @tags 게시글 API
     * @name PostsControllerPublishPost
     * @summary 게시글 등록
     * @request POST:/posts
     */
    postsControllerPublishPost: (
      data: PublishPostInput,
      params: RequestParams = {},
    ) =>
      this.request<PublishPostDto, any>({
        path: `/posts`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Query를 통해 페이지네이션 가능. default) pageNo: 1, pageSize: 10
     *
     * @tags 게시글 API
     * @name PostsControllerFetchPosts
     * @summary 전체 게시글 조회 API
     * @request GET:/posts
     */
    postsControllerFetchPosts: (
      query?: {
        /** 요청할 페이지 번호 */
        pageNo?: number;
        /** 한 페이지 당 아이템 갯수 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagePostResponseDto, any>({
        path: `/posts`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 이미지를 서버에 업로드한다. url을 반환 받는다.
     *
     * @tags 게시글 API
     * @name PostsControllerCreatePrivateSticker
     * @summary 이미지 업로드
     * @request POST:/posts/image
     * @secure
     */
    postsControllerCreatePrivateSticker: (
      data: ImageUploadDto,
      params: RequestParams = {},
    ) =>
      this.request<ImageUploadResponseDto, any>({
        path: `/posts/image`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 친구의 게시글을 조회한다. Query를 통해 페이지네이션 가능. default) pageNo: 1, pageSize: 10
     *
     * @tags 게시글 API
     * @name PostsControllerFetchFriendsPosts
     * @summary 친구 게시글 조회
     * @request GET:/posts/friends
     * @secure
     */
    postsControllerFetchFriendsPosts: (
      query?: {
        /** 요청할 페이지 번호 */
        pageNo?: number;
        /** 한 페이지 당 아이템 갯수 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PagePostResponseDto, any>({
        path: `/posts/friends`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인 된 유저의 {id}에 해당하는 게시글을 논리삭제한다. 발행된 게시글에 사용을 권장
     *
     * @tags 게시글 API
     * @name PostsControllerSoftDelete
     * @summary 게시글 soft delete
     * @request DELETE:/posts/soft/{id}
     * @secure
     */
    postsControllerSoftDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts/soft/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 로그인 된 유저의 {id}에 해당하는 게시글을 물리삭제한다. 임시 저장된 게시글에 사용을 권장
     *
     * @tags 게시글 API
     * @name PostsControllerHardDelete
     * @summary 게시글 hard delete
     * @request DELETE:/posts/hard/{id}
     * @secure
     */
    postsControllerHardDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts/hard/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 본인 게시글 수정용으로 id에 해당하는 게시글에 조인된 스티커 블록들의 값과 게시글 세부 데이터를 모두 가져온다.
     *
     * @tags 게시글 API
     * @name PostsControllerFetchPost
     * @summary [수정용] 게시글 및 스티커 상세 데이터 fetch
     * @request GET:/posts/update/{id}
     */
    postsControllerFetchPost: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts/update/${id}`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description id에 해당하는 게시글과 댓글을 가져온다. 조회수를 올린다.
     *
     * @tags 게시글 API
     * @name PostsControllerFetchPostDetail
     * @summary 게시글 디테일 뷰 fetch
     * @request GET:/posts/detail/{id}
     */
    postsControllerFetchPostDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts/detail/${id}`,
        method: 'GET',
        ...params,
      }),
  };
  likes = {
    /**
     * @description 로그인 된 유저가 {id}인 게시글에 좋아요를 토글한다.
     *
     * @tags 좋아요 API
     * @name LikesControllerToggleLike
     * @summary 좋아요 토글하기
     * @request POST:/likes
     * @secure
     */
    likesControllerToggleLike: (
      data: ToggleLikeDto,
      params: RequestParams = {},
    ) =>
      this.request<ToggleLikeResponseDto, void>({
        path: `/likes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description {id}인 게시글에 좋아요를 누른 사람들을 확인한다.
     *
     * @tags 좋아요 API
     * @name LikesControllerFetchLikes
     * @summary 좋아요 누른 대상 조회하기
     * @request GET:/likes/{id}
     */
    likesControllerFetchLikes: (id: number, params: RequestParams = {}) =>
      this.request<FetchLikesResponseDto[], any>({
        path: `/likes/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  auth = {
    /**
     * @description [swagger 불가능, url 직접 이동] 카카오 서버에 로그인을 요청한다. 응답으로 도착한 kakaoId를 기반으로 jwt accessToken과 refreshToken을 클라이언트에게 쿠키로 전송한다
     *
     * @tags 인증 API
     * @name AuthControllerKakaoLogin
     * @summary 카카오 로그인
     * @request GET:/auth/kakao
     */
    authControllerKakaoLogin: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/auth/kakao`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description refreshToken을 기반으로 accessToken을 재발급한다.
     *
     * @tags 인증 API
     * @name AuthControllerRefresh
     * @summary accessToken refresh
     * @request GET:/auth/refresh
     * @secure
     */
    authControllerRefresh: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/auth/refresh`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  neighbors = {
    /**
     * @description 로그인된 유저가 follow_id를 팔로우한다.
     *
     * @tags 이웃 API
     * @name NeighborsControllerFollowUser
     * @summary 이웃 추가하기
     * @request POST:/neighbors/follow
     * @secure
     */
    neighborsControllerFollowUser: (
      data: FollowDto,
      params: RequestParams = {},
    ) =>
      this.request<FollowUserDto, void>({
        path: `/neighbors/follow`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인된 유저가 follow_id를 언팔로우 한다.
     *
     * @tags 이웃 API
     * @name NeighborsControllerUnfollowUser
     * @summary 이웃 삭제하기
     * @request POST:/neighbors/unfollow
     * @secure
     */
    neighborsControllerUnfollowUser: (
      data: FollowDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/neighbors/unfollow`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description id의 팔로워 목록을 조회한다.
     *
     * @tags 이웃 API
     * @name NeighborsControllerGetFollowers
     * @summary 팔로워 목록 조회
     * @request GET:/neighbors/followers/{id}
     */
    neighborsControllerGetFollowers: (id: number, params: RequestParams = {}) =>
      this.request<FromUserResponseDto[], any>({
        path: `/neighbors/followers/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description id의 팔로우 목록을 조회한다.
     *
     * @tags 이웃 API
     * @name NeighborsControllerGetFollows
     * @summary 팔로우 목록 조회
     * @request GET:/neighbors/follows/{id}
     */
    neighborsControllerGetFollows: (id: number, params: RequestParams = {}) =>
      this.request<ToUserResponseDto[], any>({
        path: `/neighbors/follows/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  postbg = {
    /**
     * No description
     *
     * @tags 내지 API
     * @name PostBackgroundsControllerUploadImage
     * @summary 내지 업로드
     * @request POST:/postbg
     */
    postBackgroundsControllerUploadImage: (
      data: ImageUploadDto,
      params: RequestParams = {},
    ) =>
      this.request<ImageUploadResponseDto, any>({
        path: `/postbg`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 내지 API
     * @name PostBackgroundsControllerFetchAll
     * @summary 내지 모두 불러오기
     * @request GET:/postbg
     */
    postBackgroundsControllerFetchAll: (params: RequestParams = {}) =>
      this.request<PostBackground[], any>({
        path: `/postbg`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 내지 API
     * @name PostBackgroundsControllerDelete
     * @summary 내지 삭제하기
     * @request DELETE:/postbg/{id}
     */
    postBackgroundsControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/postbg/${id}`,
        method: 'DELETE',
        ...params,
      }),
  };
  postcg = {
    /**
     * @description 로그인된 유저와 연결된 카테고리를 생성한다.
     *
     * @tags 카테고리 API
     * @name PostCategoriesControllerCreatePostCategory
     * @summary 카테고리 생성
     * @request POST:/postcg
     * @secure
     */
    postCategoriesControllerCreatePostCategory: (
      data: CreatePostCategoryDto,
      params: RequestParams = {},
    ) =>
      this.request<CreatePostCategoryResponseDto, any>({
        path: `/postcg`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인된 유저가 생성한 카테고리를 모두 불러온다
     *
     * @tags 카테고리 API
     * @name PostCategoriesControllerFetchPostCategories
     * @summary 유저의 모든 카테고리 불러오기
     * @request GET:/postcg
     * @secure
     */
    postCategoriesControllerFetchPostCategories: (params: RequestParams = {}) =>
      this.request<PostCategory[], any>({
        path: `/postcg`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 로그인된 유저의 카테고리 중 param:id와 일치하는 카테고리를 삭제한다
     *
     * @tags 카테고리 API
     * @name PostCategoriesControllerDeletePostCategory
     * @summary 유저의 지정 카테고리 삭제하기
     * @request DELETE:/postcg/{id}
     * @secure
     */
    postCategoriesControllerDeletePostCategory: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/postcg/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
}
