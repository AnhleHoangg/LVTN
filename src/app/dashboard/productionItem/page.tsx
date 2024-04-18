'use client';
import { PrimaryButton } from '@/components/Button';
import { ProductionItem } from '@/components/product/Product';
import { Card, Grid, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import FormProvider from '@/components/hook-form/FormProvider';
import { RHFMutiSelect, RHFTextField } from '@/components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { UploadPicture } from '@/components/handle/upload-picture/UploadPicture';
import RHFInputPicture from '@/components/hook-form/RHFInputPicture';

const ProducItemDashboard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const defaultValues = {
    nameitem: '',
    UDK: '',
    price: 0,
    quanlity: 0,
    material: '',
    category: '',
  };

  const LoginSchema = Yup.object().shape({
    nameitem: Yup.string().required('Nhập tên vào'),
    UDK: Yup.string().required('Nhập mã sản phẩm vào'),
    price: Yup.number().required('Nhập giá vào'),
    quanlity: Yup.number().required('Nhập số lượng vào'),
    material: Yup.string().required('Nhập loại vào'),
  });
  type Value = {
    nameitem: string;
    UDK: string;
    price: number;
    quanlity: number;
    material: string;
    category?: string;
    // file?: FileList;
  };
  const methods = useForm<Value>({
    mode: 'onBlur',
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;

  const getDataFireBase = async (value: Value) => {
    try {
      const docRef = await addDoc(collection(db, 'Product'), {
        value,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  const onSubmit = async (data: Value) => {
    getDataFireBase(data);
    console.log(data);
    // reset(defaultValues);
  };

  type ValueData = {
    nameitem: string;
    UDK: string;
    price: number;
    quanlity: number;
    material: string;
  }[];
  const [dataInFirebase, setDataInFirebase] = useState<ValueData>();
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
    <Card className='relative'>
      <Text
        fw={900}
        variant='gradient'
        gradient={{ from: 'rgba(255, 0, 0, 1)', to: 'gray', deg: 90 }}
        className='mx-3 text-[26px]'
      >
        Tất cả hàng hóa
      </Text>
      <Grid className='mt-[20px]'>
        {dataInFirebase?.map((item: any) => (
          <Grid.Col span={2}>
            <ProductionItem
              type='product'
              btnSettingProduction
              data={item.value}
            />
          </Grid.Col>
        ))}
      </Grid>
      <PrimaryButton
        onClick={open}
        className='absolute right-4 top-4'
        text='Thêm Sản Phẩm'
        endIcon={<FaPlus />}
      ></PrimaryButton>
      {/* Modal thêm sản phẩm */}
      <Modal opened={opened} onClose={close} title='Thêm sản phẩm'>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className='p-4'>
            <div className='mb-[10px]'>
              <div className='mb-[10px]'>
                <span>Tên sản phẩm </span>
                <RHFTextField name='nameitem' placeholder='Nhập tên sản phẩm' />
              </div>
              <div className=''>
                <span>Mã sản phẩm</span>
                <RHFTextField name='UDK' placeholder='Mã sản phẩm' />
              </div>
            </div>
            <div className='mb-[10px] flex'>
              <div className='mr-2'>
                <span>Giá Tiền</span>
                <RHFTextField name='price' placeholder='Giá tiền' />
              </div>
              <div>
                <span>Số Lượng</span>
                <RHFTextField name='quanlity' placeholder='Số lượng' />
              </div>
            </div>
            <div className='mb-[10px]'>
              <span>Chất liệu </span>
              <RHFTextField name='material' placeholder='Loại Vải' />
            </div>
            <div className='mb-[10px]'>
              <span>Danh mục</span>
              <RHFMutiSelect
                type='select'
                name='category'
                options={['CLB', 'Keep&Fly']}
                placeholder='Loại Vải'
              />
            </div>
            <div className='mt-3'>
              <div className='mb-2'>
                <RHFInputPicture label='Tải ảnh đại diện' name='avatar' />
              </div>
              <div className='mb-2'>
                <RHFInputPicture
                  multiple
                  label='Tải album sản phẩm'
                  name='album'
                />
              </div>
            </div>
          </div>
          <PrimaryButton
            type='submit'
            text='Thêm'
            endIcon={<FaPlus />}
          ></PrimaryButton>
        </FormProvider>
      </Modal>
      <UploadPicture />
    </Card>
  );
};

export default ProducItemDashboard;
