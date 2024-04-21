import { type UUID } from 'crypto';

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

type Comment = {
  uuid: UUID;
  user: User;
  content: string;
};

type Reply = {
  uuid: UUID;
  user: User;
  content: string;
  parent: UUID;
};

type CommentWithReplies = {
  comment: Comment;
  replies: Reply[];
};

export type {
  Category,
  Comment,
  CommentWithReplies,
  NotificationType,
  Post,
  Reply,
  User,
};
