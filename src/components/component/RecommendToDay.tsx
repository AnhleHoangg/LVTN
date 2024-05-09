import React, { useEffect, useState } from 'react';
import HeaderTag from '@/components/HeaderTag';
import { ProductionItem } from '@/components/product/Product';
import { Container, Grid } from '@mantine/core';
//fireBase
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { ValueData } from '@/app/page';

const RecommendToDay = () => {
  const [dataInFirebase, setDataInFirebase] = useState<ValueData[]>();
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
    <Container className='mx container relative my-[20px] px-[0px] '>
      <HeaderTag itemLeft>Sản phẩm HOT hôm nay</HeaderTag>
      <div className='border-4 border-[red]'></div>
      <div className='py-[20px]'>
        <Grid>
          {dataInFirebase?.map((item: any) => (
            <Grid.Col key={item.value.UDK} span={2}>
              <div>
                <ProductionItem
                  data={item.value}
                  btnBuy
                  btnCart
                  type='product'
                />
              </div>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default RecommendToDay;
