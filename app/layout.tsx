import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import QueryProvider from '@/providers/query-provider';

import './globals.css';

const wantedSansVariable = localFont({
  src: '../public/fonts/WantedSansVariable.woff2',
  display: 'swap',
});

const metadata: Metadata = {
  title: '블꾸',
  description: '커스텀 극대화 블로그 블꾸에서 당신만의 블로그를 꾸며보세요!',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <QueryProvider>
        <body className={cn(wantedSansVariable.className, 'bg-slate-100')}>
          <div className="mx-auto min-h-dvh max-w-lg bg-white">{children}</div>
        </body>
      </QueryProvider>
    </html>
  );
};

export { metadata };
export default RootLayout;
