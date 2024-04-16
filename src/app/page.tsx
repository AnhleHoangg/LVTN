'use client';

import React, { useEffect, useState } from 'react';

import { Container, Grid } from '@mantine/core';
//swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/parallax';
import { Autoplay, Pagination, Parallax } from 'swiper/modules';
//components
import { ProductionItem } from '@/components/product/Product';
import { bannerQuangCao, danhMuc } from '@/components/mock-data';
import Countdown from '@/components/Countdown';
import HeaderTag from '@/components/HeaderTag';
import {
  BtnNextSlide,
  BtnPrevSlide,
  SliderShowItem,
} from '@/components/Slider/SliderShowItem';
//fireBase
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { PrimaryButton } from '@/components/Button';

type ValueData = {
  nameitem: string;
  UDK: string;
  price: number;
  quanlity: number;
  material: string;
}[];

export default function HomePage() {
  const [dataInFirebase, setDataInFirebase] = useState<ValueData>();
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Product'));
      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setDataInFirebase(data);
    };
    fetchData();
  }, []);

  return (
    <div className='bg-[white]'>
      <div className='border-b-2 drop-shadow-sm'>
        <Container className='mx container flex flex-col pt-[20px]'>
          <div className='flex w-full '>
            <div className='group relative w-full'>
              <Swiper
                className='mySwiper w-full'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loopAdditionalSlides={0}
                loop={true}
                parallax={true}
                modules={[Autoplay, Pagination, Parallax]}
              >
                <SwiperSlide>
                  <SliderShowItem type='info' />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderShowItem type='info' />
                </SwiperSlide>
                <div className='absolute top-[42%] z-50 hidden w-full group-hover:block'>
                  <div className='flex justify-between'>
                    <BtnPrevSlide />
                    <BtnNextSlide />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
      {/* // Flash sale */}
      <Container className='mx container relative my-[20px]  border px-[0px]'>
        <div className='h-[361px] overflow-hidden bg-[#ffffff]'>
          <div className='relative'>
            <HeaderTag>Flash sale</HeaderTag>
          </div>
          <div className='absolute left-32 top-[15px]'>
            <Countdown initialTime={6000} />
          </div>
          <div className='group relative z-0 h-full'>
            <Swiper loopAdditionalSlides={0}>
              {danhMuc.map((item, index) => (
                <SwiperSlide>
                  <div key={index} className='flex justify-evenly'></div>
                </SwiperSlide>
              ))}
              <div className='hidden group-hover:block'>
                <div className='absolute right-[20px] top-[42%] z-50'>
                  <div className='flex justify-between'>
                    <div>
                      <BtnNextSlide
                        size={20}
                        className='rounded-full border bg-[white] shadow-inner transition-all hover:scale-150'
                      />
                    </div>
                  </div>
                </div>
                <div className='absolute left-[20px] top-[42%] z-50'>
                  <div className='flex justify-between'>
                    <div>
                      <BtnPrevSlide
                        size={20}
                        className='rounded-full border bg-[white] shadow-inner transition-all hover:scale-150'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </Container>
      {/* //Danh mục */}
      <Container className='mx container relative my-[20px]  border px-[0px]'>
        <div className='h-[375px] overflow-hidden bg-[#ffffff]'>
          <HeaderTag>Danh Mục</HeaderTag>
          <div className='relative z-0 h-full'>
            <Swiper spaceBetween={30} loopAdditionalSlides={0}>
              {danhMuc.map((item, index) => (
                <SwiperSlide>
                  <SliderShowItem type='button' key={index} item={item} />
                </SwiperSlide>
              ))}
              {/* group btn navigation */}
              <div className='hidden group-hover:block'>
                <div className='absolute right-[20px] top-[42%] z-50'>
                  <div className='flex justify-between'>
                    <div>
                      <BtnNextSlide
                        size={20}
                        className='rounded-full border bg-[white] shadow-inner transition-all hover:scale-150'
                      />
                    </div>
                  </div>
                </div>
                <div className='absolute left-[20px] top-[42%] z-50'>
                  <div className='flex justify-between'>
                    <div>
                      <BtnPrevSlide
                        size={20}
                        className='rounded-full border bg-[white] shadow-inner transition-all hover:scale-150'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </Container>

      {/* Banner quảng cáo */}
      <Container className='mx container mt-[30px] px-[0px]'>
        <div className='grid h-full grid-cols-3'>
          {bannerQuangCao.map((item) => (
            <a
              className=' col-span-1 mb-[10px] border'
              key={item.title}
              href='/'
            >
              <img
                className='h-[250px] w-full object-cover'
                src={item.link}
              ></img>
            </a>
          ))}
        </div>
      </Container>
      <Container className='mx container relative my-[20px] border bg-[#f5f5f5] px-[0px]'>
        <HeaderTag itemLeft>Sản phẩm HOT hôm nay</HeaderTag>
        <div className='border-4 border-[blue]'></div>
        <div className=' px-[20px] pb-[20px]'>
          <Grid>
            {dataInFirebase?.map((item: any, index) => (
              <Grid.Col span={2}>
                <div key={index}>
                  <ProductionItem
                    data={item.value}
                    btnBuy
                    btnCart
                    type='product'
                  />
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Container>
      <div className='flex w-full justify-center pb-3'>
        <PrimaryButton text='Xem Thêm' />
      </div>
    </div>
  );
}
