import fetchLink from '@/functions/fetchLink'
import getFormalDate from '@/functions/getFormalDate'
import Image from 'next/image'
import React from 'react'

function ShowDetailMedia({med, handlCancel, handlDelete}) {
  return (
    <div style={{backgroundColor:'rgba(0, 0, 0, 0.63)'}} className=' absolute top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 '>
      <div onClick={handlCancel} className=' w-full h-full flex justify-center items-center p-1'>
        <div onClick={(e)=>e.stopPropagation()} className=' bg-white p-4 rounded-lg'>
        <div className=' flex justify-end mb-2'><p className='italic'>Image, ajoutée le {getFormalDate(new Date(med.date))}</p></div>
            <p className=' font-bold'>Etes vous sur de vouloir supprimer l&#39;image?</p>
            <Image className=' mt-2 mb-6' alt='current med' width={400} height={400} src={fetchLink(med.url)}/>
            <div className=' w-full flex justify-end'>
                <div className=' flex flow-row gap-3'>
                    <button onClick={handlCancel} className=' border rounded-md w-24 cursor-pointer border-gray-500'>Annuler</button>
                    <button onClick={handlDelete} className=' border border-red-600 w-24 rounded-md hover:bg-red-600 hover:text-white cursor-pointer'>Supprimer</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShowDetailMedia
