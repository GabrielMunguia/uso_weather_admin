'use client';
import Canvas from '@/common/components/ui/Canvas/Canvas';

import React from 'react';

import LinksSidebar from './LinkSidebar';
import { useSidebarStore } from '@/shared/store/useSidebarStore';
import Logo from '../../logo/Logo';

const SidebarMobile = () => {
  const { toggleSidebar, isOpen } = useSidebarStore();
  return (
    <div className='lg:hidden'>
      <Canvas
        isOpen={isOpen}
        onClose={toggleSidebar}
        className='border-r-[#0b0c10] bg-[#0b0c10] text-white'
      >
        <Logo width={80} height={80} />

        <LinksSidebar />
      </Canvas>
    </div>
  );
};

export default SidebarMobile;
