import { PrimaryButton } from '@/components/Button';
import TextHeader from '@/components/TextHeader';
import ArticleBlog from '@/components/product/ArticleBlog';
import React from 'react';

const ListBlog = () => {
  return (
    <div>
      <div className='mb-4 flex justify-between border-b-2 pb-2'>
        <TextHeader>Hôm nay có gì?</TextHeader>
        <PrimaryButton text='Xem thêm' />
      </div>
      <div className='grid grid-cols-3'>
        <ArticleBlog />
      </div>
    </div>
  );
};

export default ListBlog;
