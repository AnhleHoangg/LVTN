'use client';
import React from 'react';
import HeaderPage from '@/components/layout/header/Header';
import { Container } from '@mantine/core';
import { Footter } from '@/components/layout/footter/Footter';

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' w-full bg-[#f5f5f5]'>
      <div className='fixed z-50 flex w-full justify-around bg-blue-500'>
        <HeaderPage colorScheme='light' />
      </div>
      <div className='mt-[130px]'>{children}</div>
      <Container className='mx container mt-[50px] p-[5px] '>
        <Footter />
      </Container>
    </div>
  );
};

export default LayoutDefault;
