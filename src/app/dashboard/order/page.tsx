'use client';
import { Card, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import {
  booleanFilterFn,
  DataGrid,
  dateFilterFn,
  highlightFilterValue,
  numberFilterFn,
  stringFilterFn,
} from 'mantine-data-grid';
import NavigationDashBoard from '@/components/layout/nav/NavigationDashBoard';
import ProductOrder, { orderProducts } from '@/components/product/ProductOrder';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import TextHeader from '@/components/TextHeader';

const demoData = [
  {
    id: 1,
    text: 'Khách hàng A',
    'Địa Chỉ': '123 Đường ABC, Thành phố X',
    'Số lượng': 2,
    'Ngày Giờ': new Date('2024-04-12T08:00:00'),
    Bán: true,
  },
  {
    id: 2,
    text: 'Khách hàng B',
    'Địa Chỉ': '456 Đường XYZ, Thành phố Y',
    'Số lượng': 1,
    'Ngày Giờ': new Date('2024-04-11T10:30:00'),
    Bán: false,
  },
];

const page = () => {
  const [dataInFirebase, setDataInFirebase] = useState<orderProducts>();

  useEffect(() => {
    const fetchData = async () => {
      const reference = query(
        collection(db, 'Order'),
        where('Data.state', '>=', false)
        // where('Data.productArr', 'array-contains', true)
      );
      const querySnapshot = await getDocs(reference);
      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        let dataMod = {
          ...doc.data().Data,
          id: doc.id,
        };
        data.push(dataMod);
      });
      setDataInFirebase(data);
    };
    fetchData();
  }, []);

  const arr = dataInFirebase?.map((item) => {
    return {
      id: item.UDK,
      text: item.phoneNumber,
      'Địa Chỉ': item.transport,
      'Số Loại Hàng': item.productArr.length || 1,
      'Ngày Giờ': item.timestamp.toDate(),
      Bán: item.state,
    };
  });
  console.log(arr);

  return (
    <Card className='flex flex-row'>
      <div className=' !h-full w-1/5'>
        <NavigationDashBoard />
      </div>
      <div className='block w-4/5'>
        <TextHeader>All Order</TextHeader>
        <DataGrid
          data={arr || []}
          striped
          highlightOnHover
          withGlobalFilter
          withPagination
          withColumnFilters
          withSorting
          withColumnResizing
          columns={[
            {
              accessorKey: 'text',
              header: 'Số điện thoại',
              filterFn: stringFilterFn,
              size: 300,
              cell: highlightFilterValue,
            },
            {
              accessorKey: 'Địa Chỉ',
              filterFn: stringFilterFn,
            },
            { accessorKey: 'Số Loại Hàng', filterFn: numberFilterFn },
            {
              accessorKey: 'Ngày Giờ',
              filterFn: dateFilterFn,
            },
            {
              accessorKey: 'Bán',
              filterFn: booleanFilterFn,
            },
          ]}
        />
        <Text
          size='xl'
          fw={900}
          variant='gradient'
          gradient={{ from: 'rgba(255, 0, 0, 1)', to: 'gray', deg: 90 }}
          className='mb-4 text-[30px]'
        >
          Order
        </Text>
        <ProductOrder />
      </div>
    </Card>
  );
};

export default page;
