import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full p-4 text-center'>
      <FiAlertTriangle className='text-red-500 text-6xl mb-4' />
      <h1 className='text-2xl font-bold mb-2'>
        Oops! <br />
        La página no se encontró
      </h1>
      <p className='text-gray-600 mb-4 dark:text-gray-400'>
        Lo sentimos, pero la página que buscas no existe o ha sido eliminada.
      </p>
      <Link className='text-blue-500 hover:underline' href='/dashboard'>
        {' '}
        Volver al inicio
      </Link>
    </div>
  );
};

export default page;
