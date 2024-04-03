'use client';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';

export default function LightAndDarkModeBtn() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <ActionIcon
        variant='outline'
        color={dark ? 'dark' : 'light'}
        onClick={() => toggleColorScheme()}
        title='Toggle color scheme'
      >
        {dark ? (
          <div>
            <button className='m-2'>
              <CiDark />
            </button>
          </div>
        ) : (
          <button className='m-2'>
            <CiLight />
          </button>
        )}
      </ActionIcon>
    )
  );
}
