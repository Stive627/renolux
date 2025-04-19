import React from 'react'
import MediaScroll from './MediaScroll'

function GalleryMedias({medias}) {

  return(
          <>
          {
            medias ? <MediaScroll medias={medias}/> : 
            <div>
              <div className=' flex items-center justify-center h-full'>
                  <div className='border border-b-white border-blue-600 animate-spin p-5 rounded-full'></div>
              </div>
          </div>
          }
          </>
  )
  
}

export default GalleryMedias
