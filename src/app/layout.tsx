'use client';
// Modules
import React, { useEffect } from 'react';

// Styles
import '@/styles/globals.css';

// Providers
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <NextUIProvider>
        <RecoilRoot>
          <NextThemesProvider attribute='class' defaultTheme='dark'>
            {children}
          </NextThemesProvider>
        </RecoilRoot>
      </NextUIProvider>
      </body>
    </html>
  );
}