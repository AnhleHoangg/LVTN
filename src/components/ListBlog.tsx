import { PrimaryButton } from '@/components/Button';
import TextHeader from '@/components/TextHeader';
import ArticleBlog from '@/components/product/ArticleBlog';
import { db } from '@/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

export interface Listblog {
  avatar: string;
  date: any;
  html: string;
  introBlog: string;
  nameBlog: string;
  id: string;
}

const ListBlog = () => {
  const [dataInFirebase, setDataInFirebase] = useState<Listblog[]>();
  useEffect(() => {
    const fetchData = async () => {
      const reference = collection(db, 'listBlog');
      // where('Data.productArr', 'array-contains', true)
      const querySnapshot = await getDocs(reference);
      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        let dataMod = {
          ...doc.data().listBlog,
          id: doc.id,
        };
        data.push(dataMod);
      });
      setDataInFirebase(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className='mb-4 flex justify-between border-b-2 pb-2'>
        <TextHeader>Hôm nay có gì?</TextHeader>
        <PrimaryButton text='Xem thêm' />
      </div>
      <div className='grid grid-cols-3'>
        {dataInFirebase?.map((item) => (
          <ArticleBlog key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
