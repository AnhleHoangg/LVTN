'use client';
import { PrimaryButton } from '@/components/Button';
import EditorBlog from '@/components/editor/EditorBlog';
import { Card } from '@mantine/core';
import React from 'react';

const DashboardBlog = () => {
  return (
    <div className='!max-w-none px-4'>
      <Card>
        <PrimaryButton text='Đăng Bài' className='mt-3' />
        <EditorBlog/>
      </Card>
    </div>
  );
};

export default DashboardBlog;
