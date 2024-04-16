'use client';
import React from 'react';
import { FilterTime, NavFilter } from '@/components/layout/nav/NavFilter';
import { Anchor, Breadcrumbs, Grid } from '@mantine/core';
import { ProductionItem } from '@/components/product/Product';

const PageItem = () => {
  const items = [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <div className='grid grid-cols-4'>
      <div className=' relative col-span-1'>
        <NavFilter />
      </div>
      <div className='col-span-3 bg-[white] px-4 py-6'>
        <Breadcrumbs>{items}</Breadcrumbs>
        <FilterTime />
        <ul>
          <Grid>
            {Array(9)
              .fill(null)
              .map(() => (
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                  <li>
                    <ProductionItem  type='product' btnBuy btnCart />
                  </li>
                </Grid.Col>
              ))}
          </Grid>
        </ul>
      </div>
    </div>
  );
};

export default PageItem;
