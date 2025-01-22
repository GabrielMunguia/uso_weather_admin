import Image from 'next/image';
import React from 'react';
interface IProps {
  className?: string;
  height?: number | string;
  width?: number | string;
}

const Logo = ({ className, height = 100, width = 100 }: IProps) => {
  return (
    <div className='flex flex-col items-center gap-1 justify-center'>
      <div className='relative max-w-[100%] ' style={{ width, height }}>
        <Image
          src='/assets/img/logo.png'
          alt='logo'
          style={{ objectFit: 'contain' }}
          className={className}
          fill
        />
      </div>
      <h1 className='text-[#176f26] text-2xl font-bold'>USOWeather</h1>
    </div>
  );
};

export default Logo;
