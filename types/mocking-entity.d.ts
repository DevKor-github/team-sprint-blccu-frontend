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
  id: number;
  author: User;
  title: string;
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
  id: number;
  user: User;
  content: string;
};

type Reply = {
  id: number;
  user: User;
  content: string;
  parent: number;
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
