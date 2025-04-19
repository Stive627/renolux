import fetchLink from '@/functions/fetchLink'
import Image from 'next/image'
import React from 'react'

function SuccessfullComment() {
  return (
    <div className=' col-span-3 h-full flex justify-center items-center'>
      <div>
      <Image src={fetchLink('public/confirmComment.jpeg')} width={300} height={300} alt='the comment is successfully sent'/>
      <p className=' text-center text-slate-500'>Merci, votre commentaire a ete bien recu🔥</p>
      </div>

    </div>
  )
}

export default SuccessfullComment
