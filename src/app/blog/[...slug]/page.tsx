import React from 'react';
import { Card, Image, Text} from '@mantine/core';
import { CiCalendar } from 'react-icons/ci';
import ListBlog from '@/components/ListBlog';
import TextHeader from '@/components/TextHeader';

const page = () => {
  return (
    <div className=''>
      <div className='container mx-auto'>
        <Card radius={'md'} className='m-4 p-10'>
          <div className='mx-auto'>
            <TextHeader>Blog hôm nay</TextHeader>
          </div>
          <span className='mb-[30px] flex h-[30px] items-center justify-center text-[14px]'>
            <span className='flex items-center border p-1'>
              <CiCalendar />
              <p>01/06/2024 - 09:00PM</p>
            </span>
            <span className='mx-1 border p-1'>Tác giả: Lê Hoàng Anh.</span>
          </span>
          <Text size='xl' lineClamp={4} className='border-b-2 pb-[20px]'>
            Sức hút của bóng đá là điều không ai có thể bàn cãi. Và cũng chính
            vì thế mà những đôi giày bóng đá luôn là cảm hứng bất bận cho các
            nhà thiết kế không ngừng sáng tạo nên những đôi giày bóng đá đa dạng
            về phong cách thiết kế, kiểu dáng và chất liệu.
          </Text>
          <Text
            size='xl'
            lineClamp={4}
            className='mt-[20px] border-b-2 pb-[20px]'
          >
            <Image
              radius='md'
              h={400}
              fit='contain'
              src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png'
            />
          </Text>
          <div className='my-[10px]'>
            <span>Xem Thếm:</span>
            <ul className='flex list-disc justify-between px-4'>
              <li className=''>
                <p>Những đôi giày đá bóng đắt nhất thế giới [Update 2021]</p>
              </li>
              <li className=''>
                <p>Những đôi giày đá bóng đắt nhất thế giới [Update 2021]</p>
              </li>
            </ul>
            <div className='mt-[10px] text-right'>
              <p className='text-primary italic'>
                Cần tư vấn chọn mua giày bóng đá, hãy để Gạo Sport đồng hành
                cùng các bạn!
              </p>
            </div>
          </div>
        </Card>
        <Card radius={'md'} className='m-4 p-10'>
          <ListBlog />
        </Card>
      </div>
    </div>
  );
};

export default page;
