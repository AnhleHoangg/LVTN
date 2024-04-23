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
import { db } from '@/firebaseConfig';
import RHFInputPicture from '@/components/hook-form/RHFInputPicture';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export const uploadAndReturnDownloadUrl = async (
  storage: any,
  folder: string,
  item: any
) => {
  const name = item?.name;
  const storageRef = ref(storage, `${folder}/${name}`);
  await uploadBytes(storageRef, item);
  const url = await getDownloadURL(ref(storage, `${folder}/${name}`));
  return url;
};
export const getDataFireBase = async (value: any) => {
  try {
    const docRef = await addDoc(collection(db, 'Product'), {
      value,
    });
    console.log(docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
export type Value = {
  nameitem: string;
  UDK: string;
  price: number;
  quanlity: number;
  material: string;
  category?: string;
  avatar: object;
  album: object[];
};
const ProducItemDashboard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const defaultValues = {
    nameitem: '',
    UDK: '',
    price: 0,
    quanlity: 0,
    material: '',
    category: '',
    avatar: {},
    album: [{}],
  };
  const LoginSchema = Yup.object().shape({
    nameitem: Yup.string().required('Nhập tên vào'),
    UDK: Yup.string().required('Nhập mã sản phẩm vào'),
    price: Yup.number().required('Nhập giá vào'),
    quanlity: Yup.number().required('Nhập số lượng vào'),
    material: Yup.string().required('Nhập loại vào'),
  });

  const methods = useForm<Value>({
    mode: 'onBlur',
    resolver: yupResolver<any>(LoginSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;

  const onSubmit = async (data: Value) => {
    const storage = getStorage();
    const { avatar, album, ...newObject } = data;
    const pictureAvatarAlbum = {
      avatar: data.avatar,
      album: data.album,
    };

    try {
      const avatarUrl = await uploadAndReturnDownloadUrl(
        storage,
        'avatar',
        pictureAvatarAlbum.avatar
      );

      const albumUrls = await Promise.all(
        pictureAvatarAlbum?.album.map(async (item: any) => {
          return await uploadAndReturnDownloadUrl(storage, 'album', item);
        })
      );

      const modifiedObject = {
        ...newObject,
        avatar: avatarUrl,
        album: albumUrls,
      };

      getDataFireBase(modifiedObject)
        .then((id) => {
          console.log(id);
        })
        .catch((error) => {
          console.error(error);
        });
      reset(defaultValues);
    } catch (error) {
      console.error('Error:', error);
    }
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
        let dataMod = {
          ...doc.data().value,
          id: doc.id,
        };
        data.push(dataMod);
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
        {dataInFirebase?.map((item?: any) => (
          <Grid.Col span={2}>
            <ProductionItem type='product' btnSettingProduction data={item} />
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
    </Card>
  );
};

export default ProducItemDashboard;
