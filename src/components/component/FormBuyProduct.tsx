'use client';
import React, { useState } from 'react';
import { Grid } from '@mantine/core';
import { Rating } from '@mantine/core';
import * as Yup from 'yup';

import { SlideProductCart } from '@/components/Slider/SliderShowItem';
import FormProvider from '@/components/hook-form/FormProvider';
import { RHFMutiSelect, RHFTextField } from '@/components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton, PrimaryOutlineButton } from '@/components/Button';
import { FaCartArrowDown, FaMinus, FaPlus } from 'react-icons/fa';
import RHFArea from '@/components/hook-form/RHFArea';
import 'swiper/css';
import 'swiper/css/parallax';
import { ProductItem } from '@/components/product/Product';
import { useDispatch } from 'react-redux';
import { addCart } from '@/lib/features/ShoppingCart/ShoppingCartSlice';

const FormBuyProduct = ({ data }: { data?: ProductItem }) => {
  const [count, setCount] = useState(1);
  const LoginSchema = Yup.object().shape({
    note: Yup.string().required('Nên điền ghi chú để nhận đồ hợp ý nhé!'),
    transport: Yup.string().required('Địa chỉ là bắt buộc'),
    size: Yup.string().required('Chưa chon size'),
    phoneNumber: Yup.string()
      .nullable()
      .matches(/^[0-9]+$/, 'Chỉ được có số!')
      .min(10, 'SĐT ít nhất 10 số nhé!')
      .max(15, 'Không thể vượt quá 15 số')
      .required('Nhập sđt để nhận hàng nhé :)'),
  });

  const defaultValues = {
    note: '',
    transport: '',
    size: '29',
    count: 1,
    phoneNumber: '',
  };

  type FormValuesProps = {
    size: string;
    transport: string;
    note: string;
    count?: number;
    phoneNumber: string;
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
  const formattedNumber = data?.price.toLocaleString('vi-VN');
  const onSubmit = (data: any) => {
    let Data = updateFormData(data, count);
    reset(defaultValues);
    setCount(1);
  };
  const dispatch = useDispatch();
  return (
    <div className='mx container bg-[white] p-3'>
      <Grid>
        {/* image production */}
        <Grid.Col span={4}>
          <div className='mr-[10px]'>
            <SlideProductCart data={data?.album} />
          </div>
        </Grid.Col>
        <Grid.Col span={8}>
          <div className='mb-[20px] text-[25px] font-medium'>
            {data?.nameitem}
          </div>
          {/* Rating start and list buy */}
          <div className='flex justify-between px-[10px]'>
            <div className='flex'>
              <div className='flex border-r px-[10px]'>
                <div className='border-primary  text-primary mb-[2px] mr-[10px]  border-b'>
                  5.0
                </div>
                <Rating color='red' value={5} fractions={2} />
              </div>
              <div className='flex px-[10px]'>
                <div className='mb-[2px]  mr-[10px]'>14,6K</div>
                <div>Đã Bán</div>
              </div>
              <div className='px-[5px]'>
                Mã Sản Phẩm :
                <span className='ml-[5px] font-semibold italic '>
                  {data?.UDK}
                </span>
              </div>
            </div>
          </div>
          {/* giá */}
          <div className='mt-[10px] rounded-md bg-[#f5f5f5] p-4'>
            <div className='text-primary text-[30px]'>
              <span>{formattedNumber}đ</span>
            </div>
            <div className='flex items-center'>
              <div className='mx-2'>Tình Trạng:</div>
              <span className=' mr-[5px] p-[5px] text-[green]'>
                {data?.quanlity} sản phẩm.
              </span>
            </div>
          </div>
          {/* form bán hàng */}
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <table className='mb-[20px] w-2/3'>
              <tbody>
                <tr className='h-[58px]'>
                  <td className='mx-2 w-[110px]'>Vận Chuyển</td>
                  <td className='my-[10px]'>
                    <RHFTextField
                      name='transport'
                      placeholder='Địa chỉ nhận hàng'
                    ></RHFTextField>
                  </td>
                </tr>
                <tr className='h-[58px]'>
                  <td className='mx-2 w-[110px]'>Số điện thoại</td>
                  <td className='my-[10px]'>
                    <RHFTextField
                      name='phoneNumber'
                      placeholder='Địa chỉ nhận hàng'
                    ></RHFTextField>
                  </td>
                </tr>
                <tr className='h-[58px]'>
                  <td className=' mx-2 w-[110px]'>Size</td>
                  <td>
                    <RHFMutiSelect
                      className='w-[185px]'
                      name='size'
                      options={['29', '30', '40']}
                      placeholder='kk'
                      type='select'
                    ></RHFMutiSelect>
                  </td>
                </tr>
                <tr className='h-[58px]'>
                  <td className='w-[110px]'>Số Lượng</td>
                  <td className='my-[10px] flex w-fit'>
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
                  onClick={() => {
                    dispatch(addCart({ data }));
                  }}
                  rightIcon={
                    <FaCartArrowDown className='text-primary mr-[10px]' />
                  }
                  text='Thêm vào giỏ hàng'
                />
              </div>
              <div className=''>
                <PrimaryButton type='submit' text='Mua ngay' />
              </div>
            </div>
          </FormProvider>
          <div className='item flex items-center'>
            <p className='my-auto'>Gọi điện để được tư vấn:</p>
            <a
              className='text-primary ml-[5px] text-[16px] font-semibold'
              href='tel:0927993249'
            >
              0927993249
            </a>
          </div>
          <div className='mt-[10px] flex items-center'>
            <p className='mr-2'>Chất nhận mọi thanh toán:</p>
            <div className='flex'>
              <img
                className='ml-4 h-[30px] w-[30px]'
                src='https://bizweb.dktcdn.net/100/415/445/themes/804210/assets/payment-1.svg?1708498874444'
              ></img>
              <img
                className='ml-4 h-[30px] w-[30px]'
                src='https://bizweb.dktcdn.net/100/415/445/themes/804210/assets/payment-4.svg?1708498874444'
              ></img>
              <img
                className='ml-4 h-[30px] w-[30px]'
                src='https://bizweb.dktcdn.net/100/415/445/themes/804210/assets/payment-2.svg?1708498874444'
              ></img>
              <img
                className='ml-4 h-[30px] w-[30px]'
                src='https://bizweb.dktcdn.net/100/415/445/themes/804210/assets/payment-3.svg?1708498874444'
              ></img>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default FormBuyProduct;
