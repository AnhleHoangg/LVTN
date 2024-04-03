import { PrimaryButton } from '@/components/Button';
import LightAndDarkModeBtn from '@/components/lightdark/LightAndDarkThemeBtn';
import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
  Popover,
  Menu,
  Text,
} from '@mantine/core';
import React from 'react';
import { CiFacebook, CiInstagram, CiSearch } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';

import { FaShoppingCart } from 'react-icons/fa';
import { useDisclosure } from '@mantine/hooks';
import Taskbar from '@/components/layout/header/Taskbar';

const HeaderPage = (props: { colorScheme: ColorScheme }) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    props.colorScheme
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  };
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          colors: {
            primary: [
              '#E7EBFD',
              '#BCC7FA',
              '#91A2F7',
              '#667EF4',
              '#3B5AF1',
              '#1136EE',
              '#0D2BBF',
              '#0A208F',
              '#07155F',
              '#030B30',
            ],
          },
          primaryColor: 'primary',
          primaryShade: {
            light: 4,
          },
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <Container className='mx container flex flex-col'>
          {/* <Container className='mx container flex items-center justify-between '>
            <div className='flex h-[34px] items-center py-[5px] text-[13px]'>
              <a className='mr-[2px] p-[4px]' href='/'>
                Kênh người bán
              </a>
              <div className='border-l-[1px] border-[black] p-[4px]'>
                <a className='p-[4px] pr-[0px]' href='/'>
                  Tải ứng dụng
                </a>
              </div>
              <div className='flex items-center border-l-[1px] border-[black] px-[4px]'>
                <p className='mr-[2px] p-[4px] pr-[0px]'>Kết nối</p>
                <a href='/facebook' className='mr-[2px] p-[4px] pr-[0px] '>
                  <CiFacebook />
                </a>
                <a href='/instagram' className='mr-[2px] p-[4px] pr-[0px] '>
                  <CiInstagram />
                </a>
              </div>
            </div>
            <div className='flex h-[34px] items-center py-[5px] text-[13px]'>
              <span className='mr-[10px] flex items-center '>
                <IoIosNotificationsOutline className='mr-[2px]' />
                Thông báo
              </span>
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
          </Container> */}
          <div className='mx container flex h-[85px] items-center justify-between py-[20px]'>
            <a href='/' className='pr-[40px]'>
              <img src='./images/logo/Shopee.jpg' className='h-[50px]'></img>
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
            <LightAndDarkModeBtn />
          </div>
          <div className='h-[40px]'>
            <Taskbar />
          </div>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default HeaderPage;
