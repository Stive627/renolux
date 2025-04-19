import React, { useEffect, useRef } from 'react'
import SingleComment from './SingleComment'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../App.css'
import useScreen from '@/hook/useScreen';

function DisplayComments({comments}) {
    const carRef = useRef()
    const large = useScreen()
    useEffect(()=>{
    const intervalId = setInterval(() => {
        carRef.current.swiper.slideNext()
    }, 2000);
    return ()=> clearInterval(intervalId)
    }, [])
  return (
    <div className='col-span-5  p-2 flex items-center'>
        <Swiper ref={carRef}
        spaceBetween={10}
        slidesPerView={large?3:1}
        grabCursor={true} 
        loop={true} 
        >
        {comments.map((elt, indx) => <SwiperSlide key={indx}><SingleComment key={indx} indx={indx} comment={elt}/></SwiperSlide>)}
        </Swiper>
    </div>
  )
}

export default DisplayComments
