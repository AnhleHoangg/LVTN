'use client';
import { PrimaryButton } from '@/components/Button';
import { ProductionItem } from '@/components/product/Product';
import { Card, Grid, Text } from '@mantine/core';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import FormProvider from '@/components/hook-form/FormProvider';
import { RHFTextField } from '@/components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import RHFInputPicture from '@/components/hook-form/RHFInputPicture';

const ProducItemDashboard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const defaultValues = {
    nameitem: '',
    UDK: '',
    price: 0,
    quanlity: 0,
    material: '',
  };

  const LoginSchema = Yup.object().shape({
    nameitem: Yup.string().required('Nhập tên vào'),
    UDK: Yup.string().required('Nhập mã sản phẩm vào'),
    price: Yup.number().required('Nhập giá vào'),
    quanlity: Yup.number().required('Nhập số lượng vào'),
    material: Yup.string().required('Nhập loại vào'),
    // file: Yup.mixed().test(
    //   'required',
    //   'Please select a file',
    //   (files: any) => (files as FileList)?.length > 0
    // ),
  });
  type Value = {
    nameitem: string;
    UDK: string;
    price: number;
    quanlity: number;
    material: string;
    file?: FileList;
  };
  const methods = useForm<Value>({
    mode: 'onBlur',
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;

  const onSubmit = async (data: Value) => {
    console.log(data.nameitem);
    console.log(data);
    reset(defaultValues);
  };
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
        <Grid.Col span={2}>
          <ProductionItem type='product' btnSettingProduction />
        </Grid.Col>
      </Grid>
      <PrimaryButton
        onClick={open}
        className='absolute right-4 top-4'
        text='Thêm Sản Phẩm'
        endIcon={<FaPlus />}
      ></PrimaryButton>
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
          <PrimaryButton
            type='submit'
            text='Thêm'
            endIcon={<FaPlus />}
          ></PrimaryButton>
        </FormProvider>
      </Modal>
    </Card>
  );
};

export default ProducItemDashboard;
