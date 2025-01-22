// components/ErrorPage.tsx

import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import Link from 'next/link';

interface ErrorPageProps {
  titlee?: string;
  description?: string;
  href?: string;
  label?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  titlee = '¡Vaya! Página no encontrada',
  description = 'Lo sentimos, pero la página que buscas no existe o ha sido eliminada.',
  href = '/dashboard',
  label = 'Volver al inicio',
}) => {
  return (
    <div className='flex h-screen  flex-col items-center justify-start min-h-screen p-4 text-center'>
      <FiAlertTriangle className='text-red-500 text-6xl mb-4' />
      <h1 className='text-2xl font-bold mb-2'>{titlee}</h1>
      <p className='text-gray-600 mb-4 dark:text-gray-400'>{description}</p>
      <Link href={href}>
        <span className='text-blue-500 hover:underline'>{label}</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
