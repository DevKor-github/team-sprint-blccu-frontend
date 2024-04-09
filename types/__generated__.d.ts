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
