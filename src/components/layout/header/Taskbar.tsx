import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { PrimaryButton } from '@/components/Button';
import { Container, Popover, Menu, Text } from '@mantine/core';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';

type Taskbarname = {
  title: string;
  list: {
    title: string;
    src: string;
  }[];
}[];

const TaskbarMenuSelect = (props: { data: Taskbarname }) => {
  return (
    <ul className='!relative flex h-[5vh] justify-between px-5 font-medium uppercase tracking-widest '>
      {props.data.map((item) => (
        <Menu
          key={item.title}
          trigger='hover'
          openDelay={100}
          closeDelay={200}
          offset={0}
        >
          <Menu.Target>
            <li className='flex items-center text-[white]'>
              <p>{item.title}</p>
              <FaAngleRight className='ml-[2px] text-[20px]' />
            </li>
          </Menu.Target>
          <Menu.Dropdown className=' w-[50%] rounded-none bg-gray-100'>
            <div className=' w-[full] bg-gray-100  text-[14px]'>
              <Menu.Item>
                {item.list.map((item) => (
                  <Menu
                    trigger='hover'
                    openDelay={100}
                    closeDelay={150}
                    position='right-start'
                    offset={15}
                  >
                    <ul className='px-4'>
                      <Menu.Target>
                        <a className=' uppercase hover:text-[red]' href='/'>
                          <li className='my-auto flex h-[40px] items-center font-medium'>
                            <FaAngleRight className='ml-[2px] mr-[5px] text-[20px] ' />
                            {item.title}
                          </li>
                        </a>
                      </Menu.Target>
                    </ul>
                    <Menu.Dropdown className='!block w-[full] rounded-none p-0 !outline-none'>
                      <div className='!w-full'>
                        <a href='/'>
                          <img
                            className='h-[50vh] !w-[full] object-cover'
                            src={item.src}
                          ></img>
                        </a>
                      </div>
                    </Menu.Dropdown>
                  </Menu>
                ))}
              </Menu.Item>
            </div>
          </Menu.Dropdown>
        </Menu>
      ))}
    </ul>
  );
};

const TaskbarContact = () => {
  return (
    <Container className='container flex h-[5vh] items-center justify-between font-semibold text-[white]'>
      <div className='flex items-center text-[13px]'>
        <a className='mr-[2px] px-[4px]' href='/'>
          Hotline: 0927 993 249
        </a>
        <span className='border-l-[1px] p-[4px]'>
          <a className='p-[4px] pr-[0px]' href='/'>
            Tìm của hàng
          </a>
        </span>
        <span className='flex items-center border-l-[1px] px-[4px]'>
          <p className='mr-[2px] p-[4px] pr-[0px]'>Liên Hệ hợp tác</p>
          <a href='/facebook' className='mr-[2px] p-[4px] pr-[0px] '>
            <CiFacebook />
          </a>
          <a href='/instagram' className='mr-[2px] p-[4px] pr-[0px] '>
            <CiInstagram />
          </a>
        </span>
      </div>
      <div className='flex items-center py-[5px] text-[13px]'>
        <span className='mr-[10px] flex items-center'>
          <HiOutlineQuestionMarkCircle className='mr-[2px]' />
          Hỗ trợ
        </span>
        <span className='mr-[10px] flex items-center'>
          <AiOutlineGlobal className='mr-[2px]' />
          Tiếng việt
          <IoMdArrowDropdown className='ml-[2px]' />
        </span>
        <div className='mx-2 flex rounded-xl'>
          <div className='mr-[2px]'>
            <img src='/'></img>
          </div>
          <div className='font-bold'>Lê Hoàng Anh</div>
        </div>
      </div>
    </Container>
  );
};

import { useDisclosure } from '@mantine/hooks';

const SearchAndCart = () => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <div className='mx container flex h-[10vh] items-center justify-between py-[20px]'>
      <a href='/' className='tex-[35px] pr-[40px] uppercase text-[white]'>
        Gạo Sport
      </a>
      <form className='flex h-[40px] w-[840px] justify-between rounded-sm bg-[white] p-[5px]	'>
        <div className='flex w-full justify-around'>
          <Popover width='target' position='bottom' shadow='md'>
            <Popover.Target>
              <input
                onFocus={open}
                onBlur={close}
                className='mr-[5px] w-[750px] border-0 px-[10px] focus:outline-none'
                placeholder='Tìm sản phẩm, thương hiệu, và tên shop'
              ></input>
            </Popover.Target>
            <Popover.Dropdown>Hello</Popover.Dropdown>
          </Popover>
          <PrimaryButton
            isOrginalPadding={false}
            type='button'
            className='  p-[12px]'
            startIcon={
              <CiSearch
                className='text-center
               text-[14px] text-[white]'
              />
            }
          ></PrimaryButton>
        </div>
      </form>
      <Menu
        position='bottom-end'
        trigger='hover'
        openDelay={100}
        closeDelay={400}
        arrowSize={10}
        withArrow
        width={400}
      >
        <Menu.Target>
          <a href='/'>
            <FaShoppingCart className='text-[26px] text-[white]' />
          </a>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Giỏ Hàng</Menu.Label>
          {
            <div className='flex h-[400px] items-center justify-center font-bold'>
              <Text size={'xl'}> Chưa có sản phẩm nào !</Text>
            </div>
          }
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export { TaskbarMenuSelect, TaskbarContact, SearchAndCart };
