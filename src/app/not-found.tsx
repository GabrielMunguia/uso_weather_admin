import Logo from '@/common/widget/logo/Logo';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center bg-[#111827]'>
      <Logo width={'60rem'} height={'5rem'} />
      <h1 className='text-9xl font-extrabold text-white tracking-widest'>
        404
      </h1>
      <div className='bg-[#F49028] px-2 text-sm rounded rotate-12 absolute'>
        Page not found
      </div>
      <button className='mt-5'>
        <a className='relative inline-block text-sm font-medium text-[#F49028] group active:text-orange-500 focus:outline-none focus:ring'>
          <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#F49028] group-hover:translate-y-0 group-hover:translate-x-0'></span>

          <span className='relative block px-8 py-3 bg-[#111827] border border-current'>
            <Link href={'/'}> Go back home</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default page;
