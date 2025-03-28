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
        mediass.map((elt, indx) => <div key={indx} className=' h-20 w-20'> <Image key={indx} ref={(node) => {mediasRef.current.set(elt, node); return ()=> mediasRef.current.delete(elt)}}  fill={true} src={fetchLink(elt.url)} alt={elt.url}/></div>
        )
      }
    </div>
  )
}

export default MediaScroll
