import fetchLink from '@/functions/fetchLink';
import Image from 'next/image';
import React, { useEffect, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function MediaScroll({ medias }) {
  const carRef = useRef()
  useEffect(()=>{
    const intervalId = setInterval(() => {
      carRef.current.swiper.slideNext()
    }, 2000);
    return ()=> clearInterval(intervalId)
  }, [])
  return (
    <div className='flex justify-center my-4'>
      <Swiper ref={carRef} style={{width:'400px'}}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true} 
        loop={true} 
      >
        {medias.map((elt, indx) => <SwiperSlide key={indx}><Image alt={`media no${indx}`} src={fetchLink(elt.url)} width={400} height={250}/></SwiperSlide>)}
      </Swiper>
    </div>
  );
}

export default MediaScroll;
