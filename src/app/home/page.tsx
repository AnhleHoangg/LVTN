'use client';

import * as React from 'react';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';

import LightAndDarkModeBtn from '@/components/lightdark/LightAndDarkThemeBtn';
import { AppProps } from 'next/app';
import { PrimaryButton } from '@/components/Button';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PATH_AUTH } from '@/routes/path';

export default function HomePage(
  props: AppProps & { colorScheme: ColorScheme }
) {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) {
    router.push(PATH_AUTH.login);
  }
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    props.colorScheme
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  };
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
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
        <h1>Page HomePage</h1>
        <LightAndDarkModeBtn />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
