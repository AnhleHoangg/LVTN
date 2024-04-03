import React from 'react';
import { Card, Menu } from '@mantine/core';
import { FaAngleRight } from 'react-icons/fa';

const Taskbar = () => {
  return (
    <ul className='flex justify-between px-5 uppercase tracking-widest'>
      <Menu
        trigger='hover'
        openDelay={100}
        closeDelay={400}
        position='bottom-start'
        offset={15}
      >
        <Menu.Target>
          <li className='flex items-center'>
            Sản phẩm hot
            <div>
              <FaAngleRight className='ml-[2px] text-[20px]' />
            </div>
          </li>
        </Menu.Target>

        <Menu.Dropdown className='rounded-none p-0'>
          <div className='flex h-[500px] w-[1200px] text-[14px]'>
            <div className='w-1/3 bg-gray-100'>
              <ul>
                <Menu
                  trigger='hover'
                  openDelay={100}
                  closeDelay={400}
                  position='right-start'
                  offset={15}
                >
                  <Menu.Target>
                    <a className='hover:text-[red]' href='/'>
                      <li className='my-auto flex h-[40px] items-center'>
                        <FaAngleRight className='ml-[2px] mr-[5px] text-[20px]' />
                        Sản phẩm hot
                      </li>
                    </a>
                  </Menu.Target>
                  <Menu.Dropdown className='rounded-none p-0'>
                    <img
                      className='mx-auto my-auto'
                      src='https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-02/Manchester%20United%20crest%202020.jpg?h=920929c4&itok=NucpnZSp'
                    ></img>
                  </Menu.Dropdown>
                </Menu>

                <li className='my-auto flex h-[40px] items-center'>
                  <FaAngleRight className='ml-[2px] mr-[5px] text-[20px]' />
                  Sản phẩm hot
                </li>
              </ul>
            </div>
            <div className='w-2/3'>
              <img
                className='mx-auto my-auto h-[500px] w-[700px] object-contain'
                src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0fac0648de560f97/62daaa95a87e203a9d23efc3/Talent_Factories_MU_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60'
              ></img>
            </div>
          </div>
        </Menu.Dropdown>
      </Menu>

      <li>Manchester United</li>
      <li>Quần áo thể thao</li>
      <li>Phụ Kiện</li>
      <li>Quần áo thể thao khác</li>
    </ul>
  );
};

export default Taskbar;
