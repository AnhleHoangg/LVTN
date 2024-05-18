import React, { useEffect, useState } from 'react';
import { Container } from '@mantine/core';

import { taskbarname } from '@/components/mock-data';
import { useWindowScroll } from '@mantine/hooks';
import {
  TaskbarMenuSelect,
  TaskbarContact,
  SearchAndCart,
} from '@/components/layout/header/Taskbar';

const HeaderPage = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    handleScroll();
  }, [scroll.y]);

  const handleScroll = () => {
    if (scroll.y > 0) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <Container className='container flex flex-col'>
      <div className='bg-darkenprimary '>{showNav && <TaskbarContact />}</div>
      <SearchAndCart />
      {showNav && <TaskbarMenuSelect data={taskbarname} />}
    </Container>
  );
};

export default HeaderPage;
