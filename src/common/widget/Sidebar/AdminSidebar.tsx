'use client';
import { useSidebarStore } from '@/shared/store/useSidebarStore';
import LinksSidebar from './partials/LinkSidebar';
import SidebarMobile from './partials/SidebarMobile';
import Logo from '../logo/Logo';

const AdminSidebar = () => {
  const { isOpen } = useSidebarStore();
  return (
    <>
      <div
        className={`h-[100vh]  hidden xl:block overflow-hidden  border-r-1 bg-[#0b0c10]  text-white dark:bg-[#0b0c10] lg:block transition-all duration-500 transform ${isOpen ? 'w-[16em]' : 'w-[0rem] '}`}
      >
        <div className='w-[16rem] p-4 '>
          <Logo width={100} height={100} />

          <div className='h-[90vh] mt-3 overflow-y-auto  pb-[2rem]'>
            <LinksSidebar />
          </div>
        </div>
      </div>
      <SidebarMobile />
    </>
  );
};

export default AdminSidebar;
