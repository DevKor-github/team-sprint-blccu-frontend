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

type Category = {
  id: number;
  name: string;
  count: number;
};

export type { Category, NotificationType, Post, User };
