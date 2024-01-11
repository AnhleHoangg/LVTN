'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Container,
  Divider,
  Flex,
  MantineProvider,
  rem,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiError } from 'react-icons/bi';
import * as Yup from 'yup';

import { RHFTextField } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/FormProvider';
import RHFPasswordField from '@/components/hook-form/RHFPasswordField';
import { PATH_AUTH, PATH_DASHBOARD } from '@/routes/path';
import { PrimaryButton } from '@/components/Button';

export type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

export function Social() {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        colors: {
          primary: [
            '#E7EBFD',
            '#BCC7FA',
            '#91A2F7',
            '#667EF4',
            '#3B5AF1',
            '#1136EE',
            '#0D2BBF',
            '#0A208F',
            '#07155F',
            '#030B30',
          ],
        },
        primaryColor: 'primary',
        primaryShade: {
          light: 4,
        },
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div className='flex w-full flex-col'>
        <Divider
          className='w-full'
          label='Hoặc tiếp tục với'
          labelPosition='center'
          labelProps={{
            sx: {
              color: '#4C4E64',
              fontSize: '16px',
            },
          }}
          sx={(theme) => ({
            color: theme.colors.gray[5],
            bottom: rem(110),
          })}
        />
        <div className='mt-3 flex w-full justify-between'>
          <div
            className='border-light-border flex h-[55px] w-[100px] cursor-pointer items-center justify-center rounded-[5px] border'
            onClick={() => signIn('google')}
          >
            <img src='/images/icons/Google.svg' alt='google' />
          </div>
          <div className='border-light-border flex h-[55px] w-[100px] cursor-pointer items-center justify-center rounded-[5px] border'>
            <img
              src='/images/icons/Github.svg'
              alt='github'
              onClick={() => signIn('github')}
            />
          </div>
          <div className='border-light-border flex h-[55px] w-[100px] cursor-pointer items-center justify-center rounded-[5px] border'>
            <img
              src='/images/icons/Facebook.svg'
              alt='facebook'
              onClick={() => signIn('facebook')}
            />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState<string | null>(null);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email là bắt buộc')
      .email('Email không hợp lệ'),
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

  const onSubmit = async (data: FormValuesProps) => {
    const { email, password } = data;
    setLoading(true);
    const result: any = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: PATH_DASHBOARD.home,
    });
    if (result?.error) {
      setErrorLogin(result.error);
      setLoading(false);
    } else {
      reset(defaultValues);
      router.push(PATH_DASHBOARD.home);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {/* <AuthWrapper> */}
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
        <div className='flex h-full flex-col justify-between'>
          <div className='w-full'>
            <Flex justify='center' mb={45}>
              <Link href='/'>
                <Image src='/logo-96.png' alt='logo' width={80} height={80} />
              </Link>
            </Flex>
            <Flex direction='column' gap={16} mb={rem(80)}>
              <RHFTextField
                name='email'
                placeholder='Email'
                sx={{
                  '& input': {
                    height: rem(55),
                    borderRadius: rem(8),
                  },
                }}
              />
              <RHFPasswordField
                name='password'
                placeholder='Mật khẩu'
                styles={{
                  wrapper: {
                    '& input:focus': {
                      border: '0 !important',
                    },
                  },
                  input: {
                    height: rem(55),
                    borderRadius: rem(8),
                  },
                  innerInput: {
                    height: 'auto',
                  },
                }}
              />
              <Link href='/forgot-password' className='flex w-full justify-end'>
                <p className='text-light-text-primary text-[16px]'>
                  Quên mật khẩu?
                </p>
              </Link>
              <MantineProvider
                theme={{
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <PrimaryButton
                  type='submit'
                  className='mt-2 h-[55px]'
                  text='Đăng nhập'
                />
                {errorLogin && (
                  <Container
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      bottom: rem(285),
                      gap: rem(8),
                      color: '#FF3D71',
                      width: rem(326),
                      padding: rem(8),
                      borderRadius: rem(4),
                      fontSize: rem(12),
                    }}
                  >
                    <BiError size={20} />
                    <span>{errorLogin}</span>
                  </Container>
                )}
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
                    fontSize: rem(14),
                  }}
                >
                  <span className='text-light-text-primary text-[16px]'>
                    Chưa có tài khoản?
                  </span>
                  <Link
                    href={PATH_AUTH.register}
                    className='text-light-text-primary text-[16px] no-underline'
                  >
                    Đăng ký
                  </Link>
                </Container>
              </MantineProvider>
            </Flex>
          </div>
          <Social />
        </div>
      </Box>
      {/* </AuthWrapper> */}
    </FormProvider>
  );
};

export default Login;
