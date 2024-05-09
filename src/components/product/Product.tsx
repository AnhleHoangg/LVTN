import React, { useState } from 'react';
import { Container, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { productionDetail } from '@/components/mock-data';
import { PrimaryButton } from '@/components/Button';
import { BsCart2 } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import {
  addCart,
  deleteCart,
} from '@/lib/features/ShoppingCart/ShoppingCartSlice';
import { useDispatch } from 'react-redux';
import { IoCloseOutline } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { TbShoppingCartPlus } from 'react-icons/tb';

const PorductFiller = () => {
  return (
    <div className='flex w-[123px] flex-col items-center justify-center p-[10px]'>
      <div className=''>
        <img
          className=' h-[80px] w-[80px] rounded-full object-contain'
          src='https://cdn.boo.vn/media/catalog/product/1/_/1.0.02.3.22.002.223.23-11000032-bst-1_5.jpg'
        ></img>
      </div>
      <p className='mt-[10px] h-[40px] text-[13px]'>Thời Trang Nam</p>
    </div>
  );
};
export type ProductItem = {
  nameitem: string;
  UDK: string;
  id: string;
  price: number;
  quanlity: number;
  material: string;
  avatar: string;
  album: string[];
  quanlityCart: number;
};
const ProductionItem = ({
  data,
  type,
  btnBuy = false,
  btnCart = false,
  btnSettingProduction = false,
}: {
  data?: ProductItem;
  btnBuy?: boolean;
  btnCart?: boolean;
  btnSettingProduction?: boolean;
  type: 'flashSale' | 'product' | 'cart';
}) => {
  const [count, setCount] = useState(data?.quanlityCart || 1);
  const dispatch = useDispatch();
  const formattedNumber = data?.price.toLocaleString('vi-VN');
  const [opened, { open, close }] = useDisclosure(false);
  let buttonContent;
  switch (type) {
    case 'flashSale':
      buttonContent = (
        <div className='mt-[15px] border hover:drop-shadow-md'>
          <Container className=' w-[186px] px-[0] '>
            <div className=' relative transition '>
              <div className='p-[1px]'>
                <div className='relative'>
                  <span className='absolute right-0 top-0 bg-[yellow] px-[10px] text-[12px]'>
                    -50%
                  </span>
                  <img className='h-full w-[186px]' src={data?.avatar}></img>
                </div>
                <img
                  className='absolute top-0 h-[186px] w-full'
                  src='https://down-vn.img.susercontent.com/file/vn-50009109-25370a2a70652ec8b73f1d22907e58da'
                ></img>
              </div>
              <div className='flex justify-center'>
                <div className='mr-[10px] text-[14px] text-slate-300 line-through'>
                  {formattedNumber}
                </div>
                <div className='text-[red]'>90,000đ</div>
              </div>
              <div className='p-[10px]'>
                <PrimaryButton
                  className='w-full'
                  text=''
                  onClick={() => {
                    dispatch(addCart({ data }));
                  }}
                  endIcon={<TbShoppingCartPlus className='text-[white]' />}
                />
              </div>
            </div>
          </Container>
        </div>
      );
      break;
    case 'product':
      buttonContent = (
        <div className='hover:animate-moveUp animate-moveReverse group border border-black hover:border-[red]'>
          <div className='group-hover:block'>
            {btnCart && (
              <div className='absolute z-50 hidden p-[10px] group-hover:block'>
                <PrimaryButton
                  className='px-[20px]'
                  text=''
                  onClick={() => {
                    dispatch(addCart({ data }));
                  }}
                  startIcon={
                    <BsCart2 className='text-[16px] font-medium text-[white]' />
                  }
                />
              </div>
            )}
            {btnSettingProduction && (
              <div className='absolute z-50 hidden w-full p-2 group-hover:block'>
                <div className='flex w-full justify-between'>
                  <PrimaryButton
                    onClick={open}
                    className='px-[15px]'
                    text=''
                    startIcon={
                      <CiSettings className=' text-[16px] font-medium text-[white]' />
                    }
                  />
                  <Modal
                    opened={opened}
                    onClose={close}
                    title='Authentication'
                  ></Modal>
                  <PrimaryButton
                    className='px-[15px]'
                    text=''
                    onClick={async () => {
                      const id = data?.id;
                      if (id) {
                        await deleteDoc(doc(db, 'Product', id));
                      }
                    }}
                    startIcon={
                      <IoMdClose className='text-[16px] font-medium text-[white]' />
                    }
                  />
                </div>
              </div>
            )}
            <div className='p-[1px]'>
              <img
                className='h-[260px] w-full object-contain'
                src={data?.avatar}
              ></img>
            </div>
            <div className='p-[7px]'>
              <div className='mb-3 h-[20px] px-[5px]'>
                <p className='m-auto truncate text-[black]'>{data?.nameitem}</p>
              </div>
              <div className='flex justify-between'>
                <div className='mt-[5px] font-semibold text-[red] '>
                  {formattedNumber}đ
                </div>
                <div className='mt-[5px] font-semibold '>
                  Còn lại:
                  <span className='ml-2 text-[green]'>{data?.quanlity} SP</span>
                </div>
              </div>
            </div>
            {btnBuy && (
              <div className='p-[10px]'>
                <PrimaryButton className='w-full' text='Mua Ngay' />
              </div>
            )}
          </div>
        </div>
      );
      break;
    case 'cart':
      buttonContent = (
        <div className='flex w-full'>
          <img className='h-[25%] w-1/4 p-[10px]' src={data?.avatar}></img>
          <div className='flex h-fit w-3/4 items-center justify-between px-[10px] py-[5px]'>
            <span className='pr-[2px]'>{data?.nameitem}</span>
            <span className='pr-[2px]'>{formattedNumber}</span>
            <div className='my-[10px] flex w-fit'>
              <button
                className='border px-[2vh] py-[1vh]'
                onClick={(event) => {
                  event.preventDefault();
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                <FaMinus />
              </button>
              <span className='border-y px-[5vh] py-[2vh]'>{count}</span>
              <button
                className='border px-[2vh] py-[1vh]'
                onClick={(event) => {
                  event.preventDefault();
                  setCount(count + 1);
                }}
              >
                <FaPlus />
              </button>
            </div>
            <div className='hover:bg-[red] hover:text-[white]'>
              <IoCloseOutline
                onClick={() => {
                  dispatch(deleteCart({ data }));
                }}
                size={25}
              />
            </div>
          </div>
        </div>
      );
      break;
    default:
      buttonContent = null;
  }
  return <div>{buttonContent}</div>;
};

type ProductionDetails = {
  list: string;
  title: string;
};
const ProductionDetail = () => {};

export { PorductFiller, ProductionItem, ProductionDetail };
