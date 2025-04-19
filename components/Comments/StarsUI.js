import React from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
function StarsUI({comment, setComment}) {
  return (
    <div className=' relative bottom-2'>
    <p className=' text-sm mb-1 text-slate-700'>Please, rate us</p>
    <div className=' w-full flex justify-between'>
      {Array(5).fill().map((elt, indx) => <button type='button' className=' outline-none' onClick={()=>setComment({...comment, stars:+indx+1})} key={indx}><StarOutlineIcon  sx={{color:'blue',fontSize:30, backgroundColor:(+indx + 1 <= comment.stars)?'rgba(179, 196, 233, 1)':'white'}} className=' rounded-full cursor-pointer'/></button>)}
    </div>
    </div>
  )
}

export default StarsUI
