import NexUiLayout from '@/common/widget/Providers/NextUiLayout';
import AdminSidebar from '@/common/widget/Sidebar/AdminSidebar';
import Navbar from '@/common/widget/navbar/Navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NexUiLayout>
      <div className='relative max-h-[100vh]  w-full  overflow-hidden'>
        <main className='flex  bg-[#F6F6F8] dark:bg-zinc-800 '>
          <AdminSidebar />
          <div className=' relative flex-1  '>
            <Navbar />
            <div className=' relative h-[96vh] overflow-y-auto p-4 lg:p-5'>
              <div className='min-h-[77vh]  '>{children}</div>
            </div>
          </div>
        </main>
      </div>
    </NexUiLayout>
  );
};

export default layout;
