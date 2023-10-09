import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Link from 'next/link';
import Favicon from '/public/Metadata/favicon.ico';

const noto = Noto_Sans_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Feign 情報局',
  description: '人狼ゲーム Feign（フェイン）の役職などを詳しく、見やすく書いたサイトです',
  icons: [
    { rel: 'icon', url: Favicon.src }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <div className="pt-8 pb-12">
          <div className='flex items-center justify-center mb-3'>
            <Link href="/"><p className='text-2xl font-bold'>Feign 情報局</p></Link>
          </div>
          <div className='flex items-center justify-center gap-4'>
            <Link href="/" className="hover:underline">トップ</Link>
            <Link href="/qa" className="hover:underline">よくある質問</Link>
            <Link href="/reference" className="hover:underline">情報ソースなど</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
