import { type NotificationType } from '@/types/mocking-entity';

const getFollowerDescriptor = (followerCount: number) => {
  if (followerCount === 0) {
    return '팔로워 없음';
  }

  return `팔로워 ${followerCount.toLocaleString()}`;
};

const getFollowingDescriptor = (followingCount: number) => {
  if (followingCount === 0) {
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

const getUsernamePageTrendingPostSectionTitleDescriptor = (
  username: string,
) => {
  return `${username}님의 인기글`;
};

const getNotificationTypeDescriptor = (type: NotificationType) => {
  switch (type) {
    case 'like':
      return '님이 내 게시물에 좋아요를 남겼습니다.';
    case 'comment':
      return '님이 내 게시물에 댓글을 남겼습니다.';
    case 'follow':
      return '님이 나를 팔로우합니다.';
    default:
      throw new Error('Invalid notification type');
  }
};

export {
  getBannerSignedInUsernameDescriptor,
  getFollowerDescriptor,
  getFollowingDescriptor,
  getNotificationTypeDescriptor,
  getSignUpMethodDescriptor,
  getUsernamePageTrendingPostSectionTitleDescriptor,
};
