import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline';

import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='flex mt-2 ml-2 items-center flex-grow sm:flex-row-0'>
          <Image
            src='https://dev3027public.s3.amazonaws.com/amazon_clone/eru-logo.webp'
            alt='erudition logo'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            type='text'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Mason</p>
            <p className='font-extrabold md:text-sm'>Account @ List</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>@ Orders</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              2
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className='flex bg-amazon_blue-light space-x-3 p-2 pl-6 items-center text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Web Dev</p>
        <p className='link'>Frontend</p>
        <p className='link'>Backend</p>
        <p className='hidden lg:inline-flex link '>Full Stack</p>
        <p className='hidden lg:inline-flex link '>ReactJs</p>
        <p className='hidden lg:inline-flex link '>NodeJs</p>
        <p className='hidden lg:inline-flex link '>Express</p>
        <p className='hidden lg:inline-flex link '>Github</p>
        <p className='hidden lg:inline-flex link '>MongoDB</p>
      </div>
    </header>
  );
};

export default Header;
