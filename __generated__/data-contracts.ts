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

export interface CreateAnouncementInput {
  /** 공지 제목 */
  title: string;
  /** 내용 */
  content: string;
}

export interface AnnouncementResponseDto {
  /** PK: A_I_ */
  id: number;
  /** 공지 제목 */
  title: string;
  /** 내용 */
  content: string;
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
   * 삭제된 날짜
   * @format date-time
   */
  date_deleted: string;
}

export interface PatchAnnouncementInput {
  /** 공지 제목 */
  title?: string;
  /** 내용 */
  content?: string;
}

export interface UserResponseDtoWithFollowing {
  /** 카카오 id */
  kakaoId: number;
  /** 유저 핸들러 */
  handle: string;
  /** 어드민 유저 여부 */
  isAdmin: boolean;
  /**
   * 팔로잉 수
   * @default 0
   */
  following_count?: number;
  /**
   * 팔로워 수
   * @default 0
   */
  follower_count?: number;
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
  /** 팔로잉 유무 */
  isFollowing: boolean;
}

export interface UserResponseDto {
  /** 카카오 id */
  kakaoId: number;
  /** 유저 핸들러 */
  handle: string;
  /** 어드민 유저 여부 */
  isAdmin: boolean;
  /**
   * 팔로잉 수
   * @default 0
   */
  following_count?: number;
  /**
   * 팔로워 수
   * @default 0
   */
  follower_count?: number;
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
   * [optional] 핸들러 변경
   * @example "optional"
   */
  handle?: string;
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

export interface DeleteUserInput {
  /** 피드백 내용 */
  content: string;
  /** 피드백 종류 */
  type:
    | 'TOO_MANY_ERRORS'
    | 'REJOIN_AFTER_DEACTIVATION'
    | 'OTHER_ISSUES'
    | 'GENERAL_FEEDBACK';
}

export interface CreateAgreementsInput {
  /** 약관의 종류 */
  agreementType:
    | 'PRIVACY_POLICY'
    | 'TERMS_OF_SERVICE'
    | 'MARKETING_CONSENT'
    | 'CUSTOM_AGREEMENT'
    | 'DESIGN_LICENCE';
  /** 약관 동의 유무 */
  isAgreed: boolean;
}

export interface FetchAgreementDto {
  /** PK: A_I_ */
  id: number;
  /** 약관에 동의한 유저 id */
  userKakaoId: number;
  /** 약관의 종류 */
  agreementType:
    | 'PRIVACY_POLICY'
    | 'TERMS_OF_SERVICE'
    | 'MARKETING_CONSENT'
    | 'CUSTOM_AGREEMENT'
    | 'DESIGN_LICENCE';
  /** 약관 동의 유무 */
  isAgreed: boolean;
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
   * 삭제된 날짜
   * @format date-time
   */
  date_deleted: string;
}

export interface PatchAgreementInput {
  /** 약관 동의 유무 */
  isAgreed: boolean;
}

export interface CreateFeedbackInput {
  /** 피드백 내용 */
  content: string;
}

export interface FetchFeedbackDto {
  /** PK: A_I_ */
  id: number;
  /** 피드백 내용 */
  content: string;
  /** 피드백 종류 */
  type:
    | 'TOO_MANY_ERRORS'
    | 'REJOIN_AFTER_DEACTIVATION'
    | 'OTHER_ISSUES'
    | 'GENERAL_FEEDBACK';
  /** 피드백 보낸 유저의 카카오 아이디 */
  userKakaoId: number;
  /**
   * 생성한 날짜
   * @format date-time
   */
  date_created: string;
  /**
   * 삭제한 날짜
   * @format date-time
   */
  date_deleted: string;
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

export interface UpdateStickerInput {
  /** 변경할 url */
  image_url?: string;
  /** 재사용 가능 여부 설정 */
  isReusable?: boolean;
}

export interface StickerCategory {
  /** PK: A_I_ */
  id: number;
  /** 카테고리 이름 */
  name: string;
}

export interface StickerCategoryMapper {
  /** 스티커 아이디 */
  stickerId: number;
  /** 스티커 카테고리 아이디 */
  stickerCategoryId: number;
}

export interface CreateStickerCategoryInput {
  /** 스티커 이름 */
  name: string;
}

export interface MapCategoryDto {
  /** 매핑 하고자 하는 스티커의 id */
  stickerId: number;
  /** 매핑 하고자 하는 카테고리의 id */
  stickerCategoryId: number;
}

export interface BulkMapCategoryDto {
  /** 매핑할 카테고리 및 스티커 배열 */
  maps: MapCategoryDto[];
}

export interface BulkInsertStickerInput {
  /** 스티커의 posX */
  posX: number;
  /** 스티커의 posY */
  posY: number;
  /** 스티커의 scale */
  scale: number;
  /** 스티커의 angle */
  angle: number;
  /** 스티커의 zindex */
  zindex: number;
  /** 스티커의 clientId */
  clientId: string;
  /** 스티커의 id */
  stickerId: number;
}

export interface CreateStickerBlocksInput {
  stickerBlocks: BulkInsertStickerInput[];
}

export interface CreateStickerBlocksResponseDto {
  /** 스티커의 posX */
  posX: number;
  /** 스티커의 posY */
  posY: number;
  /** 스티커의 scale */
  scale: number;
  /** 스티커의 angle */
  angle: number;
  /** 스티커의 zindex */
  zindex: number;
  /** 스티커의 clientId */
  clientId: string;
  /** 스티커의 id */
  stickerId: number;
  /** 게시글 아이디 */
  postsId: number;
  /** 스티커블록 아이디 */
  id: number;
}

export interface PublishPostInput {
  /** 연결된 카테고리 fk */
  postCategoryId: string;
  /** 연결된 내지 fk */
  postBackgroundId?: string | null;
  /** 제목(최대 100자) */
  title: string;
  /** 수정용 제목 */
  title_html: string;
  /** 댓글 허용 여부(boolean) */
  allow_comment: boolean;
  /** [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개 */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content: string;
  /** 게시글 설명(html 태그 제외) */
  main_description: string;
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
  /** 수정용 제목 */
  title_html: string;
  /** 임시저장(false), 발행(true) */
  isPublished: boolean;
  /** 좋아요 카운트 */
  like_count: number;
  /** 조회수 카운트 */
  view_count: number;
  /** 댓글수 카운트 */
  comment_count: number;
  /** 신고수 카운트 */
  report_count: number;
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
  /** 게시글 설명(html 태그 제외) */
  main_description: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
}

export interface CreatePostInput {
  /** 연결된 카테고리 fk */
  postCategoryId?: string;
  /** 연결된 내지 fk */
  postBackgroundId?: string;
  /** 제목(최대 100자) */
  title: string;
  /** 수정용 제목 */
  title_html: string;
  /** 댓글 허용 여부(boolean) */
  allow_comment?: boolean;
  /** [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개 */
  scope?: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content: string;
  /** 게시글 캡쳐 이미지 url */
  image_url?: string;
  /** 게시글 대표 이미지 url */
  main_image_url?: string;
}

export interface PatchPostInput {
  /** 연결된 카테고리 fk */
  postCategoryId?: string;
  /** 연결된 내지 fk */
  postBackgroundId?: string;
  /** 제목(최대 100자) */
  title?: string;
  /** 수정용 제목 */
  title_html?: string;
  /** 댓글 허용 여부(boolean) */
  allow_comment?: boolean;
  /** [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개 */
  scope?: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content?: string;
  /** 게시글 캡쳐 이미지 url */
  image_url?: string;
  /** 게시글 대표 이미지 url */
  main_image_url?: string;
}

export interface PostOnlyResponseDto {
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
  /** 수정용 제목 */
  title_html: string;
  /** 임시저장(false), 발행(true) */
  isPublished: boolean;
  /** 좋아요 카운트 */
  like_count: number;
  /** 조회수 카운트 */
  view_count: number;
  /** 댓글수 카운트 */
  comment_count: number;
  /** 신고수 카운트 */
  report_count: number;
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
  /** 게시글 설명(html 태그 제외) */
  main_description: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
}

export interface PostBackground {
  /** PK: uuid */
  id: string;
  /** 이미지가 저장된 url */
  image_url: string;
}

export interface UserPrimaryResponseDto {
  /** 카카오 id */
  kakaoId: number;
  /** 유저 핸들러 */
  handle: string;
  /** 유저 이름 */
  username: string;
  /** 유저 설명 */
  description: string;
  /** 프로필 이미지 url */
  profile_image: string;
}

export interface PostResponseDtoExceptCategory {
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
  /** 수정용 제목 */
  title_html: string;
  /** 임시저장(false), 발행(true) */
  isPublished: boolean;
  /** 좋아요 카운트 */
  like_count: number;
  /** 조회수 카운트 */
  view_count: number;
  /** 댓글수 카운트 */
  comment_count: number;
  /** 신고수 카운트 */
  report_count: number;
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
  /** 게시글 설명(html 태그 제외) */
  main_description: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
  /** 연결된 내지 */
  postBackground: PostBackground;
  /** 작성자의 정보 */
  user: UserPrimaryResponseDto;
}

export interface PostCategory {
  /** PK: uuid */
  id: string;
  /** 카테고리 이름 */
  name: string;
  /** 유저 아이디 */
  userKakaoId: number;
}

export interface PostResponseDto {
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
  /** 수정용 제목 */
  title_html: string;
  /** 임시저장(false), 발행(true) */
  isPublished: boolean;
  /** 좋아요 카운트 */
  like_count: number;
  /** 조회수 카운트 */
  view_count: number;
  /** 댓글수 카운트 */
  comment_count: number;
  /** 신고수 카운트 */
  report_count: number;
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
  /** 게시글 설명(html 태그 제외) */
  main_description: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
  /** 연결된 카테고리 */
  postCategory: PostCategory;
  /** 연결된 내지 */
  postBackground: PostBackground;
  /** 작성자의 정보 */
  user: UserPrimaryResponseDto;
}

export interface User {
  /** 카카오 id */
  kakaoId: number;
  /** 유저 핸들러 */
  handle: string;
  /** crypted refresh token */
  current_refresh_token: string;
  /** 어드민 유저 여부 */
  isAdmin: boolean;
  /**
   * 팔로잉 수
   * @default 0
   */
  following_count?: number;
  /**
   * 팔로워 수
   * @default 0
   */
  follower_count?: number;
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

export interface Posts {
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
  /** 수정용 제목 */
  title_html: string;
  /** 임시저장(false), 발행(true) */
  isPublished: boolean;
  /** 좋아요 카운트 */
  like_count: number;
  /** 조회수 카운트 */
  view_count: number;
  /** 댓글수 카운트 */
  comment_count: number;
  /** 신고수 카운트 */
  report_count: number;
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
  /** 게시글 설명(html 태그 제외) */
  main_description: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
  /** 연결된 카테고리 */
  postCategory: PostCategory;
  /** 연결된 내지 */
  postBackground: PostBackground;
  /** 작성자 */
  user: User;
}

export interface StickerBlock {
  /** PK: A_I_ */
  id: number;
  /** 참조하는 스티커의 아이디 */
  stickerId: number;
  /** 참조하는 스티커 */
  sticker: Sticker;
  /** 참조하는 포스트 아이디 */
  postsId: number;
  /** 참조하는 포스트 */
  posts: Posts;
  /** 스티커의 posX */
  posX: number;
  /** 스티커의 posY */
  posY: number;
  /** 스티커의 scale */
  scale: number;
  /** 스티커의 angle */
  angle: number;
  /** 스티커의 zindex */
  zindex: number;
  /** 스티커의 clientId */
  clientId: string;
}

export interface FetchPostForUpdateDto {
  /** 게시글 정보 */
  post: PostResponseDtoExceptCategory;
  /** 스티커 블록 배열 */
  stickerBlocks: StickerBlock[];
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

export interface CustomCursorPageMetaDto {
  /** 한번에 가져올 아이템 수 */
  take: number;
  /** 다음 페이지 존재 여부 */
  hasNextData: boolean;
  /** 커서 값 */
  customCursor: string;
}

export interface CursorPagePostResponseDto {
  /** 조회된 데이터 */
  data: PostResponseDto[];
  /** 페이지네이션 메타 데이터 */
  meta: CustomCursorPageMetaDto;
}

export interface FollowUserDto {
  /** PK: uuid */
  id: string;
  /** 이웃 추가를 받은 유저 */
  toUserKakaoId: number;
  /** 이웃 추가를 한 유저 */
  fromUserKakaoId: number;
}

export interface PickTypeClass {
  /** 유저 핸들러 */
  handle: string;
  /** 유저 이름 */
  username: string;
  /** 프로필 이미지 url */
  profile_image: string;
}

export interface FetchNotiResponse {
  /** PK: A_I_ */
  id: number;
  /** 알림을 생성한 유저 FK */
  userKakaoId: number;
  /** 알림을 받는 유저 FK */
  targetUserKakaoId: number;
  /** 알림의 유형 */
  type: 'COMMENT' | 'REPLY' | 'LIKE' | 'FOLLOW' | 'ANNOUNCEMENT' | 'REPORT';
  /**
   * 알림 체크 여부
   * @default false
   */
  is_checked: boolean;
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
  /** 알림이 발생한 게시글 id(nullable) */
  postId: number;
  user: PickTypeClass;
}

export interface CreateCommentInput {
  /** 댓글 내용 */
  content: string;
  /** [optional] 부모 댓글 id */
  parentId?: number;
}

export interface ChildrenComment {
  /** 댓글 id */
  id: number;
  /** 작성자 유저 아이디 */
  userKakaoId: number;
  /** 게시글 id */
  postsId: number;
  /** 내용 정보 */
  content: string;
  /** 신고 당한 횟수 */
  report_count: number;
  /** 루트 댓글 아이디 */
  parentId: number;
  /**
   * 생성 날짜
   * @format date-time
   */
  date_created: string;
  /**
   * 수정 날짜
   * @format date-time
   */
  date_updated: string;
  /**
   * 논리 삭제 칼럼
   * @format date-time
   */
  date_deleted: string | null;
  /** 작성자의 정보 */
  user: UserPrimaryResponseDto;
}

export interface FetchCommentsDto {
  /** 댓글 id */
  id: number;
  /** 작성자 유저 아이디 */
  userKakaoId: number;
  /** 게시글 id */
  postsId: number;
  /** 내용 정보 */
  content: string;
  /** 신고 당한 횟수 */
  report_count: number;
  /** 루트 댓글 아이디 */
  parentId: number;
  /**
   * 생성 날짜
   * @format date-time
   */
  date_created: string;
  /**
   * 수정 날짜
   * @format date-time
   */
  date_updated: string;
  /**
   * 논리 삭제 칼럼
   * @format date-time
   */
  date_deleted: string | null;
  /** 작성자의 정보 */
  user: UserPrimaryResponseDto;
  /** 자식 댓글 배열 */
  children: ChildrenComment[];
}

export interface PatchCommentDto {
  /** 내용 정보 */
  content: string;
}

export interface FetchCommentDto {
  /** 댓글 id */
  id: number;
  /** 작성자 유저 아이디 */
  userKakaoId: number;
  /** 게시글 id */
  postsId: number;
  /** 내용 정보 */
  content: string;
  /** 신고 당한 횟수 */
  report_count: number;
  /** 루트 댓글 아이디 */
  parentId: number;
  /**
   * 생성 날짜
   * @format date-time
   */
  date_created: string;
  /**
   * 수정 날짜
   * @format date-time
   */
  date_updated: string;
  /**
   * 논리 삭제 칼럼
   * @format date-time
   */
  date_deleted: string | null;
}

export interface OmitTypeClass {
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
  /** 수정용 제목 */
  title_html: string;
  /** 임시저장(false), 발행(true) */
  isPublished: boolean;
  /** 좋아요 카운트 */
  like_count: number;
  /** 조회수 카운트 */
  view_count: number;
  /** 댓글수 카운트 */
  comment_count: number;
  /** 신고수 카운트 */
  report_count: number;
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
  /** 게시글 설명(html 태그 제외) */
  main_description: string;
  /** 게시글 캡쳐 이미지 url */
  image_url: string;
  /** 게시글 대표 이미지 url */
  main_image_url: string;
}

export interface FetchLikeResponseDto {
  /** PK: uuid */
  id: string;
  /** 게시글 아이디 */
  postsId: number;
  posts: OmitTypeClass;
  userKakaoId: number;
}

export interface FetchPostCategoriesDto {
  postCount: number;
  categoryId: string;
  categoryName: string;
}

export interface FetchPostCategoryDto {
  /** PK: uuid */
  id: string;
  /** 카테고리 이름 */
  name: string;
  /** 유저 아이디 */
  userKakaoId: number;
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
  userKakaoId: number;
  /** 유저의 picktype */
  user: PickTypeClass;
}

export interface PatchPostCategoryDto {
  /** 카테고리 이름 */
  name: string;
}

export interface CreateReportInput {
  /** 신고 내용 */
  content: string;
  /** 신고 유형 */
  type: 'SPAM' | 'FRAUD' | 'SEXUAL' | 'ETC';
  /** 신고가 발생한 게시물의 url */
  url: string;
}

export interface FetchReportResponse {
  /** PK: A_I_ */
  id: number;
  /** 신고 내용 */
  content: string;
  /**
   * 생성된 날짜
   * @format date-time
   */
  date_created: string;
  /** 신고한 유저 id */
  userKakaoId: number;
  /** 신고 유형 */
  type: 'SPAM' | 'FRAUD' | 'SEXUAL' | 'ETC';
  /** 신고 대상 */
  target: 'POSTS' | 'COMMENTS';
  /** 신고가 발생한 게시물의 url */
  url: string;
  /** 신고당한 게시글 id */
  postId: number;
  /** 신고당한 댓글 id */
  commentId: number;
}

export type AppControllerHealthCheckData = any;

export type PrometheusControllerIndexData = any;

export type AnnouncementsControllerCreateAnmtData = AnnouncementResponseDto;

export type AnnouncementsControllerFetchAnmtsData = AnnouncementResponseDto[];

export type AnnouncementsControllerPatchAnmtData = AnnouncementResponseDto[];

export type AnnouncementsControllerRemoveAnmtData = AnnouncementResponseDto;

export type UsersControllerFindAllUsersData = any;

export type UsersControllerFindUsersByNameData = UserResponseDtoWithFollowing[];

export type UsersControllerFindUserByKakaoIdData = UserResponseDto;

export type UsersControllerFindUserByHandleData = UserResponseDto;

export type UsersControllerFetchUserData = UserResponseDto;

export type UsersControllerPatchUserData = UserResponseDto;

export type UsersControllerDeleteUserData = any;

export type UsersControllerUploadProfileImageData = ImageUploadResponseDto;

export type UsersControllerUploadBackgroundImageData = ImageUploadResponseDto;

export interface AgreementsControllerFetchContractParams {
  /** 약관의 종류 */
  agreementType:
    | 'PRIVACY_POLICY'
    | 'TERMS_OF_SERVICE'
    | 'MARKETING_CONSENT'
    | 'CUSTOM_AGREEMENT'
    | 'DESIGN_LICENCE';
}

export type AgreementsControllerFetchContractData = any;

export type AgreementsControllerAgreeData = FetchAgreementDto;

export type AgreementsControllerFetchAgreementsData = FetchAgreementDto[];

export type AgreementsControllerFetchAgreementAdminData = FetchAgreementDto[];

export type AgreementsControllerPatchAgreementData = FetchAgreementDto;

export type FeedbacksControllerCreateFeedbackData = FetchFeedbackDto;

export type FeedbacksControllerGetFeedbacksData = FetchFeedbackDto[];

export type StickersControllerCreatePrivateStickerData = Sticker;

export type StickersControllerFetchPrivateStickersData = Sticker[];

export type StickersControllerPatchStickerData = Sticker;

export type StickersControllerDeleteStickerData = any;

export type StickersControllerFetchPublicStickersData = Sticker[];

export type StickersControllerCreatePublicStickerData = Sticker;

export type StickerCategoriesControllerFetchCategoriesData = StickerCategory[];

export type StickerCategoriesControllerFetchStickersByCategoryNameData =
  StickerCategoryMapper[];

export type StickerCategoriesControllerCreateCategoryData = StickerCategory;

export type StickerCategoriesControllerMapCategoryData =
  StickerCategoryMapper[];

export type StickerBlocksControllerCreateStickerBlocksData =
  CreateStickerBlocksResponseDto[];

export type PostsControllerPublishPostData = PublishPostDto;

export type PostsControllerSoftDeleteData = any;

export type PostsControllerPatchPostData = PostOnlyResponseDto;

export type PostsControllerUpdatePostData = PublishPostDto;

export type PostsControllerFetchTempPostsData = PostResponseDtoExceptCategory[];

export type PostsControllerCreatePrivateStickerData = ImageUploadResponseDto;

export type PostsControllerFetchPostDetailData = PostResponseDto;

export type PostsControllerFetchPostData = FetchPostForUpdateDto;

export interface PostsControllerFetchPostsParams {
  /** 요청할 페이지 번호 */
  pageNo?: number;
  /** 한 페이지 당 아이템 갯수 */
  pageSize?: number;
  /** 페이지 정렬 옵션(default = TIME) */
  order?: 'LIKE' | 'VIEW' | 'COMMENT' | 'DATE';
  /** 페이지 검색 옵션(default = TITLE) */
  filter?: 'TITLE' | 'CONTENT' | 'USER';
  /** 검색할 내용 */
  search?: string;
}

export type PostsControllerFetchPostsData = PagePostResponseDto;

export interface PostsControllerFetchFriendsPostsParams {
  /** 요청할 페이지 번호 */
  pageNo?: number;
  /** 한 페이지 당 아이템 갯수 */
  pageSize?: number;
  /** 페이지 정렬 옵션(default = TIME) */
  order?: 'LIKE' | 'VIEW' | 'COMMENT' | 'DATE';
  /** 페이지 검색 옵션(default = TITLE) */
  filter?: 'TITLE' | 'CONTENT' | 'USER';
  /** 검색할 내용 */
  search?: string;
}

export type PostsControllerFetchFriendsPostsData = PagePostResponseDto;

export interface PostsControllerFetchCursorParams {
  /**
   * 정렬 옵션
   * @default "ASC"
   */
  sort?: 'ASC' | 'DESC';
  /** 페이지네이션 단위 */
  take?: number;
  /** 커서 */
  cursor?: string;
  /**
   * 정렬 옵션
   * @default "DATE"
   */
  order?: 'LIKE' | 'VIEW' | 'COMMENT' | 'DATE';
  /**
   * 특정 기간 이후 게시글 조회, null 일 경우 전체 조회
   * @default null
   */
  date_created?: 'WEEK' | 'MONTH' | 'YEAR';
}

export type PostsControllerFetchCursorData = CursorPagePostResponseDto;

export interface PostsControllerFetchFriendsCursorParams {
  /**
   * 정렬 옵션
   * @default "ASC"
   */
  sort?: 'ASC' | 'DESC';
  /** 페이지네이션 단위 */
  take?: number;
  /** 커서 */
  cursor?: string;
  /**
   * 정렬 옵션
   * @default "DATE"
   */
  order?: 'LIKE' | 'VIEW' | 'COMMENT' | 'DATE';
  /**
   * 특정 기간 이후 게시글 조회, null 일 경우 전체 조회
   * @default null
   */
  date_created?: 'WEEK' | 'MONTH' | 'YEAR';
}

export type PostsControllerFetchFriendsCursorData = CursorPagePostResponseDto;

export interface PostsControllerFetchUserPostsParams {
  /**
   * 정렬 옵션
   * @default "ASC"
   */
  sort?: 'ASC' | 'DESC';
  /** 페이지네이션 단위 */
  take?: number;
  /** 커서 */
  cursor?: string;
  /**
   * 정렬 옵션
   * @default "DATE"
   */
  order?: 'LIKE' | 'VIEW' | 'COMMENT' | 'DATE';
  /**
   * 특정 기간 이후 게시글 조회, null 일 경우 전체 조회
   * @default null
   */
  date_created?: 'WEEK' | 'MONTH' | 'YEAR';
  /** 필터링할 카테고리 아이디 */
  categoryId?: string;
  userId: number;
}

export type PostsControllerFetchUserPostsData = CursorPagePostResponseDto;

export type FollowsControllerFollowUserData = FollowUserDto;

export type FollowsControllerUnfollowUserData = any;

export type FollowsControllerCheckFollowerData = boolean;

export type FollowsControllerCheckFollowingData = boolean;

export type FollowsControllerGetFollowersData = UserResponseDtoWithFollowing[];

export type FollowsControllerGetFollowsData = UserResponseDtoWithFollowing[];

export type NotificationsControllerConnectUserData = any;

export interface NotificationsControllerFetchNotiParams {
  /**
   * 확인 된 알림 조회 여부(true: 조회, false: 스킵)
   * @default true
   */
  is_checked: boolean;
  /**
   * 특정 기간 이후 알림 조회, null 일 경우 전체 조회
   * @default null
   */
  date_created?: 'WEEK' | 'MONTH' | 'YEAR';
}

export type NotificationsControllerFetchNotiData = FetchNotiResponse[];

export type NotificationsControllerReadNotiData = FetchNotiResponse;

export type CommentsControllerInsertCommentData = ChildrenComment;

export type CommentsControllerFetchCommentsData = FetchCommentsDto[];

export type CommentsControllerPatchCommentData = FetchCommentDto;

export type CommentsControllerDeleteCommentData = any;

export type LikesControllerLikeData = FetchLikeResponseDto;

export type LikesControllerDeleteLikeData = any;

export type LikesControllerFetchIfLikedData = boolean;

export type LikesControllerFetchLikesData = UserResponseDtoWithFollowing[];

export type PostCategoriesControllerFetchPostCategoriesData =
  FetchPostCategoriesDto[];

export type PostCategoriesControllerFetchMyCategoryData = FetchPostCategoryDto;

export type PostCategoriesControllerCreatePostCategoryData =
  CreatePostCategoryResponseDto;

export type PostCategoriesControllerPatchCategoryData = FetchPostCategoryDto;

export type PostCategoriesControllerDeletePostCategoryData = any;

export type AuthControllerRefreshData = any;

export type AuthControllerLogoutData = any;

export type PostBackgroundsControllerUploadImageData = ImageUploadResponseDto;

export type PostBackgroundsControllerFetchAllData = PostBackground[];

export type PostBackgroundsControllerDeleteData = any;

export type ReportsControllerReportPostData = FetchReportResponse;

export type ReportsControllerReportCommentData = FetchReportResponse;

export type ReportsControllerFetchAllData = FetchReportResponse[];
