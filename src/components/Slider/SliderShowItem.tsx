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
import 'swiper/css/parallax';
import Link from 'next/link';

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
          className='swiper h-[500px] bg-cover object-contain text-center'
          style={{
            backgroundImage: `url("https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/384781164_187908367670948_2676517665423334773_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DZUVcW6j86gAb5ijlv-&_nc_oc=Adh0ZcfDTX31Ka0y7EsjFTTAMKuF5roBZBOrMmFoaoQJrrKCGLrFWTzmpvSvOAwqmGw&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfDXsJUmfv0Wd0D3eIUqthWtMhIc7ADIrgYV0upsPwcx-w&oe=66241776")`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}
        >
          <div
            className='parallax-bg'
            data-swiper-parallax-duration='3000'
            data-swiper-parallax='-50%'
          ></div>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className=' flex h-[700px] flex-col items-center justify-center text-[white]'>
                <div
                  data-swiper-parallax='-200'
                  data-swiper-parallax-duration='3000'
                >
                  <h1 className='text-[27px] font-bold uppercase tracking-widest'>
                    Gạo Sport
                  </h1>
                </div>
                <div
                  data-swiper-parallax='-100'
                  data-swiper-parallax-duration='1000'
                >
                  <p className='text-[50px] font-semibold'>
                    Sản Phẩm Chất Lượng - Uy Tín
                  </p>
                </div>
                <div
                  data-swiper-parallax-duration='1000'
                  data-swiper-parallax-scale='0.6'
                >
                  <a href='/'>
                    <button className='mt-[20px] rounded-full bg-slate-500 px-6 py-2 font-semibold hover:bg-red-400'>
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
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
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
