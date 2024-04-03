'use client';
import React from 'react';
import HeaderPage from '@/components/layout/header/Header';
import { Container } from '@mantine/core';
import { Footter } from '@/components/layout/footter/Footter';

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' w-full bg-slate-300'>
      <div className='fixed z-50 flex w-full justify-around bg-gradient-to-r from-red-700 to-slate-600'>
        <HeaderPage colorScheme='light' />
      </div>
      <div className='mt-[175px]'>{children}</div>
      <div className=' bg-slate-600 pt-[5px]'>
        <Container className='mx container mt-[50px]  p-[5px]'>
          <Footter />
        </Container>
      </div>
    </div>
  );
};

export default LayoutDefault;
