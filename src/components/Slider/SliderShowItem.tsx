import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const SliderShowItem = ({
  type,
  item,
}: {
  type: 'info' | 'button';
  item?: {
    page: number[];
  };
}) => {
  return (
    <div>
      {type === 'info' ? (
        <ul>
          <li>
            <a href='/'>
              <img
                className='h-[250px]'
                src='https://marketingai.mediacdn.vn/wp-content/uploads/2022/04/imager_2_15162_700.jpg'
              ></img>
            </a>
          </li>
        </ul>
      ) : (
        <ul className='grid grid-cols-10 grid-rows-2'>
          {item?.page.map(() => (
            <li className=' flex h-[150px] items-center justify-center bg-[red]'>
              <div className='mb-[5px]  '>
                <a
                  className='flex flex-col items-center justify-center'
                  href='/'
                >
                  <div className='h-[50px] w-[50px] rounded-full bg-[url("https://img.lazcdn.com/g/p/ce03645345c4b23ecdf9e0de006931e5.jpg_720x720q80.jpg")] object-contain'></div>
                  <div className='mt-[30px] text-[14px]'>Thời trang Nam</div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const SlideProductionCart = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='hover:cursor-pointer'>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='group relative'
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
        <div className='hidden group-hover:block'>
          <div className='absolute top-[50%] z-50 flex w-full justify-between'>
            <BtnPrevSlide />
            <BtnNextSlide />
          </div>
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className=' mt-2 h-[84px]'
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
const BtnPrevSlide = ({
  className,
  size = 30,
}: {
  className?: string;
  size?: number;
}) => {
  const swiper = useSwiper();
  return (
    <div
      className={`${
        className ||
        'flex w-fit items-center justify-center border hover:bg-slate-400'
      }`}
    >
      <button className='p-[5px]' onClick={() => swiper.slidePrev()}>
        <GrFormPrevious size={size} />
      </button>
    </div>
  );
};
const BtnNextSlide = ({
  className,
  size = 30,
}: {
  className?: string;
  size?: number;
}) => {
  const swiper = useSwiper();
  return (
    <div
      className={`${
        className ||
        'flex w-fit items-center justify-center border hover:bg-slate-400'
      }`}
    >
      <button className='p-[5px]' onClick={() => swiper.slideNext()}>
        <MdNavigateNext size={size} />
      </button>
    </div>
  );
};

export { SliderShowItem, BtnPrevSlide, BtnNextSlide, SlideProductionCart };
