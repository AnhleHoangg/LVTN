'use client';
import React, { useEffect } from 'react';
import { Card, Grid } from '@mantine/core';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FcMoneyTransfer } from 'react-icons/fc';
import { PiMoney } from 'react-icons/pi';
import NavigationDashBoard from '@/components/layout/nav/NavigationDashBoard';
import BarChartProduction from '@/components/chart/BarChart';
import { Text } from '@mantine/core';
import { PrimaryButton } from '@/components/Button';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

const Page = () => {
  useEffect(() => {
    // const docRef = doc(db, 'Order');
    // let fetchData = async () => {
    //   const docSnap = await getDoc(docRef);
    //   if (docSnap.exists()) {
    //     console.log('Document data:', docSnap.data());
    //   } else {
    //     console.log('No such document!');
    //   }
    //   fetchData();
    // };
  }, []);

  return (
    <div className='flex !h-[100vh] w-full'>
      <div className='mr-3 !h-full w-1/5 rounded-t-2xl bg-[white]'>
        <NavigationDashBoard />
      </div>
      <div className='w-4/5 px-2'>
        <Grid grow>
          <Grid.Col span={4}>
            <Card>
              <div className=' flex items-center justify-center font-bold text-rose-900'>
                <span className='mr-[10px] uppercase'>Tổng đơn hàng</span>
                <RiShoppingCartLine className='' size={30} />
              </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card>
              <div className=' flex items-center justify-center font-bold text-rose-900'>
                <span className='mr-[10px] uppercase'> Tổng Phí Nhập Hàng</span>
                <FcMoneyTransfer size={30} />
              </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card>
              <div className='flex items-center justify-center font-bold text-rose-900'>
                <span className='mr-[10px] uppercase'>Tổng Tiền Bán Hàng </span>
                <PiMoney size={30} />
              </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={8}>
            <Card>
              <div className=''>
                <BarChartProduction />
              </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card>
              <Text
                size='xl'
                fw={900}
                variant='gradient'
                gradient={{ from: 'rgba(255, 0, 0, 1)', to: 'gray', deg: 90 }}
              >
                Đơn Hàng Gần Đây
              </Text>
              <div className='mt-[10px] flex items-center'>
                <div className='flex'>
                  <img
                    className='mr-2 h-[50px] w-[50px] object-contain'
                    src='https://icdn.24h.com.vn/upload/3-2022/images/2022-09-24/manchester_header-500-1663965181-869-width500height485.jpg'
                  ></img>
                  <div className='flex flex-col'>
                    <div className='flex '>
                      <div className=' truncate text-[16px] font-medium'>
                        Áo bóng đá Mu 2009
                      </div>
                      <div className='ml-4 text-[12px]'>
                        Thời Gian Đặt Hàng: 10.00PM 12/3/2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-[15px]'>
                <PrimaryButton text='Xem tất cả' className='px-2 text-[12px]' />
              </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card className='min-h-fit'>
              <Text
                size='xl'
                fw={900}
                variant='gradient'
                gradient={{ from: 'rgba(255, 0, 0, 1)', to: 'gray', deg: 90 }}
              >
                Blog Gần Đây
              </Text>
              <div className='mt-[10px] flex items-center'>
                <article className='mb-[10px] flex'>
                  <img
                    className='h-[100px] w-[100px] rounded-lg object-cover'
                    src='https://vudigital.co/wp-content/uploads/2023/10/logo-mu-3-giai-doan-hinh-thanh-bieu-tuong-cua-quy-do.webp'
                  ></img>
                  <div className='flex flex-col px-3'>
                    <span className='my-[5px] w-fit pb-[5px] font-semibold uppercase hover:border-b'>
                      Lịch bóng đá của MU
                    </span>
                    <span className='my-[5px]'> 08/04/2024</span>
                  </div>
                </article>
              </div>
              <div className='mt-[15px]'>
                <PrimaryButton text='Xem tất cả' className='px-2 text-[12px]' />
              </div>
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};
export default Page;
