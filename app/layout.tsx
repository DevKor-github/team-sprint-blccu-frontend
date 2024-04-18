import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import { type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import QueryProvider from '@/providers/query-provider';

import './globals.css';

const notoSansKr = Noto_Sans_KR({
  weight: ['200', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

const metadata: Metadata = {
  title: '블꾸',
  description: '커스텀 극대화 블로그 블꾸에서 당신만의 블로그를 꾸며보세요!',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <body className={cn(notoSansKr.className, 'bg-slate-100')}>
        <QueryProvider>
          <div className="mx-auto min-h-dvh max-w-md bg-white">{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
