import React from 'react';
import {
  danhMucChamSocKhach,
  danhMucThanhToan,
  danhMucVeShopee,
  donViVanChuyen,
  listChinhSach,
  quocGia,
  theoDoiChungToi,
} from '@/components/mock-data';
import { Grid } from '@mantine/core';

export const Footter = () => {
  return (
    <div className=''>
      <Grid className='border-b'>
        <Grid.Col span={3}>
          <div>
            <div className='mb-[20px] p-1 uppercase'>Chắm sóc khách hàng</div>
            <ul>
              {danhMucChamSocKhach.map((item, index) => (
                <li
                  className='mb-[12px] text-[14px] hover:text-[blue]'
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
            <div className='mb-[20px] p-1 uppercase'>Về Shopee</div>
            <ul>
              {danhMucVeShopee.map((item, index) => (
                <li
                  key={index}
                  className='mb-[12px] text-[14px] hover:text-[blue]'
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
              <div className='mb-[20px] p-1 uppercase'>Thanh Toán</div>
              <div className='block'>
                {danhMucThanhToan.map((item, index) => (
                  <span
                    key={index}
                    className='mx-2 inline-block rounded-sm border p-[5px] shadow-lg'
                  >
                    <img className='h-[22px] w-[52px]' src={item}></img>
                  </span>
                ))}
              </div>
            </div>
            <div className='mb-[20px]'>
              <div className='mb-[20px] uppercase'> Đơn Vị Vận Chuyển</div>
              <div className='block'>
                {donViVanChuyen.map((item, index) => (
                  <span
                    key={index}
                    className='mx-2 inline-block rounded-sm border p-[5px] shadow-lg'
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
              <li className='mb-[8px] flex items-center' key={index}>
                <span className='mr-[8px] text-[16px]'>
                  <item.icon />
                </span>
                <span>{item.tittle}</span>
              </li>
            ))}
          </ul>
        </Grid.Col>
      </Grid>
      <div className='flex justify-between pb-[20px] pt-[30px]'>
        <div>© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
        <div className='flex'>
          <div>Quốc gia & Khu vực :</div>
          {quocGia.map((item, index) => (
            <span className='border-r px-[5px]' key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className='flex justify-center py-[40px]'>
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
        <div className='mb-[25px] mt-[8px] text-[14px]'>
          Công ty TNHH Shopee
        </div>
        <div className='my-[8px] text-[14px] '>
          Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
          Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài
          hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
        </div>
        <div className='my-[8px] text-[14px]'>
          Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên
          hệ: 024 73081221 (ext 4678)
        </div>
        <div className='my-[8px] text-[14px]'>
          Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
          lần đầu ngày 10/02/2015
        </div>
        <div className='my-[8px] text-[14px]'>
          © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
        </div>
      </div>
    </div>
  );
};
