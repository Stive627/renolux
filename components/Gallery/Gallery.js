import React, { useEffect, useState} from 'react'
import GalleryLabel from './GalleryLabel'
import GalleryMedias from './GalleryMedias'

function Gallery({medias}) {

  const [currentIndx, setCurrentIndx] = useState(0)
  const [currService, setCurrService] = useState(0)
  
  useEffect(() => {
    if(medias){
      let intervalId = setTimeout(() => {
        setCurrentIndx((currentIndx + 1) % medias.length)
        setCurrService(['Placoplatre', 'Decoration', 'Peinture'].indexOf(medias[currentIndx].category));
      }, 2000);
      return ()=> clearTimeout(intervalId)
    }
 
},[currService, currentIndx, medias])

  return (
    <div >
        <GalleryLabel currService={currService}/>
        <GalleryMedias medias={medias}/>
    </div>
  )
}

export default Gallery
