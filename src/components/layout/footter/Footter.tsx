import React from 'react';
import { danhMucChamSocKhach, theoDoiChungToi } from '@/components/mock-data';
import { Grid } from '@mantine/core';

export const Footter = () => {
  return (
    <div className='uppercase text-[white]'>
      <Grid className='border-b'>
        <Grid.Col span={4}>
          <div>
            <div className='mb-[20px] p-1 '>Chắm sóc khách hàng</div>
            <ul>
              {danhMucChamSocKhach.map((item, index) => (
                <li
                  className='mb-[12px] text-[14px] hover:text-[red]'
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Grid.Col>
        {/* <Grid.Col span={3}>
          <div className='mb-[20px]'>
            <div className='mb-[20px]'>
              <div className='mb-[20px] '> Đơn Vị Vận Chuyển</div>
              <div className='block'>
                {donViVanChuyen.map((item, index) => (
                  <span
                    key={index}
                    className='mx-2 inline-block rounded-sm border p-[5px] shadow-lg '
                  >
                    <img className='h-[22px] w-[52px]' src={item}></img>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Grid.Col> */}
        <Grid.Col span={4}>
          <div className='mb-[20px] '>Theo Dõi Chúng Tôi Trên</div>
          <ul className='flex justify-around'>
            {theoDoiChungToi.map((item, index) => (
              <li className='flex items-center hover:text-[red]' key={index}>
                <span className='mr-[2px] text-[16px]'>
                  <item.icon />
                </span>
                <span>{item.tittle}</span>
              </li>
            ))}
          </ul>
          <a href='/'>
            <div className='mt-[10px] flex items-center '>
              <img
                className='h-[100px] w-[100px] rounded-xl object-cover p-2'
                src='https://i.pinimg.com/736x/30/b5/49/30b54999b098050158ed13a1ecdcaab0.jpg'
              ></img>
              <span className='ml-2'>Hội Anh Em MU VIP Pro</span>
            </div>
          </a>
        </Grid.Col>
        <Grid.Col span={4}>
          <span>Kết nối với chúng tôi</span>
          <div className='mt-2'>
            <iframe
              title='Gạo Sport'
              className='!h-full w-full'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.89940621069618!2d106.62733181350781!3d10.857874608648986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b12a68a5f37%3A0xa6a1162f251bd3fa!2zMTEzIMSQw7RuZyBC4bqvYywgVMOibiBIxrBuZyBUaHXhuq1uLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MTUwNiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1695487076965!5m2!1svi!2s'
            ></iframe>
          </div>
        </Grid.Col>
      </Grid>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center '>
          <a className='mx-[20px]' href='/'>
            <div className='bg-bottom-14 h-[45px] w-[120px]  bg-[url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png")] bg-no-repeat'></div>
          </a>
          <a className='mx-[20px]'>
            <div className='bg-bottom-14 h-[45px] w-[120px]  bg-[url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png")] bg-no-repeat'></div>
          </a>
          <a className='mx-[20px]'>
            <div className='bg-bottom-1 h-[80px] w-[80px]  bg-[url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png")] bg-no-repeat'></div>
          </a>
        </div>
        <div className='mb-[25px]  mt-[8px] text-[24px]  tracking-widest'>
          Gạo Sport
        </div>
        <div className='my-[8px] text-[14px]'>
          Chịu Trách Nhiệm Quản Lý Nội Dung: Lê Hoàng Anh - Điện thoại liên hệ:
          0927 993 249
        </div>
        <div className='my-[8px] text-[14px]'>
          © 2015 - Bản quyền thuộc về Gạo Sport
        </div>
      </div>
    </div>
  );
};
