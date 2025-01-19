'use client';

import { sidebarRoutes } from '@/shared/routes/sidebar.routes';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BiHome } from 'react-icons/bi';

const LinksSidebar = () => {
  const pathName = usePathname();

  return (
    <>
      <Link
        href='/dashboard'
        className={`mb-3 flex items-center justify-start rounded p-2 font-normal hover:bg-[#176f26] dark:text-gray-300 dark:hover:bg-zinc-800  ${
          pathName == '/dashboard' ? 'bg-[#176f26] dark:bg-zinc-800' : ''
        }`}
      >
        <div className=' text-md flex gap-2 justify-center items-center mr-2 font-semibold dark:text-gray-300'>
          <BiHome />
          Inicio
        </div>
      </Link>
      <Accordion
        showDivider={false}
        isCompact
        motionProps={{ layout: true }}
        selectionMode='multiple'
        className='m-0 p-0'
      >
        {sidebarRoutes.map(({ name, routes, icon: Icon }, index) => (
          <AccordionItem
            key={index}
            className='font-semibold'
            textValue={name}
            title={
              <div className='my-2 flex items-center gap-1'>
                {Icon ? <Icon /> : null}

                <p className='text-sm text-white dark:text-gray-300 hover:text-white'>
                  {name}
                </p>
              </div>
            }
          >
            {routes.map((route, index) => (
              <Link
                prefetch={route?.preFetch ? route.preFetch : true}
                href={route.path}
                key={index}
                className={`mb-3 flex items-center justify-start rounded p-2 font-normal hover:bg-[#176f26] dark:text-gray-300 dark:hover:bg-zinc-800  ${
                  pathName == route.path ? 'bg-[#176f26] dark:bg-zinc-800' : ''
                }`}
              >
                <div
                  className={`mr-1  h-[7px] w-[7px] rounded-full border ${pathName == route.path ? 'bg-white' : ''}  `}
                ></div>
                <div
                  className={`mr-2 text-sm hover:text-white ${pathName == route.path ? 'text-white' : 'text-gray-400'}`}
                >
                  {route.name}
                </div>
              </Link>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default LinksSidebar;
