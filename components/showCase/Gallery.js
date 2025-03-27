"use client"
import React, { useEffect, useState, useRef } from 'react'
import GalleryLabel from './GalleryLabel'
import GalleryMedias from './GalleryMedias'
import useVisible from '@/hook/useVisible'
import axios from 'axios'
import fetchLink from '@/functions/fetchLink'

function Gallery() {

  const [currentIndx, setCurrentIndx] = useState(0)
  const [currService, setCurrService] = useState(0)
  const [medias, setMedias] = useState(undefined)
  const galleryRef = useRef(undefined)
  const visible = useVisible(galleryRef.current)
  
  useEffect(() => {
    if(galleryRef.current){
      console.log(visible)
    }
    if(medias){
      let intervalId = setTimeout(() => {
        setCurrentIndx((currentIndx + 1) % medias.length)
        setCurrService(['Placoplatre', 'Decoration', 'Peinture'].indexOf(medias[currentIndx].category));
      }, 1500);
      return ()=> clearTimeout(intervalId)
    }
 
},[currService, currentIndx, medias])

  useEffect(() => {
    axios({url:fetchLink('media/show'), method:'GET'})
    .then((value) => {setMedias(value.data); console.log(value.data); setCurrentIndx(['Placoplatre', 'Decoration', 'Peinture'].indexOf(medias[0].category))})
    .catch((reason) => console.log('An error occured', reason))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div ref={galleryRef} className = ' w-full grid grid-cols-3  mt-5'>
        <GalleryLabel currService={currService}/>
        <GalleryMedias medias={medias} visible={visible}/>
    </div>
  )
}

export default Gallery
