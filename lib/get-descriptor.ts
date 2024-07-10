import { type NotificationsGetResponseDto } from '@/__generated__/data-contracts';

const getFollowerDescriptor = (followerCount: number | undefined) => {
  if (followerCount === 0 || followerCount === undefined) {
    return '팔로워 없음';
  }

  return `팔로워 ${followerCount.toLocaleString()}`;
};

const getFollowingDescriptor = (followingCount: number | undefined) => {
  if (followingCount === 0 || followingCount === undefined) {
    return '팔로잉 없음';
  }

  return `팔로잉 ${followingCount.toLocaleString()}`;
};

const getSignUpMethodDescriptor = (signUpMethod: string) => {
  switch (signUpMethod) {
    case 'kakao':
      return '카카오 로그인';
    default:
      throw new Error('Invalid sign up method');
  }
};

const getBannerSignedInUsernameDescriptor = (username: string) => {
  return `${username}님`;
};

const getUserHandlePageTrendingArticleSectionTitleDescriptor = (
  username: string,
) => {
  return `${username}님의 인기글`;
};

const getArticlePageAllArticleSectionTitleDescriptor = (username: string) => {
  return `${username}님의 전체글`;
};

const getNotificationTypeDescriptor = (
  type: NotificationsGetResponseDto['type'],
) => {
  switch (type) {
    case 'COMMENT':
      return '님이 내 게시물에 댓글을 남겼습니다.';
    case 'REPLY':
      return '님이 내 댓글에 답글을 남겼습니다.';
    case 'LIKE':
      return '님이 내 게시물에 좋아요를 남겼습니다.';
    case 'FOLLOW':
      return '님이 나를 팔로우합니다.';
    case 'ANNOUNCEMENT': // ?
      return '공지사항이 올라왔습니다.';
    case 'REPORT': // ?
      return '신고가 접수되었습니다.';
    default:
      throw new Error('Invalid notification type');
  }
};

export {
  getArticlePageAllArticleSectionTitleDescriptor,
  getBannerSignedInUsernameDescriptor,
  getFollowerDescriptor,
  getFollowingDescriptor,
  getNotificationTypeDescriptor,
  getSignUpMethodDescriptor,
  getUserHandlePageTrendingArticleSectionTitleDescriptor,
};
