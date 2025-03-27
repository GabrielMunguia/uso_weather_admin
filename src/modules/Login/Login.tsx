'use client';
import { useState } from 'react';
import FormLogin from './sections/FormLogin/FormLogin';
import Banner from './sections/banner/Banner';
import FormResetPassword from './sections/FormResetPassword/FormResetPassword';

const Login = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);

  return (
    <div className='flex'>
      <section className='absolute xl:relative w-full top-0  xl:block xl:w-1/2'>
        <Banner />
      </section>
      <section className='w-full xl:w-1/2'>
        {isResetPassword ? (
          <FormResetPassword
            onShowResetPassword={() => {
              setIsResetPassword(false);
            }}
          />
        ) : (
          <FormLogin
            onShowResetPassword={() => {
              setIsResetPassword(true);
            }}
          />
        )}
      </section>
    </div>
  );
};

export default Login;
