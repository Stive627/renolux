import fetchLink from '@/functions/fetchLink'
import Image from 'next/image'
import React from 'react'

function ShowDetailMedia({med, handlCancel, handlDelete}) {
  return (
    <div style={{backgroundColor:'rgba(0, 0, 0, 0.63)'}} className=' absolute top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 '>
      <div className=' w-full h-full flex justify-center items-center p-1'>
        <div className=' bg-white p-4 rounded-lg'>
            <p className=' font-bold'>Etes vous sur de vouloir supprimer l&#39;image?</p>
            <Image className=' my-6' alt='current med' width={400} height={400} src={fetchLink(med.url)}/>
            <div className=' w-full flex justify-end'>
                <div className=' flex flow-row gap-3'>
                    <button onClick={handlCancel} className=' border rounded-md w-24 cursor-pointer border-gray-500'>Cancel</button>
                    <button onClick={handlDelete} className=' border border-red-600 w-24 rounded-md hover:bg-red-600 hover:text-white cursor-pointer'>Delete</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShowDetailMedia
