import React from 'react'
import MediaScroll from './MediaScroll'

function GalleryMedias({medias, visible}) {

    if(!medias){
      return(
          <div className=' col-span-2 border h-96'>
              <div className=' flex items-center justify-center h-full'>
                  <div className='border border-b-white border-blue-600 animate-spin p-5 rounded-full'></div>
              </div>
          </div>
      )
  }
  return(
      <div className=' col-span-2 border overflow-hidden'>
          <MediaScroll visible={visible}  medias={medias}/>
      </div>
  )
  
}

export default GalleryMedias
