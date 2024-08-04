import OnlineStatus from '@/components/onlineStatus';

import Head from 'next/head';
import { useEffect } from 'react';

export const metadata = {
  title: 'Offline Music Player',
  description: 'An offline music player app',
};

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">

      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <body>
        
        {children}
      </body>
    </html>
  );
}
