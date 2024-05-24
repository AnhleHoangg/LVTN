import { ProductItem } from '@/components/product/Product';
import { db } from '@/firebaseConfig';
import { Card } from '@mantine/core';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

type orderProduct = {
  id: string;
  UDK: string;
  count: number;
  note: string;
  phoneNumber: string;
  productArray: ProductItem[];
  size: string;
  state: boolean;
  timestamp: any;
  transport: string;
}[];

const ProductOrder = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [dataInFirebase, setDataInFirebase] = useState<orderProduct>();
  useEffect(() => {
    const fetchData = async () => {
      const reference = collection(db, 'Order');
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
  return (
    <ul className='grid grid-cols-5 gap-4 text-[14px]'>
      {dataInFirebase?.map((item) => (
        <li key={item?.id} className='col-span-1'>
          <Card
            onClick={() => {
              open();
            }}
            shadow='sm'
            radius='md'
            withBorder
          >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAQgzsQ8YoxOrO-fM-Y86VyNYVyXSMDXDjsNrJcvLOA&s' />
            <ul className='mt-[10px] list-disc px-[10px]'>
              <li className='ml-[5px]'>SL: {item.count}</li>
              <li className='ml-[5px]'>
                <span className='ml-[2px]'>
                  Ngày : {item?.timestamp.toDate().getDate()} -{' '}
                  {item?.timestamp.toDate().getMonth() + 1} -{' '}
                  {item?.timestamp.toDate().getFullYear()}
                </span>
                <span className='ml-[5px]'>
                  Giờ: {item?.timestamp.toDate().getHours()}:
                  {item?.timestamp.toDate().getMinutes()}:
                  {item?.timestamp.toDate().getSeconds()}
                </span>
              </li>
              <li className='ml-[5px]'>Địa chỉ: {item.transport}</li>
            </ul>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default ProductOrder;
