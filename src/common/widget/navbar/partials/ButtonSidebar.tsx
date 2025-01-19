'use client';
import { useSidebarStore } from '@/shared/store/useSidebarStore';
1;
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const ButtonSidebar = () => {
  const { toggleSidebar } = useSidebarStore();
  return (
    <>
      <HiOutlineMenuAlt1
        color={'black'}
        className='cursor-pointer text-2xl '
        onClick={toggleSidebar}
      />
    </>
  );
};

export default ButtonSidebar;
