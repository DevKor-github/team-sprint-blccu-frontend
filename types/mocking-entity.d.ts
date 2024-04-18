type User = {
  username: string;
  handle: string;
  description: string;
  profileImage: string;
  backgroundImage: string;
  followerCount: number;
  followingCount: number;
};

type Post = {
  author: User;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  createdAt: Date;
};

type NotificationType = 'like' | 'comment' | 'follow';

export type { NotificationType, Post, User };
