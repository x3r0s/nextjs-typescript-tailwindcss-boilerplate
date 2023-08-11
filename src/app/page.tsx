'use client';

import React from 'react';
import {Button} from '@nextui-org/react';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-5 justify-center'>
          <h1 className='text-[5rem] font-bold'>Welcome to</h1>
          <h1 className='text-[5rem] font-bold text-primary-400'>Nextjs 13</h1>
        </div>
        <p className='flex justify-center text-2xl'>Boiler plate using</p>
        <p className='flex justify-center text-2xl'>Next.js v13 + Typescript + Tailwindcss + recoil + nextui</p>
        <Button className='mx-auto w-auto' color="primary">Cool</Button>
      </div>
    </div>
  );
}