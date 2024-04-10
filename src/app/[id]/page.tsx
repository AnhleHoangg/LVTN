'use client';
import React, { useState } from 'react';
import { Breadcrumbs, Anchor, Container } from '@mantine/core';
import { Grid } from '@mantine/core';
import { Rating } from '@mantine/core';
import { CiHeart } from 'react-icons/ci';
import * as Yup from 'yup';

import LayoutDefault from '@/components/layout/LayoutDefault.tsx/LayoutDefault';
import {
  BtnNextSlide,
  BtnPrevSlide,
  SlideProductionCart,
} from '@/components/Slider/SliderShowItem';
import { danhMuc, listMediaSocial } from '@/components/mock-data';
import FormProvider from '@/components/hook-form/FormProvider';
import { RHFMutiSelect, RHFTextField } from '@/components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton, PrimaryOutlineButton } from '@/components/Button';
import { FaCartArrowDown, FaMinus, FaPlus } from 'react-icons/fa';
import RHFArea from '@/components/hook-form/RHFArea';
import { ProductionDetail, ProductionItem } from '@/components/product/Product';
import HeaderTag from '@/components/HeaderTag';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/parallax';

const production = () => {
  const [count, setCount] = useState(1);
  const LoginSchema = Yup.object().shape({
    note: Yup.string().required('Nên điền ghi chú để nhận đồ hợp ý nhé!'),
    transport: Yup.string().required('Địa chỉ là bắt buộc'),
    select: Yup.string().required('Chưa chon size'),
  });

  const defaultValues = {
    note: '',
    transport: '',
    select: '',
    count: 1,
  };

  type FormValuesProps = {
    select: string;
    transport: string;
    note: string;
    count?: number;
  };
  const methods = useForm<FormValuesProps>({
    mode: 'onSubmit',
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;
  const updateFormData = (data: any, value: number) => {
    return {
      ...data,
      count: value,
    };
  };

  const onSubmit = (data: any) => {
    let Data = updateFormData(data, count);
    reset(defaultValues);
    setCount(1);
  };

  const items = [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <div>
      <div className='flex justify-center'>
        <div className='mx container'>
          <Breadcrumbs>{items}</Breadcrumbs>
        </div>
      </div>
      <div className='mt-[10px] flex flex-col items-center'>
        <div className='mx container bg-[white] p-3'>
          <Grid>
            {/* image production */}
            <Grid.Col span={4}>
              <div className='mr-[10px]'>
                <SlideProductionCart />
              </div>
              <div className='mt-[20px] flex items-center justify-center'>
                <div className='flex items-center border-r px-[30px]'>
                  <div className='mr-[5px]'>Chia sẻ:</div>
                  {listMediaSocial.map((item, index) => (
                    <button key={index} className='mr-[5px] text-[25px]'>
                      <item.icon />
                    </button>
                  ))}
                </div>
                <div className='ml-[30px] flex items-center'>
                  <button className='p-2'>
                    <CiHeart className='font-bold text-[red]' size={25} />
                  </button>
                  <div> Yêu Thích (3k)</div>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col span={8}>
              <div className='mb-[20px] text-[25px] font-medium'>
                Cây chổi lau chùi nhà, vệ sinh nhà cửa tự vắt thông minh siêu
                sạch với đầu xoay 360 độ tặng kèm 2 bông lau
              </div>
              {/* Rating start and list buy */}
              <div className='flex justify-between px-[10px]'>
                <div className='flex'>
                  <div className='flex border-r px-[10px]'>
                    <div className='mb-[2px]  mr-[10px] border-b border-[red]  text-[red]'>
                      3.5
                    </div>
                    <Rating color='red' value={3.5} fractions={2} />
                  </div>
                  <div className='flex px-[10px]'>
                    <div className='mb-[2px]  mr-[10px]'>14,6K</div>
                    <div>Đã Bán</div>
                  </div>
                  <div className='px-[5px]'>
                    Mã Sản Phẩm :
                    <span className='ml-[5px] font-semibold italic '>ABC</span>
                  </div>
                </div>
              </div>
              {/* giá */}
              <div className='mt-[10px] rounded-md bg-[#f5f5f5] p-4'>
                <div className='text-[30px] text-[red]'>
                  <span>22.000đ</span>
                </div>
              </div>
              {/* form bán hàng */}
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <table className='mb-[20px] w-2/3'>
                  <tbody>
                    <tr className='h-[58px]'>
                      <td className='w-[110px]'>
                        <div className='mx-2'>Tình Trạng : </div>
                      </td>
                      <td className=' flex h-[58px] items-center'>
                        <div className='mr-[5px]'>
                          <span className=' border-x-inherit p-[5px] text-[green]'>
                            Còn 300 sản phẩm
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className='h-[58px]'>
                      <td className='w-[110px]'>
                        <div className='mx-2 w-[110px]'>Vận Chuyển</div>
                      </td>
                      <td>
                        <div className='my-[10px]'>
                          <RHFTextField
                            name='transport'
                            placeholder='Địa chỉ nhận hàng'
                          ></RHFTextField>
                        </div>
                      </td>
                    </tr>
                    <tr className='h-[58px]'>
                      <td className=' w-[110px]'>
                        <div className='mx-2'>Size</div>
                      </td>
                      <td>
                        <div>
                          <RHFMutiSelect
                            className='w-[185px]'
                            name='select'
                            options={['29', '30', '40']}
                            placeholder='kk'
                            type='select'
                          ></RHFMutiSelect>
                        </div>
                      </td>
                    </tr>
                    <tr className='h-[58px]'>
                      <td className='w-[110px]'>
                        <div className='font-bold'>Số Lượng</div>
                      </td>
                      <td>
                        <div className='my-[10px] flex w-fit'>
                          <button
                            className='border px-[10px] py-[5px]'
                            onClick={(event) => {
                              event.preventDefault();
                              if (count > 1) {
                                setCount(count - 1);
                              }
                            }}
                          >
                            <FaMinus />
                          </button>
                          <span className='border-y px-[20px] py-[10px]'>
                            {count}
                          </span>
                          <button
                            className='border px-[10px] py-[5px]'
                            onClick={(event) => {
                              event.preventDefault();
                              setCount(count + 1);
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className='h-[58px]'>
                      <td className='w-[110px]'>
                        <div>Ghi Chú</div>
                      </td>
                      <td>
                        <RHFArea name='note'></RHFArea>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='m-[20px] flex justify-center'>
                  <div className='mr-[20px]'>
                    <PrimaryOutlineButton
                      rightIcon={
                        <FaCartArrowDown className='mr-[10px] text-[red]' />
                      }
                      text='Thêm vào giỏ hàng'
                    />
                  </div>
                  <div className=''>
                    <PrimaryButton type='submit' text='Mua ngay' />
                  </div>
                </div>
              </FormProvider>
              <div>
                <div className='item flex'>
                  <span>Gọi điện để được tư vấn:</span>
                  <a className='ml-[10px] text-[25px] text-[red]' href='tel'>
                    0927993249
                  </a>
                </div>
                <div className='flex items-center'>
                  <span className='mr-2'>Chất nhận mọi thanh toán:</span>
                  <div className='flex'>
                    <img
                      className='ml-2 h-[40px] w-[40px]'
                      src='https://bizweb.dktcdn.net/100/415/445/themes/804210/assets/payment-1.svg?1708498874444'
                    ></img>
                    <img
                      className='ml-2 h-[40px] w-[40px]'
                      src='https://bizweb.dktcdn.net/100/415/445/themes/804210/assets/payment-4.svg?1708498874444'
                    ></img>
                    <img
                      className='ml-2 h-[40px] w-[40px]'
                      src='https://bizweb.dktcdn.net/100/415/445/themes/804210/assets/payment-2.svg?1708498874444'
                    ></img>
                    <img
                      className='ml-2 h-[40px] w-[40px]'
                      src='https://bizweb.dktcdn.net/100/415/445/themes/804210/assets/payment-3.svg?1708498874444'
                    ></img>
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </div>
        {/* chi tiết sản phẩm */}
        <div className='mx container mt-[30px] bg-[white] p-3'>
          <ProductionDetail />
        </div>
        {/* Gợi ý sản phấm*/}
        <Container className='mx container relative my-[20px]  border px-[0px]'>
          <div className='h-[361px] overflow-hidden bg-[#ffffff]'>
            <div className='relative'>
              <HeaderTag>Sản phẩm cùng loại</HeaderTag>
            </div>
            <div className='group h-full'>
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
      </div>
    </div>
  );
};
export default production;
