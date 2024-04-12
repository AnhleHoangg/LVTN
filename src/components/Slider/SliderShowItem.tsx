import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

const SliderShowItem = ({
  type,
  item,
}: {
  type: 'info' | 'button';
  item?: {
    page: {
      title: string;
      src: string;
    }[];
  };
}) => {
  return (
    <div>
      {type === 'info' ? (
        <div
          className='swiper h-[500px] text-center'
          style={{
            backgroundImage: `url("https://inuvdp.com/wp-content/uploads/2023/07/Download-File-Vector-Logo-MU-Manchester-United-01.jpg")`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}
        >
          <div
            className='parallax-bg'
            data-swiper-parallax-duration='2000'
            data-swiper-parallax='-50%'
          ></div>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className=' flex h-[700px] flex-col items-center justify-center'>
                <div
                  data-swiper-parallax='-200'
                  data-swiper-parallax-duration='2000'
                >
                  <h1 className='text-[27px] font-bold'>Lee Hoagn ANh</h1>
                </div>
                <div
                  data-swiper-parallax='-100'
                  data-swiper-parallax-duration='1000'
                >
                  <p className='text-[50px] font-semibold'>1</p>
                </div>
                <div
                  data-swiper-parallax-duration='1000'
                  data-swiper-parallax-scale='0.5'
                >
                  <a href='/'>
                    <button className='ct-hoverDefault bg-web-100 mt-[20px] rounded-full px-6 py-2 font-semibold'>
                      Shop Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
            ...
          </div>
        </div>
      ) : (
        <ul className='grid grid-cols-4 gap-2'>
          {item?.page.map((item) => (
            <a href='/'>
              <li className='relative h-[150px] items-center justify-center bg-[url("https://cafefcdn.com/thumb_w/640/203337114487263232/2023/6/3/avatar1685811576305-1685811577092432322327.jpg")] bg-center bg-no-repeat'>
                <div className='mb-[5px]'>
                  <div className='absolute bottom-4 left-2 z-50 mt-[30px] text-[14px] font-semibold uppercase text-[white]'>
                    {item.title}
                  </div>
                </div>
              </li>
            </a>
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
        modules={[Zoom, FreeMode, Navigation, Thumbs]}
        pagination={{
          clickable: true,
        }}
        zoom={true}
        className='group relative'
      >
        <SwiperSlide>
          <div className='swiper-zoom-container'>
            <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
          </div>
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
