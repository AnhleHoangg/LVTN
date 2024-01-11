'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Center,
  Container,
  Flex,
  MantineProvider,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import Link from 'next/link';
import router from 'next/router';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import { RHFTextField } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/FormProvider';
import { PATH_AUTH } from '@/routes/path';
import { PrimaryButton, PrimaryOutlineButton } from '@/components/Button';
import { FormValuesProps, Social } from '@/app/login/page';
import { useState } from 'react';
import * as Yup from 'yup';

const Register = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [text, setText] = useState<string>('');

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Sđt là bắt buộc').email('SĐt không hợp lệ'),
    password: Yup.string().required('Mật khẩu là bắt buộc'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;

  const onSubmit = async (data: FormValuesProps) => {};
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box
        className='shadow-md'
        sx={(theme) => ({
          borderRadius: 15,
          width: rem(467),
          height: rem(682),
          backgroundColor: theme.white,
          position: 'relative',
          zIndex: 10,
          padding: `${rem(30)} ${rem(40)}`,
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
        })}
      >
        <MantineProvider
          theme={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <Flex direction='column' gap={16} mb={rem(80)}>
            <RHFTextField
              name='Phone Number'
              placeholder='Phone Number'
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setText(e.target.value);
              }}
              sx={{
                '& input': {
                  height: rem(55),
                  borderRadius: rem(8),
                },
              }}
            />
            <Modal opened={opened} onClose={close} withCloseButton={false}>
              <MantineProvider theme={{ fontFamily: 'Inter, sans-serif' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: rem(80),
                    fontSize: rem(14),
                  }}
                >
                  <div className='mb-[20px] mt-[5px] text-center'>
                    Chúng tôi sẽ gửi mã xác minh qua Zalo đến (+84)
                    <br />
                    {phoneNumber}
                  </div>
                  <Flex justify={'center'} align={Center} gap={12}>
                    <PrimaryOutlineButton
                      type='submit'
                      className='h-[10px]'
                      text='Hủy'
                      textClassName='text-[12px]'
                      onClick={close}
                    />
                    <PrimaryOutlineButton
                      type='submit'
                      className='h-[10px]'
                      text='Khác'
                      textClassName='text-[12px]'
                    />
                    <PrimaryButton
                      type='submit'
                      className='h-[26px]'
                      text='Gửi mã Zalo'
                      textClassName='text-[12px]'
                      disabled={false}
                    />
                  </Flex>
                </Box>
              </MantineProvider>
            </Modal>
            <PrimaryButton
              type='submit'
              className='mt-2 h-[55px]'
              text='Tiếp theo'
              disabled={!text}
              onClick={open}
            />
            <div className='mt-[20px]'>
              <Social />
            </div>
            <Container
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: rem(8),
                height: rem(32),
                width: rem(326),
                padding: rem(8),
                borderRadius: rem(4),
                fontSize: rem(12),
                marginTop: rem(30),
              }}
            >
              <span className='text-light-text-primary text-[16px]'>
                Đã có tài khoản?
              </span>
              <Link
                href={PATH_AUTH.login}
                className='text-light-text-primary text-[16px] no-underline'
              >
                Đăng nhập
              </Link>
            </Container>
          </Flex>
        </MantineProvider>
      </Box>
    </FormProvider>
  );
};
export default Register;
