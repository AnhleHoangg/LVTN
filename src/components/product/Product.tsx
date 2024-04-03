import React from 'react';
import { Container, Grid } from '@mantine/core';
import { productionDetail } from '@/components/mock-data';
import ReactQuill from 'react-quill';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const CopounCard = () => {
  return (
    <Grid grow gutter='sm'>
      {numbers.map((n, index) => (
        <Grid.Col span={1}>
          <a key={index} href='/'>
            <div className='hover:animate-flicker flex h-[100px] flex-col justify-center p-[15px]'>
              <div className='flex flex-col items-center justify-center '>
                <div className='h-[45px] w-[45px] rounded-xl bg-[url("https://www.gosell.vn/blog/wp-content/uploads/2023/03/san-sale-shopee-3.jpg")]'></div>
              </div>
              <div className='flex justify-center' key={n}>
                1{n}
              </div>
            </div>
          </a>
        </Grid.Col>
      ))}
    </Grid>
  );
};

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
        <button>
          <Container className=' w-[186px] px-[0] '>
            <div className=' relative transition hover:drop-shadow-md'>
              <div className='p-[1px]'>
                <div className='relative'>
                  <span className='absolute right-0 top-0 bg-[yellow] px-[10px] text-[12px]'>
                    -47%
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
              <div className='px-[7px] py-[15px]'>
                <div className='mt-[10px] flex flex-col justify-center'>
                  <div className='mb-[15px] text-[blue]'>$99,000</div>
                  <div className='h-[20px] w-[150px] rounded-full bg-gradient-to-r from-blue-500 to-green-500'>
                    <span className='font-lights py-2 text-[12px] uppercase text-[white]'>
                      Đã bán 5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </button>
      );
      break;
    case 'product':
      buttonContent = (
        <button>
          <Container className=' mt-[15px] w-[235px] border-[1px] bg-[white] px-[0]'>
            <div className=' relative transition hover:-translate-y-[2px] hover:outline-double hover:outline-[blue] hover:drop-shadow-md'>
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
              <div className='px-[7px] pb-[7px]'>
                <div className='h-[40px] '>Bút Gel</div>
                <span className=' border-x-inherit bg-[yellow] p-[5px] text-[10px] text-[blue]'>
                  15% Giảm giá
                </span>
                <div className='mt-[10px] flex justify-between'>
                  <div className='text-[blue] '>$99,000</div>
                  <div>
                    <span className='font-lights text-[12px]'>Đã bán 5,5k</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </button>
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

export { PorductFiller, CopounCard, ProductionItem, ProductionDetail };
