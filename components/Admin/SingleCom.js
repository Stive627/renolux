import getAvatarBgColor from '@/functions/getAvatarBgColor'
import handleDate from '@/functions/handleDate'
import React, { useState } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import useScreen from '@/hook/useScreen';


function SingleCom({comment, indx, hasDeleteButton =false}) {
  const [show, setShow] = useState(false)
  const large = useScreen()
  return (
    <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className=' w-full flex flex-col gap-2  pb-3'>
      <div className=' flex flex-row  justify-between items-center gap-2'>
        <div className=' flex flex-row gap-3'>
          <div style={{backgroundColor:getAvatarBgColor(indx)}} className=' w-12 h-12 flex items-center justify-center rounded-full'>
            <p className=' text-white text-[21px] font-bold'>{comment.firstname[0].toUpperCase()}</p>
          </div>
          <div className='flex flex-col gap-0.5'>
            <p>{comment.firstname[0].toUpperCase() + comment.firstname.slice(1)}</p>
            <p>{handleDate(comment.updatedAt)}</p>
          </div>
        </div>
        {hasDeleteButton && <div className={`${large?(show ?'block':'hidden'):'block'}`}><DeleteIcon sx={{color:'gray'}}/></div>}
      </div>
      <div className='flex  gap-2'>
        {Array(5).fill().map((elt, indx) => <button key={indx}><StarOutlineIcon  sx={{color:'blue',fontSize:23, backgroundColor:(+indx + 1 <= comment.stars)?'rgba(179, 196, 233, 1)':'transparent'}} className=' rounded-full cursor-pointer w-1/2'/></button>)}
      </div>
      <p>{comment.message}</p>
    </div>
  )
}

export default SingleCom
