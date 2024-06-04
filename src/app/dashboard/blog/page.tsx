'use client';
import React from 'react';
import { PrimaryButton } from '@/components/Button';
import EditorBlog from '@/components/editor/EditorBlog';
import { Card } from '@mantine/core';
import ListBlog from '@/components/ListBlog';

const DashboardBlog = () => {
  return (
    <div className='px-4'>
      <Card className='m-4 p-6'>
        <ListBlog />
      </Card>
      <Card className='relative m-4 p-6'>
        <EditorBlog />
      </Card>
    </div>
  );
};

export default DashboardBlog;
