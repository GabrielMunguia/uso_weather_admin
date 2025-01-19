'use client';

import ConfirmModal from '@/common/components/shared/Modals/ConfirmModal/ConfirmModal';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

import { Toaster } from 'sonner';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <ConfirmModal />
        <Toaster
          position='top-right'
          richColors
          expand={true}
          style={{ marginTop: '1.3rem' }}
          closeButton
        />
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </>
  );
};

export default Providers;
