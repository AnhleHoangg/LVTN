import { PrimaryButton } from '@/components/Button';
import HeaderTag from '@/components/HeaderTag';
import { Container } from '@mantine/core';
import React from 'react';

const DescriptionPage = () => {
  return (
    <Container className='container relative mx-auto'>
      <div className='relative mx-auto my-2 grid grid-cols-2'>
        <img
          className='relative col-span-1 h-[40vh] w-[100vh] object-contain'
          src='../images/Intro/ADSGaosport.jpg'
        />
        <div className='col-span-1'></div>
      </div>
      <HeaderTag>Hôm nay có gì ?</HeaderTag>
      <div className='mt-[10px] grid grid-cols-2'>
        {[1, 2].map(() => (
          <article className='col-span-1 mb-[10px] flex'>
            <img
              className='h-[300px] w-[300px] rounded-lg object-cover'
              src='https://vudigital.co/wp-content/uploads/2023/10/logo-mu-3-giai-doan-hinh-thanh-bieu-tuong-cua-quy-do.webp'
            ></img>
            <div className='flex flex-col px-3'>
              <span className='my-[5px] w-fit pb-[5px] font-semibold uppercase hover:border-b'>
                Lịch bóng đá của MU
              </span>
              <span className='my-[5px]'> 08/04/2024</span>
              <div className='my-[5px] h-[50px]'>
                <p className='line-clamp-2'>
                  Theo kế hoạch, ĐT Việt Nam sẽ thi đấu 10 trận tại Vòng loại
                  cuối World Cup 2022 từ tháng 9/2021 đến tháng 3/2022, trong đó
                  có 05 trận thi đấu trên sân nhà và 05 trận thi đấu trên sân
                  đối phương. Cụ thể như sau:
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className='flex w-full justify-center border-t py-[20px]'>
        <PrimaryButton text='Xem Thêm' />
      </div>
    </Container>
  );
};

export default DescriptionPage;
