import fetchLink from '@/functions/fetchLink'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image'
import React, { useState } from 'react'
import '../../App.css'
import useScreen from '@/hook/useScreen';
import ShowDetailMedia from './ShowDetailMedia';
import axios from 'axios';

function SingleCategory({medias, title, handleRef, handleFull, handleShowLess, indx, currIndx, setMedia}) {
  const large = useScreen()
  const [currentMed, setCurrentMed] = useState(undefined)
  const handleClick = (med) => {
    setCurrentMed(med)
  }
  const handleCancel = () => {
    setCurrentMed(undefined)
  }
  const handleDelete = (id, indx) => {
    axios({url:fetchLink(`media/delete/${id}`), method:'DELETE'})
    .then(()=> {
      const med = [...medias]
      const finalMe = med.filter(elt => elt !== med[indx])
      setMedia(finalMe)
      console.log('deleted')
      setCurrentMed(undefined)
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
       <div className=' relative  mt-5 w-full'>
            <hr style={{color:'rgba(221, 221, 221, 1)'}}/>
            <button style={{backgroundColor:'rgba(153, 179, 255, 1)', color:'rgba(41, 78, 191, 1)'}} className=' w-32 absolute right-1/2 -top-2 rounded-md z-40'>{title}</button>
        </div>
        <div ref={handleRef} style={{height:large?'525px':'370px'}} className=' mt-3 singleCatecory'>
        <div className=' relative w-full '>
            <div className=' flex justify-center'>
            <div className={`mt-9 grid ${large ? 'grid-cols-3':' grid-cols-2'} gap-2`}>
                {medias.map((elt,indx) => <Image className=' cursor-pointer' onClick={() => handleClick({url:elt.url, id:elt._id, indx:indx})} key={indx} alt={`media no${indx}`} src={fetchLink(elt.url)} width={400} height={400}/>)}
            </div>
            <div className=' absolute bottom-0 right-1/2'><button onClick={()=>handleShowLess(indx)} className='  bg-white border-gray-400 border p-1 rounded-lg'>Show less <KeyboardArrowDownIcon sx={{rotate:'180deg'}}/></button></div>
            </div>
            {+currIndx !== indx &&<div style={{top:large?'450px':'310px'}} className='absolute right-1/2'> <button onClick={()=>handleFull(indx)}  className=' bg-white border-gray-400  border p-1 rounded-lg'>Show more <KeyboardArrowDownIcon/></button></div>}

        </div>
    </div>
    {currentMed && <ShowDetailMedia med={currentMed} handlCancel={handleCancel} handlDelete={()=>handleDelete(currentMed.id, currentMed.indx)}/>}
    </div>
  )
}

export default SingleCategory
