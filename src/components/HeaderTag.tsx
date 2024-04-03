import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const HeaderTag = ({
  children,
  itemLeft = false,
  className,
  textclassName,
}: {
  children: React.ReactNode;
  itemLeft?: boolean;
  className?: string;
  textclassName?: string;
}) => {
  return (
    <div className='flex items-center'>
      <div
        className={`${
          className || ''
        } flex h-[61px] w-full items-center justify-between border-b bg-[#f5f5f5] px-[20px] text-[16px]  text-[red] `}
      >
        <div className={`${textclassName || ''} uppercase`}>{children}</div>
        {itemLeft && (
          <a href='/'>
            <span className='normal flex items-center'>
              Xem Tất Cả
              <IoIosArrowForward className='p-auto ml-[5px]' />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default HeaderTag;
