import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import React from 'react';

export default function LightAndDarkModeBtn() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant='outline'
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title='Toggle color scheme'
    >
      {dark ? (
        <div>
          <button className='m-2 text-[yellow]'>CLick</button>
        </div>
      ) : (
        <button className='m-2 text-[red]'>Close</button>
      )}
    </ActionIcon>
  );
}
