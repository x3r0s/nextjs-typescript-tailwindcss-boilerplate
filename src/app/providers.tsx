'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { RecoilRoot } from 'recoil';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <RecoilRoot>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </RecoilRoot>
    </NextUIProvider>
  );
}