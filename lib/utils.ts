import { type ClassValue, clsx } from 'clsx';
import { type UUID } from 'crypto';
import { twMerge } from 'tailwind-merge';

import { BLCCU_DUMMY_DATASET } from '@/constants/dummy';
import {
  type Category,
  type Comment,
  type CommentWithReplies,
  type Post,
  type Reply,
  type User,
} from '@/types/mocking-entity';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const copyCurrentUrl = () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl);
};

/**
 * @note
 * below is for development only
 */

const sample = <T extends unknown>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * @note
 * size가 주어진 배열의 길이보다 커도 중복으로 넣어서 길이 맞춥니다.
 */
const sampleSize = <T extends unknown>(array: T[], size: number): T[] => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(sample(array));
  }
  return result;
};

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomDate = (start: Date, end: Date) => {
  return new Date(randomInt(start.getTime(), end.getTime()));
};

const generateUser = (): User => {
  const { username, handle } = sample(BLCCU_DUMMY_DATASET.USER.BASICS);

  const description = sample(BLCCU_DUMMY_DATASET.USER.DESCRIPTIONS);

  const profileImage = sample(BLCCU_DUMMY_DATASET.USER.PROFILE_IMAGES);

  const backgroundImage = sample(BLCCU_DUMMY_DATASET.USER.BACKGROUND_IMAGES);

  const followerCount = randomInt(0, 1000);

  const followingCount = randomInt(0, 1000);

  return {
    username,
    handle,
    description,
    profileImage,
    backgroundImage,
    followerCount,
    followingCount,
  };
};

const generatePost = (initialAuthor?: User): Post => {
  const author = initialAuthor ?? generateUser();

  const { title, slug, description } = sample(BLCCU_DUMMY_DATASET.POST.BASICS);

  const thumbnail = sample(BLCCU_DUMMY_DATASET.POST.THUMBNAIL_IMAGES);

  const createdAt = randomDate(new Date(2023, 11, 1), new Date());

  return { author, title, slug, description, thumbnail, createdAt };
};

const generateUsers = (size: number): User[] => {
  return Array.from({ length: size }, () => generateUser());
};

const generatePosts = (size: number, initialAuthor?: User): Post[] => {
  if (initialAuthor !== undefined) {
    return Array.from({ length: size }, () => generatePost(initialAuthor));
  }

  return Array.from({ length: size }, () => generatePost());
};

const generateUuid = (): UUID => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

const generateCategory = (): Category => {
  const { id, name } = sample(BLCCU_DUMMY_DATASET.CATEGORIES);
  const count = randomInt(0, 100);

  return { id, name, count };
};

const generateCategories = (size: number) => {
  return Array.from({ length: size }, () => generateCategory());
};

const generateCommentWithReplies = (): CommentWithReplies => {
  const replyCount = randomInt(0, 5);

  const uuid = generateUuid();

  const comment: Comment = {
    uuid,
    user: generateUser(),
    content: sample(BLCCU_DUMMY_DATASET.COMMENTS),
  };

  const replies: Reply[] = Array.from({ length: replyCount }, () => ({
    uuid: generateUuid(),
    user: generateUser(),
    content: sample(BLCCU_DUMMY_DATASET.COMMENTS),
    parent: uuid,
  }));

  return { comment, replies };
};

const generateCommentsWithReplies = (size: number): CommentWithReplies[] => {
  return Array.from({ length: size }, () => generateCommentWithReplies());
};

export {
  cn,
  copyCurrentUrl,
  generateCategories,
  generateCategory,
  generateCommentWithReplies,
  generateCommentsWithReplies,
  generatePost,
  generatePosts,
  generateUser,
  generateUsers,
  generateUuid,
  randomDate,
  randomInt,
  sample,
  sampleSize,
};
