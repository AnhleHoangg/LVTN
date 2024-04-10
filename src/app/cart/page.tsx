'use client';
import { PrimaryButton, PrimaryOutlineButton } from '@/components/Button';
import { Card, Text } from '@mantine/core';
import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';

const page = () => {
  const [count, setCount] = useState(1);
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
          GIỎ HÀNG (0 Sản phẩm)
        </Text>
        <div className='mt-[20px] flex'>
          <div className='w-3/4 px-[5px]'>
            <div className='flex w-full'>
              <img
                className='h-[239px] w-1/4 p-[10px]'
                src='https://i.pinimg.com/originals/30/b5/49/30b54999b098050158ed13a1ecdcaab0.jpg'
              ></img>
              <div className='flex h-fit w-3/4 items-center justify-between px-[10px] py-[5px]'>
                <span>Áo đấu MU 2009 Đỏ - S</span>
                <div>485.000đ</div>
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
                  <span className='border-y px-[20px] py-[10px]'>{count}</span>
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
                <div>
                  <IoCloseOutline size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/4'>
            <div className='flex justify-between border-b py-[20px] font-semibold'>
              <span>Tạm Tính: </span>
              <span>
                {count * 485000}
                <span className='ml-[2px] underline'>đ</span>
              </span>
            </div>
            <div className='mb-[10px] py-[20px] font-semibold'>
              <span>Thành Tiền:</span>
            </div>
            <PrimaryButton
              className='mt-[10px] w-full'
              text='THANH TOÁN NGAY'
            ></PrimaryButton>
            <PrimaryOutlineButton
              className='mt-[10px] w-full'
              text='TIẾP TỤC MUA HÀNG'
            ></PrimaryOutlineButton>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
