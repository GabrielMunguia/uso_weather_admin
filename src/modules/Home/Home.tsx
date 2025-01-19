'use client';

import Script from 'next/script';
import React from 'react';

const Home = () => {
  return (
    <div className=' flex justify-center w-full'>
      <div className='max-w-full  flex'>
        <div id='climapredict-uso'></div>
      </div>
      <Script
        src='http://127.0.0.1:8000/scripts/climapredict.js'
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </div>
  );
};

export default Home;
