import React from 'react';
import { Container } from '@mantine/core';
import { productionDetail } from '@/components/mock-data';
import { PrimaryButton } from '@/components/Button';
import { BsCart2 } from 'react-icons/bs';

const PorductFiller = () => {
  return (
    <div className='flex w-[123px] flex-col items-center justify-center p-[10px]'>
      <div className=''>
        <img
          className=' h-[80px] w-[80px] rounded-full object-contain'
          src='https://cdn.boo.vn/media/catalog/product/1/_/1.0.02.3.22.002.223.23-11000032-bst-1_5.jpg'
        ></img>
      </div>
      <p className='mt-[10px] h-[40px] text-[13px]'>Thời Trang Nam</p>
    </div>
  );
};
const ProductionItem = ({
  type,
}: {
  type: 'flashSale' | 'product' | 'sale';
}) => {
  let buttonContent;
  switch (type) {
    case 'flashSale':
      buttonContent = (
        <div className='mt-[15px] border hover:drop-shadow-md'>
          <Container className=' w-[186px] px-[0] '>
            <div className=' relative transition '>
              <div className='p-[1px]'>
                <div className='relative'>
                  <span className='absolute right-0 top-0 bg-[yellow] px-[10px] text-[12px]'>
                    -50%
                  </span>
                  <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lrv6e24bfb2c88_tn'></img>
                </div>
                <div className=''>
                  <img
                    className='absolute top-0 h-[186px] w-full'
                    src='https://down-vn.img.susercontent.com/file/vn-50009109-25370a2a70652ec8b73f1d22907e58da'
                  ></img>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='mr-[5px] text-[14px] text-slate-300 line-through'>
                  $180,000
                </div>
                <div className='text-[red]'>$90,000</div>
              </div>

              <div className='p-[10px]'>
                <PrimaryButton className='w-full' text='Mua Ngay' />
              </div>
            </div>
          </Container>
        </div>
      );
      break;
    case 'product':
      buttonContent = (
        <div>
          <Container className=' mt-[15px] w-[235px] border-[1px] bg-[white] px-[0]'>
            <div className=' group relative transition hover:-translate-y-[2px] hover:border-2 hover:border-[black] hover:drop-shadow-md'>
              <div className='absolute z-50 hidden p-[10px] group-hover:block'>
                <PrimaryButton
                  className='px-[20px]'
                  text=''
                  startIcon={
                    <BsCart2 className='text-[16px] font-medium text-[white]' />
                  }
                />
              </div>
              <div className='p-[1px]'>
                <div className=''>
                  <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lrv6e24bfb2c88_tn'></img>
                </div>
                <div className=''>
                  <img
                    className='absolute top-0 h-[186px] w-full'
                    src='https://down-vn.img.susercontent.com/file/vn-50009109-25370a2a70652ec8b73f1d22907e58da'
                  ></img>
                </div>
              </div>
              <div className='p-[7px]'>
                <div className='mb-3 h-[20px] px-[5px]'>
                  <p className='m-auto truncate'>
                    Quần bóng đá Grand Sport 001478 Trắng
                  </p>
                </div>
                <div className='mt-[5px] font-semibold text-[red] '>
                  $99,000
                </div>
              </div>
              <div className='p-[10px]'>
                <PrimaryButton className='w-full' text='Mua Ngay' />
              </div>
            </div>
          </Container>
        </div>
      );
      break;
    case 'sale':
      buttonContent = <button>Sale</button>;
      break;
    default:
      buttonContent = null;
  }
  return <div>{buttonContent}</div>;
};

type ProductionDetails = {
  list: string;
  title: string;
};
const ProductionDetail = () => {
  return (
    <div>
      <div className='p-[15px] pb-[0px]'>
        <div className='text-[22px] font-medium uppercase'>
          Chi tiết sản phẩm
        </div>
        <table className=' w-full p-5'>
          <tbody className='m-[10px]'>
            {productionDetail.map((item: ProductionDetails) => (
              <tr className='mb-[18px] h-[35px] text-[14px]'>
                <td className='w-[120px] text-gray-400'>{item.list}</td>
                <td className=''>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='p-[15px] pb-[15px]'>
        <div className='mb-[20px] text-[22px] font-medium uppercase'>
          Mô tả sản phẩm
        </div>
        <p className='text-[14px]'>
          Bộ Quần Áo Thể Thâo Cho Tất Cả Các Lứa Tuổi- Nam Nữ Đều Mặc Được THÔNG
          TIN SẢN PHẨM: - Chất Liệu: Thun Lạnh thể thao, thấm hút mồ hôi tốt, độ
          co giãn cực tốt. In ép công nghệ 3D hiện đại,màu sắc luôn tươi mới, Sử
          dụng mực INTECK Hàn Quốc lành tính với tất cả làn da nhạy cảm nhất
          LONG THANH CAM KẾT • Chất liệu Vải Thun Lạnh Cao Cấp • Không Nhăn –
          Không Xù – Không Phai • Thấm Hút Mồ Hôi Cực Tốt • Thiết Kế Mạnh Mẽ,
          Hiện Đại. Độc Quyền Về Mẫu Mã Thiết Kế BẢNG SIZE: - Size 8: Cân Nặng
          Từ 12kg =&gt; 15Kg - Size 12: Cân Nặng từ 16kg =&gt;18Kg - Size 18:
          Cân Nặng Từ 19kg =&gt; 20Kg - Size 24: Cân Nặng Từ 21kg =&gt;22Kg -
          Size M: Cân Nặng Từ 23kg =&gt;25Kg - Size XL: Cân Nặng Từ 26kg =&gt;
          28Kg - Size 2x nhỏ:Cân Nặng Từ 29kg =&gt; 36Kg - Size 4x nhỏ: cân Nặng
          Từ 37kg =&gt; 44Kg - Size 2X đại: Cân Nặng Từ 45kg =&gt; 50Kg - Size
          4X đại: Cân Nặng Từ 51kg =&gt; 60Kg - Size 5X bigsize: Cân Nặng Từ
          61kg =&gt;65Kg - Size 6X bigsize:Cân Nặng Từ 66kg =&gt; 75Kg Gửi Từ:
          🏢 CÔNG TY LONG THANH - Sản xuất và cung cấp sỉ quần áo trẻ em! ☎
          Hotline: 0908.6207.39 🏢 Địa chỉ: 24/5F Thái Thị Giữ, Bà Điểm, Hóc
          Môn, Tp Hồ Chí Minh #bodo #aotreem #aobongda #aobongdatreem
          #aobongdatreemmoinhat #quanaotreem #boquanaobongdatreem #boquanaotreem
          #quanaobongdatreem #aodabanhtreem #aodabanh #aodabongtreem #aodabong
          #aobongdatreemmoinhat #aothuntreemmoi #bongdatreem #aodabanh
          #aodabanhtreem #quanaobongdatreem #dotreem{' '}
        </p>
      </div>
    </div>
  );
};

export { PorductFiller, ProductionItem, ProductionDetail };
