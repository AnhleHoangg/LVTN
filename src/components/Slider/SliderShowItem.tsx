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
import ZoomPicture from '@/components/ZoomPictureHover';

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
          className=' swiper h-[500px] bg-cover object-contain text-center'
          style={{
            backgroundImage: `url("https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/384781164_187908367670948_2676517665423334773_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGAcbgoM7zD8xUf9QSEpEmMsTyHWSE5hi2xPIdZITmGLVkBeOufTh-4w3Hbvf2PtF49zhJICAz02jB5xVPjDu6i&_nc_ohc=y6q-nImUF8QQ7kNvgHE4_Ys&_nc_oc=AdgLpi5GFwYpYYO0LZT_-BduG4kFqz1cIY4gzP-HCIU2_c7D0j0nNcKNyaiTfYMjR0A&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAyrX16EGEP5UMmwOhaouqYSEKz-wryJ55pneZQIf7QbQ&oe=66411876")`,
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
        <ul className='grid grid-cols-3 gap-2'>
          {item?.page.map((item) => (
            <a className='col-span-1' href='/' key={item.src}>
              <li
                style={{
                  backgroundImage: item.src ? `url(${item.src})` : '',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className={`${
                  item.src
                    ? 'hover:border-primary group relative h-[30vh] border-2 border-transparent'
                    : 'hover:border-primary relative h-[150px] hover:border-2'
                }`}
              >
                <div className='mb-[5px]'>
                  <span className=' group-hover:border-primary group-hover:text-primary absolute bottom-4 left-2 z-50 mt-[20px] text-[18px] font-bold uppercase text-white group-hover:border-b-2'>
                    {item.title}
                  </span>
                </div>
              </li>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

const SlideProductCart = ({ data }: { data?: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className='hover:cursor-pointer'>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        pagination={{
          clickable: true,
        }}
      >
        {data?.map((item: string) => (
          <SwiperSlide key={item}>
            <ZoomPicture height={500} zoomScale={3} src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mt-2 h-[100px]'
      >
        {data?.map((item: string) => (
          <SwiperSlide key={item}>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
const BtnPrevNextSlide = ({
  className,
  size = 30,
}: {
  className?: string;
  size?: number;
}) => {
  const swiper = useSwiper();
  return (
    <div className='flex w-full items-center justify-between'>
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
      <div
        className={`${
          className ||
          'flex w-fit items-center justify-center border hover:bg-slate-400'
        }`}
      >
        <button
          className='p-[5px]'
          onClick={() => {
            console.log('click');
            swiper.slideNext();
          }}
        >
          <MdNavigateNext size={size} />
        </button>
      </div>
    </div>
  );
};

export { SliderShowItem, BtnPrevNextSlide, SlideProductCart };
