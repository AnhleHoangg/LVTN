'use client';
import { PrimaryButton, PrimaryOutlineButton } from '@/components/Button';
import { Card, Text } from '@mantine/core';
import React, { useState } from 'react';
import { ProductionItem } from '@/components/product/Product';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import Link from 'next/link';

const CartPage = () => {
  const product = useSelector((state: RootState) => state.product.arr);
  const number = useSelector((state: RootState) => state.product.number);
  const formattedNumber = number?.totalProduct.toLocaleString('vi-VN');

  return (
    <div className='mx container mx-auto mb-[10px]'>
      <Card
        className='mx container '
        shadow='sm'
        padding='lg'
        radius='md'
        withBorder
      >
        <Text
          size='xl'
          fw={900}
          variant='gradient'
          gradient={{ from: 'red', to: 'gray', deg: 90 }}
        >
          GIỎ HÀNG ({number.numberProduct} sản phẩm)
        </Text>
        <div className='mt-[20px] flex'>
          <div className='w-3/4 px-[5px]'>
            {product.map((item) => (
              <ProductionItem data={item} type='cart' />
            ))}
          </div>
          <div className='w-1/4'>
            <div className='flex justify-between border-b py-[20px] font-semibold'>
              <span>Thành Tiền: </span>
              <span className='mr-3'>{formattedNumber}đ</span>
            </div>
            <PrimaryButton
              className='mt-[10px] w-full'
              text='THANH TOÁN NGAY'
            ></PrimaryButton>
            <Link href='/'>
              <PrimaryOutlineButton
                className='mt-[10px] w-full'
                text='TIẾP TỤC MUA HÀNG'
              ></PrimaryOutlineButton>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartPage;
