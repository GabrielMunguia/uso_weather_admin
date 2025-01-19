import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/common/widget/Providers/Providers';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev-core',
  description: 'Dev-core',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextTopLoader color='#176F26' />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
