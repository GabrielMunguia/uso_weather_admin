import React from 'react';

import FormLogin from './sections/FormLogin/FormLogin';
import Banner from './sections/banner/Banner';

const Login = () => {
  return (
    <div className='flex'>
      <section className='absolute xl:relative w-full top-0  xl:block xl:w-1/2'>
        <Banner />
      </section>
      <section className='w-full xl:w-1/2'>
        <FormLogin />
      </section>
    </div>
  );
};

export default Login;
