'use client';
import { Card, Text } from '@mantine/core';
import React from 'react';
import {
  booleanFilterFn,
  DataGrid,
  dateFilterFn,
  highlightFilterValue,
  numberFilterFn,
  stringFilterFn,
} from 'mantine-data-grid';
import NavigationDashBoard from '@/components/layout/nav/NavigationDashBoard';

const demoData = [
  {
    id: 1,
    text: 'Khách hàng A',
    'Loại Quần Áo': 'Áo sơ mi',
    Size: 'M',
    'Địa Chỉ': '123 Đường ABC, Thành phố X',
    'Số lượng': 2,
    'Ngày Giờ': new Date('2024-04-12T08:00:00'),
    Bán: true,
  },
  {
    id: 2,
    text: 'Khách hàng B',
    'Loại Quần Áo': 'Quần Jeans',
    Size: 'L',
    'Địa Chỉ': '456 Đường XYZ, Thành phố Y',
    'Số lượng': 1,
    'Ngày Giờ': new Date('2024-04-11T10:30:00'),
    Bán: false,
  },
  // Thêm các mục dữ liệu khác nếu cần
];

const page = () => {
  return (
    <Card className='flex'>
      <div className=' !h-full w-1/4'>
        <NavigationDashBoard />
      </div>
      <div className='block'>
        <Text
          size='xl'
          fw={900}
          variant='gradient'
          gradient={{ from: 'rgba(255, 0, 0, 1)', to: 'gray', deg: 90 }}
          className='mb-4 text-[30px]'
        >
          Đơn Hàng Của Tôi
        </Text>
        <DataGrid
          data={demoData}
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
              header: 'Khách hàng',
              filterFn: stringFilterFn,
              size: 300,
              cell: highlightFilterValue,
            },
            {
              header: 'Đơn Hàng',
              columns: [
                { accessorKey: 'Loại Quần Áo', filterFn: stringFilterFn },
                {
                  accessorKey: 'Size',
                  filterFn: stringFilterFn,
                },
              ],
            },
            {
              accessorKey: 'Địa Chỉ',
              filterFn: stringFilterFn,
            },
            { accessorKey: 'Số lượng', filterFn: numberFilterFn },
            {
              accessorKey: 'Ngày Giờ',
              cell: (cell) => cell.getValue<Date>()?.toLocaleDateString(),
              filterFn: dateFilterFn,
            },
            {
              accessorKey: 'Bán',
              filterFn: booleanFilterFn,
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default page;