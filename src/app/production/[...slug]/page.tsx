'use client';
import React, { useEffect, useState } from 'react';
import { FilterTime, NavFilter } from '@/components/layout/nav/NavFilter';
import { Anchor, Breadcrumbs, Grid } from '@mantine/core';
import { ProductionItem } from '@/components/product/Product';
import { ValueData } from '@/app/page';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

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
  const [dataInFirebase, setDataInFirebase] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Product'));
      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setDataInFirebase(data);
    };
    fetchData();
  }, []);
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-4'>
        <div className=' relative col-span-1'>
          <NavFilter />
        </div>
        <div className='col-span-3 bg-[white] px-4 py-6'>
          <Breadcrumbs>{items}</Breadcrumbs>
          <FilterTime />
          <Grid>
            {dataInFirebase?.map((item: any) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <ProductionItem
                  key={item.UDK}
                  type='product'
                  btnBuy
                  btnCart
                  data={item.value}
                />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default PageItem;
