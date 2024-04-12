'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Container, Flex, MantineProvider, rem } from '@mantine/core';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { RHFTextField } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/FormProvider';
import { PATH_AUTH } from '@/routes/path';
import { PrimaryButton } from '@/components/Button';
import { Social } from '@/app/login/page';
import { useState } from 'react';
import * as Yup from 'yup';
import RHFPasswordField from '@/components/hook-form/RHFPasswordField';

const Register = () => {
  const [text, setText] = useState<string>('');

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('email là bắt buộc')
      .email('email không hợp lệ'),
    password: Yup.string()
      .required('Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu quá ngăn phải lớn hơn 8 ký tự')
      .matches(/[a-zA-Z]/, 'Mật khẩu phải có một chữ in hoa'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Mật khẩu xác nhận không khớp')
      .required('Xác nhận mật khẩu là bắt buộc'),
  });

  const defaultValues = {
    email: '',
    password: '',
    confirmpassword: '',
  };

  type FormValuesProps = {
    email: string;
    password: string;
    confirmpassword: string;
  };
  const methods = useForm<FormValuesProps>({
    mode: 'all',
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;
  

  const onSubmit = async (data: FormValuesProps) => {
    const { email, password } = data;
    // fetch api rồi đăng ký ở đây
  };
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
          <Flex className='mt-[50px]' direction='column' gap={16} mb={rem(80)}>
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
            <RHFPasswordField
              name='confirmpassword'
              placeholder='Nhập lại mật khẩu'
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
            <PrimaryButton
              type='submit'
              className='mt-2 h-[55px]'
              text='Đăng ký'
              disabled={!text}
              onClick={() => {
                console.log();
              }}
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
