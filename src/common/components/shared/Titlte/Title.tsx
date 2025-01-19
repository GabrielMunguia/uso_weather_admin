import React from 'react';

interface IProps {
  title: string;
}
const Title = ({ title }: IProps) => {
  return (
    <div className='flex justify-center items-center mb-5'>
      <h1 className='my-3 text-xl lg:text-3xl font-semibold  hover:text-gray-700'>
        {title}
      </h1>
    </div>
  );
};

export default Title;
