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

export interface AnnouncementCreateRequestDto {
  /** 공지 제목 */
  title: string;
  /** 내용 */
  content: string;
}

export interface AnnouncementDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 공지 제목 */
  title: string;
  /** 내용 */
  content: string;
}

export interface AnnouncementPatchRequestDto {
  /** 공지 제목 */
  title?: string;
  /** 내용 */
  content?: string;
}

export interface UserFollowingResponseDto {
  /** PK: id */
  id: number;
  /** 유저 핸들러 */
  handle: string;
  /**
   * 유저 이름
   * @uniqueItems true
   */
  username: string;
  /**
   * 프로필 이미지 url
   * @default ""
   */
  profileImage: string;
  /** 팔로잉 유무 */
  isFollowing: boolean;
}

export interface UserDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: id */
  id: number;
  /** 유저 핸들러 */
  handle: string;
  /** 어드민 유저 여부 */
  isAdmin: boolean;
  /**
   * 팔로잉 수
   * @default 0
   */
  followingCount?: number;
  /**
   * 팔로워 수
   * @default 0
   */
  followerCount?: number;
  /**
   * 유저 이름
   * @uniqueItems true
   */
  username: string;
  /**
   * 유저 설명
   * @default ""
   */
  description: string;
  /**
   * 프로필 이미지 url
   * @default ""
   */
  profileImage: string;
  /**
   * 프로필 배경 이미지 url
   * @default ""
   */
  backgroundImage: string;
}

export interface UserPatchRequestDto {
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

export interface ImageUploadRequestDto {
  /**
   *  multipart/form-data 이미지
   * @format binary
   */
  file: File;
}

export interface ImageUploadResponseDto {
  /** 이미지가 저장된 url */
  imageUrl: string;
}

export interface UserDeleteRequestDto {
  /** 피드백 내용 */
  content: string;
  /** 피드백 종류 */
  type:
    | 'TOO_MANY_ERRORS'
    | 'REJOIN_AFTER_DEACTIVATION'
    | 'OTHER_ISSUES'
    | 'GENERAL_FEEDBACK';
}

export interface AgreementCreateRequestDto {
  /** 약관의 종류 */
  agreementType:
    | 'PRIVACY_POLICY'
    | 'TERMS_OF_SERVICE'
    | 'MARKETING_CONSENT'
    | 'CUSTOM_AGREEMENT'
    | 'DESIGN_LICENCE';
  /**
   * 약관 동의 유무
   * @default false
   */
  isAgreed: boolean;
}

export interface AgreementDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 약관에 동의한 유저 id */
  userId: number;
  /** 약관의 종류 */
  agreementType:
    | 'PRIVACY_POLICY'
    | 'TERMS_OF_SERVICE'
    | 'MARKETING_CONSENT'
    | 'CUSTOM_AGREEMENT'
    | 'DESIGN_LICENCE';
  /**
   * 약관 동의 유무
   * @default false
   */
  isAgreed: boolean;
}

export interface AgreementPatchRequestDto {
  /**
   * 약관 동의 유무
   * @default false
   */
  isAgreed: boolean;
}

export interface FeedbackCreateRequestDto {
  /** 피드백 내용 */
  content: string;
}

export interface FeedbackDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 피드백 내용 */
  content: string;
  /** 피드백 보낸 유저의 카카오 아이디 */
  userId: number;
  /** 피드백 종류 */
  type:
    | 'TOO_MANY_ERRORS'
    | 'REJOIN_AFTER_DEACTIVATION'
    | 'OTHER_ISSUES'
    | 'GENERAL_FEEDBACK';
}

export interface StickerDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I */
  id: number;
  /** 제작한 유저 fk */
  userId: number;
  /** 스티커 이미지 주소 */
  imageUrl: string;
  /**
   * 블꾸 기본 제공 스티커 유무
   * @default false
   */
  isDefault: boolean;
  /**
   * 재사용 가능 유무
   * @default false
   */
  isReusable: boolean;
}

export interface StickerPatchRequestDto {
  /** 변경할 url */
  imageUrl?: string;
  /** 재사용 가능 여부 설정 */
  isReusable?: boolean;
}

export interface StickerCategoryDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 카테고리 이름 */
  name: string;
}

export interface StickersCategoryFetchStickersResponseDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** 스티커 아이디 */
  stickerId: number;
  /** 스티커 카테고리 아이디 */
  stickerCategoryId: number;
  sticker: StickerDto;
}

export interface StickerCategoryCreateRequestDto {
  /** 카테고리 이름 */
  name: string;
}

export interface StickerCategoryMapperCreateRequestDto {
  /** 스티커 아이디 */
  stickerId: number;
  /** 스티커 카테고리 아이디 */
  stickerCategoryId: number;
}

export interface StickerCategoriesMapDto {
  /** 매핑할 카테고리 및 스티커 배열 */
  maps: StickerCategoryMapperCreateRequestDto[];
}

export interface StickerCategoryMapperDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** 스티커 아이디 */
  stickerId: number;
  /** 스티커 카테고리 아이디 */
  stickerCategoryId: number;
}

export interface StickerBlocksCreateDto {
  /** 참조하는 스티커의 아이디 */
  stickerId: number;
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

export interface StickerBlocksCreateRequestDto {
  stickerBlocks: StickerBlocksCreateDto[];
}

export interface StickerBlockDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 참조하는 스티커의 아이디 */
  stickerId: number;
  /** 참조하는 포스트 아이디 */
  articleId: number;
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

export interface ArticleCreateRequestDto {
  /** 연결된 카테고리 fk */
  articleCategoryId: number | null;
  /** 연결된 내지 fk */
  articleBackgroundId: number | null;
  /**
   * 제목(최대 100자)
   * @default ""
   */
  title: string;
  /**
   * html 적용된 제목
   * @default ""
   */
  htmlTitle: string;
  /**
   * 댓글 허용 여부(boolean)
   * @default true
   */
  allowComment: boolean;
  /**
   * [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개
   * @default "PUBLIC"
   */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content: string | null;
  /**
   * 게시글 설명(html 태그 제외)
   * @default ""
   */
  mainDescription: string;
  /** 게시글 캡쳐 이미지 url */
  imageUrl: string;
  stickerBlocks: StickerBlocksCreateDto[];
  /** 게시글 대표 이미지 url */
  mainImageUrl?: string | null;
}

export interface ArticleDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** 게시글의 고유 아이디 */
  id: number;
  /** 연결된 카테고리 fk */
  articleCategoryId: number | null;
  /** 연결된 내지 fk */
  articleBackgroundId: number | null;
  /** 작성한 유저 fk */
  userId: number;
  /**
   * 제목(최대 100자)
   * @default ""
   */
  title: string;
  /**
   * html 적용된 제목
   * @default ""
   */
  htmlTitle: string;
  /**
   * 임시저장(false), 발행(true)
   * @default false
   */
  isPublished: boolean;
  /**
   * 좋아요 카운트
   * @default 0
   */
  likeCount: number;
  /**
   * 조회수 카운트
   * @default 0
   */
  viewCount: number;
  /**
   * 댓글수 카운트
   * @default 0
   */
  commentCount: number;
  /**
   * 신고수 카운트
   * @default 0
   */
  reportCount: number;
  /**
   * 댓글 허용 여부(boolean)
   * @default true
   */
  allowComment: boolean;
  /**
   * [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개
   * @default "PUBLIC"
   */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content: string | null;
  /**
   * 게시글 설명(html 태그 제외)
   * @default ""
   */
  mainDescription: string;
  /** 게시글 캡쳐 이미지 url */
  imageUrl: string;
  /** 게시글 대표 이미지 url */
  mainImageUrl: string;
}

export interface ArticleCreateResponseDto {
  articleData: ArticleDto;
  stickerBlockData: StickerBlockDto[];
}

export interface ArticleCreateDraftRequestDto {
  /** 연결된 카테고리 fk */
  articleCategoryId?: number | null;
  /** 연결된 내지 fk */
  articleBackgroundId?: number | null;
  /**
   * 제목(최대 100자)
   * @default ""
   */
  title?: string;
  /**
   * html 적용된 제목
   * @default ""
   */
  htmlTitle?: string;
  /**
   * 댓글 허용 여부(boolean)
   * @default true
   */
  allowComment?: boolean;
  /**
   * [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개
   * @default "PUBLIC"
   */
  scope?: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content?: string | null;
  /**
   * 게시글 설명(html 태그 제외)
   * @default ""
   */
  mainDescription?: string;
  /** 게시글 캡쳐 이미지 url */
  imageUrl?: string;
  stickerBlocks?: StickerBlocksCreateDto[];
  /** 게시글 대표 이미지 url */
  mainImageUrl?: string | null;
}

export interface UserPrimaryResponseDto {
  /** PK: id */
  id: number;
  /** 유저 핸들러 */
  handle: string;
  /**
   * 유저 이름
   * @uniqueItems true
   */
  username: string;
  /**
   * 프로필 이미지 url
   * @default ""
   */
  profileImage: string;
}

export interface ArticleCategoryDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 카테고리 이름 */
  name: string;
  /** 유저 아이디 */
  userId: number;
}

export interface ArticleBackgroundDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 이미지가 저장된 url */
  imageUrl: string;
}

export interface ArticleDetailResponseDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** 게시글의 고유 아이디 */
  id: number;
  /** 연결된 카테고리 fk */
  articleCategoryId: number | null;
  /** 연결된 내지 fk */
  articleBackgroundId: number | null;
  /** 작성한 유저 fk */
  userId: number;
  /**
   * 제목(최대 100자)
   * @default ""
   */
  title: string;
  /**
   * html 적용된 제목
   * @default ""
   */
  htmlTitle: string;
  /**
   * 임시저장(false), 발행(true)
   * @default false
   */
  isPublished: boolean;
  /**
   * 좋아요 카운트
   * @default 0
   */
  likeCount: number;
  /**
   * 조회수 카운트
   * @default 0
   */
  viewCount: number;
  /**
   * 댓글수 카운트
   * @default 0
   */
  commentCount: number;
  /**
   * 신고수 카운트
   * @default 0
   */
  reportCount: number;
  /**
   * 댓글 허용 여부(boolean)
   * @default true
   */
  allowComment: boolean;
  /**
   * [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개
   * @default "PUBLIC"
   */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content: string | null;
  /**
   * 게시글 설명(html 태그 제외)
   * @default ""
   */
  mainDescription: string;
  /** 게시글 캡쳐 이미지 url */
  imageUrl: string;
  /** 게시글 대표 이미지 url */
  mainImageUrl: string;
  /** 작성자의 정보 */
  user: UserPrimaryResponseDto;
  /** 카테고리 정보 */
  articleCategory: ArticleCategoryDto;
  /** 배경 정보 */
  articleBackground: ArticleBackgroundDto;
}

export interface ArticleDetailForUpdateResponseDto {
  article: ArticleDetailResponseDto;
  stickerBlocks: StickerBlockDto[];
}

export interface ArticleWithUserDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** 게시글의 고유 아이디 */
  id: number;
  /** 연결된 카테고리 fk */
  articleCategoryId: number | null;
  /** 연결된 내지 fk */
  articleBackgroundId: number | null;
  /** 작성한 유저 fk */
  userId: number;
  /**
   * 제목(최대 100자)
   * @default ""
   */
  title: string;
  /**
   * html 적용된 제목
   * @default ""
   */
  htmlTitle: string;
  /**
   * 임시저장(false), 발행(true)
   * @default false
   */
  isPublished: boolean;
  /**
   * 좋아요 카운트
   * @default 0
   */
  likeCount: number;
  /**
   * 조회수 카운트
   * @default 0
   */
  viewCount: number;
  /**
   * 댓글수 카운트
   * @default 0
   */
  commentCount: number;
  /**
   * 신고수 카운트
   * @default 0
   */
  reportCount: number;
  /**
   * 댓글 허용 여부(boolean)
   * @default true
   */
  allowComment: boolean;
  /**
   * [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개
   * @default "PUBLIC"
   */
  scope: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content: string | null;
  /**
   * 게시글 설명(html 태그 제외)
   * @default ""
   */
  mainDescription: string;
  /** 게시글 캡쳐 이미지 url */
  imageUrl: string;
  /** 게시글 대표 이미지 url */
  mainImageUrl: string;
  /** 작성자의 정보 */
  user: UserPrimaryResponseDto;
}

export interface CustomCursorPageMetaDto {
  /** 한번에 가져올 아이템 수 */
  take: number;
  /** 다음 페이지 존재 여부 */
  hasNextData: boolean;
  /** 커서 값 */
  customCursor: string;
}

export interface ArticlesGetResponseDto {
  /** 조회된 데이터 */
  data: ArticleWithUserDto[];
  /** 페이지네이션 메타 데이터 */
  meta: CustomCursorPageMetaDto;
}

export interface ArticlePatchRequestDto {
  /** 연결된 카테고리 fk */
  articleCategoryId?: number | null;
  /** 연결된 내지 fk */
  articleBackgroundId?: number | null;
  /**
   * 제목(최대 100자)
   * @default ""
   */
  title?: string;
  /**
   * html 적용된 제목
   * @default ""
   */
  htmlTitle?: string;
  /**
   * 댓글 허용 여부(boolean)
   * @default true
   */
  allowComment?: boolean;
  /**
   * [공개 설정] PUBLIC: 전체공개, PROTECTED: 친구공개, PRIVATE: 비공개
   * @default "PUBLIC"
   */
  scope?: 'PUBLIC' | 'PROTECTED' | 'PRIVATE';
  /** 게시글 내용 */
  content?: string | null;
  /**
   * 게시글 설명(html 태그 제외)
   * @default ""
   */
  mainDescription?: string;
  /** 게시글 캡쳐 이미지 url */
  imageUrl?: string;
  /** 게시글 대표 이미지 url */
  mainImageUrl?: string | null;
}

export interface ArticleDeleteRequestDto {
  /** 물리 삭제 여부(nullable) */
  isHardDelete?: boolean | null;
}

export interface FollowDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: string;
  /** 이웃 추가를 받은 유저 */
  toUserId: number;
  /** 이웃 추가를 한 유저 */
  fromUserId: number;
}

export interface PickTypeClass {
  /** 유저 핸들러 */
  handle: string;
  /**
   * 유저 이름
   * @uniqueItems true
   */
  username: string;
  /**
   * 프로필 이미지 url
   * @default ""
   */
  profileImage: string;
}

export interface NotificationsGetResponseDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 알림을 생성한 유저 FK */
  userId: number;
  /** 알림을 받는 유저 FK */
  targetUserId: number;
  /** 알림의 유형 */
  type: 'COMMENT' | 'REPLY' | 'LIKE' | 'FOLLOW' | 'ANNOUNCEMENT' | 'REPORT';
  /**
   * 알림 체크 여부
   * @default false
   */
  isChecked: boolean;
  /** 알림이 발생한 게시글 id(nullable) */
  articleId: number;
  user: PickTypeClass;
}

export interface ArticleCategoriesResponseDto {
  articleCount: number;
  categoryId: number;
  categoryName: string;
}

export interface ArticleCategoryCreateRequestDto {
  /** 카테고리 이름 */
  name: string;
}

export interface ArticleCategoryPatchRequestDto {
  /** 카테고리 이름 */
  name: string;
}

export interface CommentCreateRequestDto {
  /**
   * 내용 정보
   * @maxLength 1500
   */
  content: string;
  /** [optional] 부모 댓글 id */
  parentId?: number;
}

export interface CommentChildrenDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** 댓글 id */
  id: number;
  /** 작성자 유저 아이디 */
  userId: number;
  /** 게시글 id */
  articleId: number;
  /**
   * 내용 정보
   * @maxLength 1500
   */
  content: string;
  /**
   * 신고 당한 횟수
   * @default 0
   */
  reportCount: number;
  /** 루트 댓글 아이디 */
  parentId: number;
  /** 작성자의 정보 */
  user: UserPrimaryResponseDto;
}

export interface CommentsGetResponseDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** 댓글 id */
  id: number;
  /** 작성자 유저 아이디 */
  userId: number;
  /** 게시글 id */
  articleId: number;
  /**
   * 내용 정보
   * @maxLength 1500
   */
  content: string;
  /**
   * 신고 당한 횟수
   * @default 0
   */
  reportCount: number;
  /** 루트 댓글 아이디 */
  parentId: number;
  /** 작성자의 정보 */
  user: UserPrimaryResponseDto;
  /** 자식 댓글 배열 */
  children: CommentChildrenDto[];
}

export interface CommentPatchRequestDto {
  /**
   * 내용 정보
   * @maxLength 1500
   */
  content: string;
}

export interface CommentDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** 댓글 id */
  id: number;
  /** 작성자 유저 아이디 */
  userId: number;
  /** 게시글 id */
  articleId: number;
  /**
   * 내용 정보
   * @maxLength 1500
   */
  content: string;
  /**
   * 신고 당한 횟수
   * @default 0
   */
  reportCount: number;
  /** 루트 댓글 아이디 */
  parentId: number;
}

export interface LikesGetResponseDto {
  /** PK: number */
  id: number;
  /** 유저 아이디 */
  userId: number;
  /** 게시글 아이디 */
  articleId: number;
}

export interface ReportCreateRequestDto {
  /** 신고 내용 */
  content: string;
  /** 신고 유형 */
  type: 'SPAM' | 'FRAUD' | 'SEXUAL' | 'ETC';
}

export interface ReportDto {
  /**
   * 생성된 날짜
   * @format date-time
   */
  dateCreated: string;
  /**
   * 수정된 날짜
   * @format date-time
   */
  dateUpdated: string;
  /**
   * 삭제된 날짜
   * @format date-time
   */
  dateDeleted: string;
  /** PK: A_I_ */
  id: number;
  /** 신고 내용 */
  content: string;
  /** 신고한 유저 id */
  userId: number;
  /** 신고당한 유저 id */
  targetUserId: number;
  /** 신고 유형 */
  type: 'SPAM' | 'FRAUD' | 'SEXUAL' | 'ETC';
  /** 신고 대상 */
  target: 'ARTICLES' | 'COMMENTS';
  /** 신고당한 게시글 id */
  articleId: number;
  /** 신고당한 댓글 id */
  commentId: number;
}

export type AppControllerHealthCheckData = any;

export type PrometheusControllerIndexData = any;

export type AnnouncementsControllerCreateAnmtData = AnnouncementDto;

export type AnnouncementsControllerFetchAnmtsData = AnnouncementDto[];

export type AnnouncementsControllerPatchAnmtData = AnnouncementDto;

export type AnnouncementsControllerRemoveAnmtData = AnnouncementDto;

export type UsersReadControllerGetUsersByNameData = UserFollowingResponseDto[];

export type UsersReadControllerGetUserByIdData = UserDto;

export type UsersReadControllerGetUserByHandleData = UserDto;

export type UsersReadControllerGetMyProfileData = UserDto;

export type UsersUpdateControllerPatchUserData = UserDto;

export type UsersDeleteControllerDeleteUserData = any;

export type UsersUpdateControllerPostProfileImageData = ImageUploadResponseDto;

export type UsersUpdateControllerUploadBackgroundImageData =
  ImageUploadResponseDto;

export interface AgreementsControllerGetContractParams {
  /** 약관의 종류 */
  agreementType:
    | 'PRIVACY_POLICY'
    | 'TERMS_OF_SERVICE'
    | 'MARKETING_CONSENT'
    | 'CUSTOM_AGREEMENT'
    | 'DESIGN_LICENCE';
}

export type AgreementsControllerGetContractData = any;

export type AgreementsControllerAgreeData = AgreementDto;

export type AgreementsControllerFetchAgreementsData = AgreementDto[];

export type AgreementsControllerFetchAgreementAdminData = AgreementDto[];

export type AgreementsControllerPatchAgreementData = AgreementDto;

export type FeedbacksControllerCreateFeedbackData = FeedbackDto;

export type FeedbacksControllerGetFeedbacksData = FeedbackDto[];

export type StickersControllerCreatePrivateStickerData = StickerDto;

export type StickersControllerFetchPrivateStickersData = StickerDto[];

export type StickersControllerPatchStickerData = StickerDto;

export type StickersControllerDeleteStickerData = any;

export type StickersControllerFetchPublicStickersData = StickerDto[];

export type StickersControllerCreatePublicStickerData = StickerDto;

export type StickerCategoriesControllerFetchCategoriesData =
  StickerCategoryDto[];

export type StickerCategoriesControllerFetchStickersByCategoryNameData =
  StickersCategoryFetchStickersResponseDto[];

export type StickerCategoriesControllerCreateCategoryData = StickerCategoryDto;

export type StickerCategoriesControllerMapCategoryData =
  StickerCategoryMapperDto[];

export type StickerBlocksControllerCreateStickerBlocksData = StickerBlockDto[];

export type ArticlesCreateControllerPublishArticleData =
  ArticleCreateResponseDto;

export type ArticlesCreateControllerCreateDraftData = ArticleCreateResponseDto;

export type ArticlesReadControllerFetchTempArticlesData = ArticleDto[];

export type ArticlesCreateControllerCreatePrivateStickerData =
  ImageUploadResponseDto;

export type ArticlesReadControllerFetchArticleDetailData =
  ArticleDetailResponseDto;

export type ArticlesReadControllerFetchArticleData =
  ArticleDetailForUpdateResponseDto;

export interface ArticlesReadControllerFetchCursorParams {
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
  dateCreated?: 'WEEK' | 'MONTH' | 'YEAR';
}

export type ArticlesReadControllerFetchCursorData = ArticlesGetResponseDto;

export interface ArticlesReadControllerFetchFriendsCursorParams {
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
  dateCreated?: 'WEEK' | 'MONTH' | 'YEAR';
}

export type ArticlesReadControllerFetchFriendsCursorData =
  ArticlesGetResponseDto;

export interface ArticlesReadControllerFetchUserArticlesParams {
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
  dateCreated?: 'WEEK' | 'MONTH' | 'YEAR';
  /** 필터링할 카테고리 아이디 */
  categoryId?: number;
  userId: number;
}

export type ArticlesReadControllerFetchUserArticlesData =
  ArticlesGetResponseDto;

export type ArticlesUpdateControllerPatchArticleData = ArticleDto;

export type ArticlesDeleteControllerSoftDeleteData = any;

export type FollowsControllerFollowUserData = FollowDto;

export type FollowsControllerUnfollowUserData = any;

export type FollowsControllerCheckFollowerData = boolean;

export type FollowsControllerCheckFollowingData = boolean;

export type FollowsControllerGetFollowersData = UserFollowingResponseDto[];

export type FollowsControllerGetFollowsData = UserFollowingResponseDto[];

export type NotificationsControllerConnectUserData = any;

export interface NotificationsControllerGetNotificationsParams {
  /**
   * 확인 된 알림 조회 여부(true: 조회, false: 스킵)
   * @default true
   */
  isChecked: boolean;
  /**
   * 특정 기간 이후 알림 조회, null 일 경우 전체 조회
   * @default null
   */
  dateCreated?: 'WEEK' | 'MONTH' | 'YEAR';
}

export type NotificationsControllerGetNotificationsData =
  NotificationsGetResponseDto[];

export type NotificationsControllerReadNotificationData =
  NotificationsGetResponseDto;

export type ArticleCategoriesControllerFetchArticleCategoriesData =
  ArticleCategoriesResponseDto[];

export type ArticleCategoriesControllerFetchMyCategoryData = ArticleCategoryDto;

export type ArticleCategoriesControllerCreateArticleCategoryData =
  ArticleCategoryDto;

export type ArticleCategoriesControllerPatchArticleCategoryData =
  ArticleCategoryDto;

export type ArticleCategoriesControllerDeleteArticleCategoryData = any;

export type ArticleBackgroundsControllerCreateArticleBackgroundData =
  ImageUploadResponseDto;

export type ArticleBackgroundsControllerGetArticleBackgroundsData =
  ArticleBackgroundDto[];

export type ArticleBackgroundsControllerDeleteData = any;

export type CommentsControllerCreateCommentData = CommentChildrenDto;

export type CommentsControllerFetchCommentsData = CommentsGetResponseDto[];

export type CommentsControllerPatchCommentData = CommentDto;

export type CommentsControllerDeleteCommentData = any;

export type LikesControllerLikeData = LikesGetResponseDto;

export type LikesControllerDeleteLikeData = any;

export type LikesControllerFetchIfLikedData = boolean;

export type LikesControllerFetchLikesData = UserFollowingResponseDto[];

export type AuthControllerRefreshData = any;

export type AuthControllerLogoutData = any;

export type ReportsControllerReportArticleData = ReportDto;

export type ReportsControllerReportCommentData = ReportDto;

export type ReportsControllerFetchAllData = ReportDto[];
