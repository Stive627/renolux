import fetchLink from '@/functions/fetchLink';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

function MediaScroll({medias, visible}) {
    const mediasRef = useRef(new Map())
    const [mediass, setMediass] = useState(medias)
    const [indx, setIndx] = useState(0)
    useEffect(() => {
      console.log(visible)
      if(visible){
        let intervalScroll = setInterval(() => {
          const node = mediasRef.current.get(mediass[indx])
          node?.scrollIntoView({
              behaviour:'smooth',
              block:'center',
              inline:'nearest'
          })
          setMediass([...mediass, mediass[indx]])
          setIndx((indx+1)%mediass.length)
      }, 1500);
      return () => clearInterval(intervalScroll)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indx, visible])
  return (
    <div className=' flex flex-row gap-5 items-center h-full'>
      {
        mediass.map((elt, indx) => <Image key={indx} ref={(node) => {mediasRef.current.set(elt, node); return ()=> mediasRef.current.delete(elt)}} width={200} height={200}   src={fetchLink(elt.url)} alt={`Image de la category ${elt.category} et du service ${elt.service}`}/>
        )
      }
    </div>
  )
}

export default MediaScroll
