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
    const usefullArr = [...comments, ...comments, ...comments, ...comments]
  return (
    <div className='col-span-5 border p-2 flex items-center border-slate-200 '>
        <Swiper ref={carRef}
        spaceBetween={10}
        slidesPerView={large?3:1}
        grabCursor={true} 
        loop={true} 
        >
        {usefullArr.map((elt, indx) => <SwiperSlide key={indx}><SingleComment key={indx} indx={indx} comment={elt}/></SwiperSlide>)}
        </Swiper>
    </div>
  )
}

export default DisplayComments
