import FormProvider from '@/components/hook-form/FormProvider';
import RHFInputPicture from '@/components/hook-form/RHFInputPicture';
import React from 'react';
import { useForm } from 'react-hook-form';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { PrimaryButton } from '@/components/Button';

type Value = {
  album: FileList;
};

const defaultValues = {};
export const UploadPicture = () => {
  const storage = getStorage();

  const methods = useForm<Value>({
    mode: 'onSubmit',
    defaultValues,
  });
  const { reset, handleSubmit } = methods;

  const onSubmit = (data: any) => {
    data.album?.map((item: any) => {
      const name = item.name;
      const storageRef = ref(storage, 'avatar/' + name);
      uploadBytes(storageRef, item).then(() => {
        getDownloadURL(ref(storage, 'avatar/' + name))
          .then((url) => {
            console.log(url);
          })
          .catch((error) => {
            console.error('Error getting download URL:', error);
          });
      });
    });
    reset(defaultValues);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-2'>
        <RHFInputPicture multiple label='Tải album sản phẩm' name='album' />
      </div>
      <PrimaryButton type='submit' text='Thêm'></PrimaryButton>
    </FormProvider>
  );
};
