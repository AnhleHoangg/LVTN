import React from 'react';
import { Menu } from '@mantine/core';
import { FaAngleRight } from 'react-icons/fa';

type Taskbarname = {
  title: string;
  list: {
    title: string;
    src: string;
  }[];
}[];

const Taskbar = (props: { data: Taskbarname }) => {
  return (
    <ul className='!relative flex h-[45px] justify-between px-5 uppercase tracking-widest '>
      {props.data.map((item) => (
        <Menu trigger='hover' openDelay={100} closeDelay={400} offset={0}>
          <Menu.Target>
            <li className='flex items-center'>
              <p>{item.title}</p>
              <div>
                <FaAngleRight className='ml-[2px] text-[20px]' />
              </div>
            </li>
          </Menu.Target>
          <Menu.Dropdown className='fixed !left-[10%] !top-[164px] rounded-none bg-gray-100 p-0'>
            <div className=' flex h-[501px] w-[1480px] text-[14px]'>
              <div className='flex w-full flex-col'>
                {item.list.map((item) => (
                  <Menu
                    trigger='hover'
                    openDelay={100}
                    closeDelay={200}
                    position='right-start'
                    offset={20}
                  >
                    <div className='!relative w-1/3 bg-gray-100'>
                      <ul className='px-4'>
                        <Menu.Target>
                          <a className=' hover:text-[red]' href='/'>
                            <li className='my-auto flex h-[40px] items-center'>
                              <FaAngleRight className='ml-[2px] mr-[5px] text-[20px]' />
                              {item.title}
                            </li>
                          </a>
                        </Menu.Target>
                      </ul>
                    </div>
                    <Menu.Dropdown className='fixed !top-[164px] m-0 w-2/3 rounded-none p-0 !outline-none'>
                      <div className='!w-full'>
                        <a href='/'>
                          <img
                            className='h-[500px] !w-full object-contain'
                            src={item.src}
                          ></img>
                        </a>
                      </div>
                    </Menu.Dropdown>
                  </Menu>
                ))}
              </div>
            </div>
          </Menu.Dropdown>
        </Menu>
      ))}
    </ul>
  );
};

export default Taskbar;
