import React from 'react';
import { Menu } from '@mantine/core';
import { FaAngleRight } from 'react-icons/fa';
import { useDisclosure } from '@mantine/hooks';

const Taskbar = () => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <ul className='!relative flex h-[45px] justify-between px-5 uppercase tracking-widest'>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Menu trigger='hover' openDelay={100} closeDelay={400} offset={0}>
          <Menu.Target>
            <li className='flex items-center'>
              <p> Sản phẩm hot</p>
              <div>
                <FaAngleRight className='ml-[2px] text-[20px]' />
              </div>
            </li>
          </Menu.Target>
          <Menu.Dropdown className='fixed !left-[10%] !top-[164px] rounded-none p-0'>
            <div className='flex h-[501px] w-[1504px] text-[14px]'>
              <Menu
                trigger='hover'
                openDelay={100}
                closeDelay={400}
                position='right-start'
                offset={16}
              >
                <div className='w-1/3 bg-gray-100'>
                  <ul className='px-4'>
                    <Menu.Target>
                      <a className='hover:text-[red]' href='/'>
                        <li className='my-auto flex h-[40px] items-center'>
                          <FaAngleRight className='ml-[2px] mr-[5px] text-[20px]' />
                          Sản phẩm hot
                        </li>
                      </a>
                    </Menu.Target>
                  </ul>
                </div>
                <Menu.Dropdown className=' m-0 !w-2/3 rounded-none p-0 !outline-none'>
                  <div className='!w-full'>
                    <a href='/'>
                      <img
                        className='h-[500px] !w-full object-contain'
                        src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0fac0648de560f97/62daaa95a87e203a9d23efc3/Talent_Factories_MU_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60'
                      ></img>
                    </a>
                  </div>
                </Menu.Dropdown>
                <div className='w-2/3'>
                  <a href='/'>
                    <img
                      className='h-[500px] w-full object-contain'
                      src='https://file1.dangcongsan.vn/data/0/images/2023/12/07/upload_2673/anh-mu-1.jpg'
                    ></img>
                  </a>
                </div>
              </Menu>
            </div>
          </Menu.Dropdown>
        </Menu>
      ))}
    </ul>
  );
};

export default Taskbar;
