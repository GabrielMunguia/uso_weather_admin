import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-screen'>
        <Image src='/assets/img/login/spash.webp' fill alt='banner' />
      </div>
      <div className='bg-black absolute w-full h-screen opacity-20'></div>
    </div>
  );
};

export default Banner;
