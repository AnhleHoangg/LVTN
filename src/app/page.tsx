'use client';

import React from 'react';

import { Container } from '@mantine/core';
//swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/parallax';
import { Autoplay, Pagination, Parallax } from 'swiper/modules';
//components
import {
  BtnPrevNextSlide,
  SliderShowItem,
} from '@/components/Slider/SliderShowItem';

import { PrimaryButton } from '@/components/Button';

import Category from '@/components/component/Category';
import RecommendToDay from '@/components/component/RecommendToDay';
import Flashsale from '@/components/component/Flashsale';
import DescriptionPage from '@/components/component/DescriptionPage';

export type ValueData = {
  nameitem: string;
  UDK: string;
  price: number;
  quanlity: number;
  material: string;
  category: string;
  album: string[];
  avatar: string;
}[];
export default function HomePage() {
  return (
    <div className='bg-[white]'>
      <div className='border-b-2 drop-shadow-sm'>
        <Container className='container flex flex-col px-0'>
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
                    <BtnPrevNextSlide />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
      {/* // Flash sale */}
      <Flashsale />
      {/* //Danh mục */}
      <Category />
      {/* Gợi ý hốm nay*/}
      <RecommendToDay />
      {/* Diễn tả trang web*/}
      <DescriptionPage />
    </div>
  );
}
