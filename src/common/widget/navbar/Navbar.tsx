import React from 'react';
import ButtonSidebar from './partials/ButtonSidebar';
import DropDownMenu from './partials/DropDownMenu';
import SwitchDarkMode from './partials/SwitchDarkMode';

const Navbar = () => {
  return (
    <header className='bg-white flex shadow-md h-[3.5em] items-center justify-between border-b-1 p-3 dark:bg-zinc-800  w-full border-b-[#176f26] '>
      <div className='flex justify-between flex-1 items-center'>
        <ButtonSidebar />

        <div className='flex justify-center gap-1 items-center'>
          <SwitchDarkMode />
          <DropDownMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
