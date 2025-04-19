import React from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import '../../App.css'

function SingleComment({comment, indx}) {
  return (
    <div className={`p-2 border border-gray-300  rounded-lg h-40 flex flex-col ${indx %2 === 0 ? 'singleComUp':'singleComDown'}`}>
      <div className=' flex justify-between items-center'>
        <div className=' flex items-center gap-2'>
            <MoodIcon sx={{fontSize:40, color:'blue'}}/> 
            <p className=' text-[19px] '>{comment.firstname[0].toUpperCase()+comment.firstname.slice(1)}</p>
        </div>
        <p>{comment.createdAt.slice(0,10)}</p>
      </div>
      <div className=' w-1/3 flex  gap-2'>
        {Array(5).fill().map((elt, indx) => <button key={indx}><StarOutlineIcon  sx={{color:'blue',fontSize:23, backgroundColor:(+indx + 1 <= comment.stars)?'rgba(179, 196, 233, 1)':'white'}} className=' rounded-full cursor-pointer w-1/2'/></button>)}
      </div>
      <div className=' h-full flex items-center justify-center'>
       <p className='text-center'>{comment.message}</p>
      </div>

    </div>
  )
}

export default SingleComment
