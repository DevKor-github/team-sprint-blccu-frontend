import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import { type PropsWithChildren } from 'react';

import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { ModalProvider } from '@/providers/modal-provider';
import { NotificationSubscriber } from '@/providers/notification-subscriber';
import QueryProvider from '@/providers/query-provider';

import './globals.css';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

const metadata: Metadata = {
  title: '블꾸 - 나만의 커스텀 블로그',
  description: '커스텀 극대화 블로그 블꾸에서 당신만의 블로그를 꾸며보세요!',
  manifest: '/manifest.json',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <body className={cn(notoSansKr.className, 'bg-gray-50')}>
        <QueryProvider>
          <div className="mx-auto min-h-dvh max-w-screen-sm bg-white shadow-xl">
            {children}
          </div>
          <NotificationSubscriber />
          <ModalProvider />
          <Toaster
            position="bottom-center"
            toastOptions={{
              className:
                'font-noto-sans-kr' /* FIXME: font-serif는 적용되는데, custom font는 적용이 안된다. */,
            }}
          />
        </QueryProvider>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
