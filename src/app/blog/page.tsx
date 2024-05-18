'use client';
import { Card, Container } from '@mantine/core';
import React from 'react';

const Blog = () => {
  return (
    <Container className='container mx-auto'>
      <Card className='mb-[20px] grid grid-cols-3 rounded-none'>
        <div className='col-span-2 '>
          <article className='mb-[10px] flex'>
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
        </div>
        <div className='col-span-1'>
          <img
            className='mb-[20px] h-[300px] rounded-lg object-cover'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVqCb1t8h_yG9Y97Rv1B9va3MucRwyfiodbNiny1INQ&s'
          ></img>
          <div>
            <div className='mb-[10px] border-b pb-[10px] font-medium uppercase'>
              Tin Tức Nỗi Bật
            </div>
            <div className='font-light'>
              <article className='flex'>
                <img
                  className='h-[100px] w-[100px] rounded-lg object-cover'
                  src='https://vudigital.co/wp-content/uploads/2023/10/logo-mu-3-giai-doan-hinh-thanh-bieu-tuong-cua-quy-do.webp'
                ></img>
                <div className='flex flex-col px-3'>
                  <span className='w-fit uppercase hover:border-b'>
                    Lịch bóng đá của MU
                  </span>
                  <span className='my-[5px]'>
                    08/04/2024
                    <span className='ml-[5px]'>10:59PM</span>
                  </span>
                  <span>Tác giả: Lê Hoàng Anh</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Blog;
