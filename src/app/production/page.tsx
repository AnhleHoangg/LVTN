'use client';
import React, { useState } from 'react';
import { Breadcrumbs, Anchor } from '@mantine/core';
import { Grid } from '@mantine/core';
import { Rating } from '@mantine/core';
import { CiHeart } from 'react-icons/ci';
import * as Yup from 'yup';

import LayoutDefault from '@/components/layout/LayoutDefault.tsx/LayoutDefault';
import { SlideProductionCart } from '@/components/Slider/SliderShowItem';
import { listMediaSocial } from '@/components/mock-data';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import FormProvider from '@/components/hook-form/FormProvider';
import { RHFMutiSelect, RHFTextField } from '@/components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton, PrimaryOutlineButton } from '@/components/Button';
import { FaCartArrowDown, FaMinus, FaPlus } from 'react-icons/fa';
import RHFArea from '@/components/hook-form/RHFArea';
import { ProductionDetail } from '@/components/product/Product';
import { productionDetail } from '@/components/mock-data';

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
      <div className=' flex justify-center'>
        <div className='mx container'>
          <Breadcrumbs>{items}</Breadcrumbs>
        </div>
      </div>
      <div className='mt-[20px] flex flex-col items-center'>
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
                    <CiHeart className='font-bold text-[blue]' size={25} />
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
                    <div className='mb-[2px]  mr-[10px] border-b border-[blue]  text-[blue]'>
                      3.5
                    </div>
                    <Rating color='blue' value={3.5} fractions={2} />
                  </div>
                  <div className='flex border-r px-[10px]'>
                    <div className='mb-[2px]  mr-[10px] border-b border-[black]'>
                      2,4k
                    </div>
                    <div>Đánh Giá</div>
                  </div>
                  <div className='flex px-[10px]'>
                    <div className='mb-[2px]  mr-[10px]'>14,6K</div>
                    <div>Đã Bán</div>
                  </div>
                </div>
                <div>
                  <button>Tố cáo</button>
                </div>
              </div>
              {/* giá */}
              <div className='mt-[10px] rounded-md bg-[#f5f5f5] p-4'>
                <div className='text-[30px] text-[blue]'>
                  <span>d</span> 22.000
                </div>
              </div>
              {/* form bán hàng */}
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <table className='my-[20px]'>
                  <tbody>
                    <tr className='h-[58px]'>
                      <td className='w-[110px]'>
                        <div className='mx-2'>Chính sách trả hàng</div>
                      </td>
                      <td className='flex items-center'>
                        <img
                          className='mr-[5px] h-[20px]'
                          src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b69402e4275f823f7d47.svg'
                          alt='doitrahangmienphi'
                        ></img>
                        <div className='mr-[5px]'>Trả hàng 15 ngày </div>
                        <div className='mr-[5px] text-gray-200 '>
                          Đổi ý miễn phí
                        </div>
                        <div className='ml-[5px]'>
                          <HiOutlineQuestionMarkCircle />
                        </div>
                      </td>
                    </tr>
                    <tr className='h-[58px]'>
                      <td className='w-[110px]'>
                        <div className='mx-2'>Deal Sốc</div>
                      </td>
                      <td className=' flex h-[58px] items-center'>
                        <div className='mr-[5px]'>
                          <span className=' border-x-inherit bg-[yellow] p-[5px] text-[10px] text-[blue]'>
                            Mua kèm deal sốc
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
                        <FaCartArrowDown className='mr-[10px] text-[blue]' />
                      }
                      text='Thêm vào giỏ hàng'
                    />
                  </div>
                  <div className=''>
                    <PrimaryButton text='Mua ngay' />
                  </div>
                </div>
              </FormProvider>
            </Grid.Col>
          </Grid>
        </div>
        <div className='mx container mt-[50px] bg-[white] p-3'>
          <ProductionDetail ></ProductionDetail>
        </div>
      </div>
    </LayoutDefault>
  );
};
export default production;
