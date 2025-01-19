'use client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const NexUiLayout = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div>
      <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='light'>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </div>
  );
};

export default NexUiLayout;
