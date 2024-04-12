import React from 'react';
import {
  danhMucChamSocKhach,
  danhMucVeShopee,
  donViVanChuyen,
  listChinhSach,
  theoDoiChungToi,
} from '@/components/mock-data';
import { Grid } from '@mantine/core';

export const Footter = () => {
  return (
    <div className='text-[white]'>
      <Grid className='border-b'>
        <Grid.Col span={3}>
          <div>
            <div className='mb-[20px] p-1 uppercase'>Chắm sóc khách hàng</div>
            <ul>
              {danhMucChamSocKhach.map((item, index) => (
                <li
                  className='mb-[12px] text-[14px] hover:text-[red]'
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div>
            <div className='mb-[20px] p-1 uppercase'>Gạo Sport</div>
            <ul>
              {danhMucVeShopee.map((item, index) => (
                <li
                  key={index}
                  className='mb-[12px] text-[14px] hover:text-[red]'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className='mb-[20px]'>
            <div className='mb-[20px]'>
              <div className='mb-[20px] uppercase'> Đơn Vị Vận Chuyển</div>
              <div className='block'>
                {donViVanChuyen.map((item, index) => (
                  <span
                    key={index}
                    className='mx-2 inline-block rounded-sm border p-[5px] shadow-lg '
                  >
                    <img className='h-[22px] w-[52px]' src={item}></img>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className='mb-[20px] uppercase'>Theo Dõi Chúng Tôi Trên</div>
          <ul>
            {theoDoiChungToi.map((item, index) => (
              <li
                className='mb-[8px] flex items-center hover:text-[red]'
                key={index}
              >
                <span className='mr-[8px] text-[16px]'>
                  <item.icon />
                </span>
                <span>{item.tittle}</span>
              </li>
            ))}
          </ul>
          <div>
            <div className='mb-[20px] uppercase'>Fanpage</div>
            <a href='/'>
              <img
                className='h-[120px] w-full object-cover '
                src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/384781164_187908367670948_2676517665423334773_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGAcbgoM7zD8xUf9QSEpEmMsTyHWSE5hi2xPIdZITmGLVkBeOufTh-4w3Hbvf2PtF49zhJICAz02jB5xVPjDu6i&_nc_ohc=fPRDzlzLxf0Ab7okpYT&_nc_oc=AdiisjO6na5QaY1UQXny_hQ3hnddhlVIVoMLvueQkse0Xhs_C3q2cbKdZkqWRtubObA&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCt1lpzDz65QaAl1APk9g6AcX3vLvE0iB9gymqgGf4p6Q&oe=6619C3B6'
              />
            </a>
          </div>
        </Grid.Col>
      </Grid>
      <div className=' flex justify-center py-[40px]'>
        <div className='flex uppercase'>
          {listChinhSach.map((item) => (
            <span className='border-r px-[25px]'>{item}</span>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center '>
          <a className='mx-[20px]' href='/'>
            <div className='bg-bottom-14 h-[45px] w-[120px]  bg-[url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png")] bg-no-repeat'></div>
          </a>
          <a className='mx-[20px]'>
            <div className='bg-bottom-14 h-[45px] w-[120px]  bg-[url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png")] bg-no-repeat'></div>
          </a>
          <a className='mx-[20px]'>
            <div className='bg-bottom-1 h-[80px] w-[80px]  bg-[url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png")] bg-no-repeat'></div>
          </a>
        </div>
        <div className='mb-[25px]  mt-[8px] text-[24px] uppercase tracking-widest'>
          Gạo Sport
        </div>
        <div className='my-[8px] text-[14px] '>
          Địa chỉ: Bà Hom, Quận 6, Thành Phố Hồ Chí Minh, Việt Nam.
        </div>
        <div className='my-[8px] text-[14px]'>
          Chịu Trách Nhiệm Quản Lý Nội Dung: Lê Hoàng Anh - Điện thoại liên hệ:
          0927 993 249
        </div>
        <div className='my-[8px] text-[14px]'>
          © 2015 - Bản quyền thuộc về Gạo Sport
        </div>
      </div>
    </div>
  );
};
