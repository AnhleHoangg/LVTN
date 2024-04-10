'use client';

import * as React from 'react';
import { Container, Grid } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/parallax';
import { ProductionItem } from '@/components/product/Product';
import { Autoplay, Pagination, Parallax } from 'swiper/modules';
import { bannerQuangCao, danhMuc } from '@/components/mock-data';
import Countdown from '@/components/Countdown';
import HeaderTag from '@/components/HeaderTag';
import {
  BtnNextSlide,
  BtnPrevSlide,
  SliderShowItem,
} from '@/components/Slider/SliderShowItem';

export default function HomePage() {
  return (
    <div className='mt-[165px] bg-[white]'>
      <div className='border-b-2 drop-shadow-sm'>
        <Container className='mx container flex flex-col pt-[20px]'>
          <div className='flex w-full '>
            <div className='group relative w-full'>
              <Swiper
                className='w-full'
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loopAdditionalSlides={0}
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
                    <div>
                      <BtnPrevSlide />
                    </div>
                    <div>
                      <BtnNextSlide />
                    </div>
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
                  <div key={index} className='flex justify-evenly'>
                    <ProductionItem type='flashSale' />
                    <ProductionItem type='flashSale' />
                    <ProductionItem type='flashSale' />
                    <ProductionItem type='flashSale' />
                    <ProductionItem type='flashSale' />
                    <ProductionItem type='flashSale' />
                  </div>
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
                  <SliderShowItem key={index} item={item} type='button' />
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
        <div className='grid h-full grid-cols-3 p-[5px] pr-0'>
          {bannerQuangCao.map((item) => (
            <a
              className='mx-[5px] mb-[10px] rounded-xl border'
              key={item.title}
              href='/'
            >
              <img
                className=' mr-[5px] h-[110px] w-full rounded-xl object-cover'
                src={item.link}
              ></img>
            </a>
          ))}
        </div>
      </Container>
      {/* // Xem tất cả  */}
      {/* <Container className='mx container relative my-[20px]  border px-[0px]'>
          <div className='h-[361px] overflow-hidden bg-[#ffffff]'>
            <HeaderTag itemLeft>Xem Tất Cá</HeaderTag>
            <div className='group h-full'>
              <Swiper loopAdditionalSlides={0}>
                {danhMuc.map((item, index) => (
                  <SwiperSlide>
                    <div key={index} className='flex justify-evenly'>
                      <ProductionItem type='flashSale' />
                    </div>
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
        </Container> */}
      <Container className='mx container relative my-[20px] border bg-[#f5f5f5] px-[0px]'>
        <HeaderTag itemLeft>Gợi Ý Hôm Nay</HeaderTag>
        <div className='border-4 border-[blue]'></div>
        <div className=' px-[20px] pb-[20px]'>
          <Grid>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Grid.Col span={2}>
                <div key={index}>
                  <ProductionItem type='product' />
                  <ProductionItem type='product' />
                  <ProductionItem type='product' />
                  <ProductionItem type='product' />
                  <ProductionItem type='product' />
                  <ProductionItem type='product' />
                  <ProductionItem type='product' />
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Container>
      <div className='  flex w-full justify-center'>
        <div className=' mb-[20px] w-[25%] border border-[red] bg-slate-300 p-[10px] text-center hover:bg-[#f5f5f5]'>
          <button className='p-auto m-auto text-[16px] text-[red]'>
            Xem Them
          </button>
        </div>
      </div>
    </div>
  );
}
