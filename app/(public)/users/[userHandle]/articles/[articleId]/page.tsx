'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { EllipsisVertical } from 'lucide-react';

import { UserHandlePageTrendingArticleSection } from '@/app/(public)/(main)/users/[userHandle]/_components/user-handle-page-trending-article-section';
import { ArticlePageAllArticleSection } from '@/app/(public)/users/[userHandle]/articles/_components/article-page-all-article-section';
import { ArticlePageAuthorProfileSection } from '@/app/(public)/users/[userHandle]/articles/_components/article-page-author-profile-section';
import { ArticlePageBottomBar } from '@/app/(public)/users/[userHandle]/articles/_components/article-page-bottom-bar';
import { ArticlePageDetailActions } from '@/app/(public)/users/[userHandle]/articles/_components/article-page-detail-actions';
import { ReportArticleBottomActionSheet } from '@/app/(public)/users/[userHandle]/articles/_components/report-article-bottom-action-sheet';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { ChatInput } from '@/components/ui-unstable/chat-input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconButton } from '@/components/ui/icon-button';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { queries } from '@/queries';

type ArticlePageProps = {
  params: {
    userHandle: string;
    articleId: number;
  };
};

const ArticlePage = ({
  params: { userHandle: _, articleId },
}: ArticlePageProps) => {
  const { isSignedIn, me } = useMeQuery();
  const { data: articleData } = useQuery(queries.articles.detail(articleId));

  const article = articleData?.data;

  if (article === undefined) {
    return null;
  }

  const { id, user, imageUrl } = article;
  const isMe = me?.id === user.id;

  return (
    <>
      <AppBar className="bg-blccu-white/90 backdrop-blur-lg">
        <AppBarBack />
        <div className="item-center flex w-full justify-between">
          <AppBarTitle className="flex items-center gap-3">
            <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
              <Avatar size="xs">
                <AvatarImage src={user.profileImage} />
                <AvatarFallback className="bg-blccu-neutral-400" />
              </Avatar>
            </Link>
            <Link href={ROUTES.USER_HANDLE_OF(user.handle)}>
              <p className="text-sm font-medium">{user.username}</p>
            </Link>
          </AppBarTitle>
          {isSignedIn && (
            <ReportArticleBottomActionSheet
              id={id}
              me={me}
              isMe={isMe}
              trigger={
                <IconButton size="lg">
                  <EllipsisVertical className="h-5 w-5" />
                </IconButton>
              }
            />
          )}
        </div>
      </AppBar>
      <div className="pt-14">
        <Image src={imageUrl} alt="Post thumbnail" width={1280} height={2000} />
        <ArticlePageDetailActions articleId={article.id} />
        <div className="flex flex-col">
          <Link
            href={ROUTES.COMMENTS_OF(user.handle, article.id)}
            className="ml-4"
          >
            <p className="font-medium">댓글 더보기</p>
          </Link>
          <ChatInput articleId={article.id} />
        </div>
        <ArticlePageAuthorProfileSection userId={user.id} />
        <UserHandlePageTrendingArticleSection user={user} />
        <ArticlePageAllArticleSection user={user} />
        <div className="h-[40px]" />
      </div>
      <ArticlePageBottomBar articleId={article.id} />
    </>
  );
};

export default ArticlePage;
