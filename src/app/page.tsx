'use client';

import * as React from 'react';
import { ColorScheme } from '@mantine/core';

import { AppProps } from 'next/app';

export default function HomePage(
  props: AppProps & { colorScheme: ColorScheme }
) {
  return <h1>Hello Lê Hoàng Anh</h1>;
}
