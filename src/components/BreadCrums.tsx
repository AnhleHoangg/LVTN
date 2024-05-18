import { PATH_DASHBOARD } from '@/routes/path';
import Link from 'next/link';
import React from 'react';

const BreadCrums = ({ slug }: { slug?: string }) => {
  return (
    <div className='text-primary'>
      <Link className='hover:underline' href={PATH_DASHBOARD.home}>
        <span>Home </span>
      </Link>
      <span>/ </span>
      <Link className='hover:underline' href={PATH_DASHBOARD.product}>
        <span>Product </span>
      </Link>
      <span>/ </span>
      <span className='hover:underline'>{slug}</span>
    </div>
  );
};

export default BreadCrums;
