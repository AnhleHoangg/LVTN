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
import Countdown from '@/components/Countdown';
import HeaderTag from '@/components/HeaderTag';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/parallax';
import { Autoplay, Pagination, Parallax } from 'swiper/modules';

const production = () => {
  const [count, setCount] = useState(1);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('email là bắt buộc')
      .email('email không hợp lệ'),
    password: Yup.string()
      .required('Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu quá ngăn phải lớn hơn 8 ký tự')
      .matches(/[a-zA-Z]/, 'Mật khẩu phải có một chữ in hoa'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Mật khẩu xác nhận không khớp')
      .required('Xác nhận mật khẩu là bắt buộc'),
  });

  const defaultValues = {
    email: '',
    password: '',
    confirmpassword: '',
  };

  type FormValuesProps = {
    email: string;
    password: string;
    confirmpassword: string;
  };
  const methods = useForm<FormValuesProps>({
    mode: 'all',
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    const { email, password } = data;
    // fetch api rồi đăng ký ở đây
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
    <LayoutDefault>
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
                  <div>
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
                <table className='mb-[20px]'>
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
                            name='VanChuyen'
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
                            options={['xanh']}
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
                            onClick={() => {
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
                            onClick={() => {
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
                        <RHFArea name='demso'></RHFArea>
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
                    <PrimaryButton text='Mua ngay' />
                  </div>
                </div>
              </FormProvider>
              <div>
                <span>Gọi điện để được tư vấn:</span>
                <a className='ml-[10px] text-[25px] text-[red]' href='tel'>
                  0927993249
                </a>
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
    </LayoutDefault>
  );
};
export default production;
