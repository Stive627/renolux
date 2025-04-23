import fetchLink from '@/functions/fetchLink'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import '../../App.css'
import useScreen from '@/hook/useScreen';

function SingleCategory({medias}) {
    const [showFull, setShowFull] = useState(false)
    const singleCatecoryRef = useRef()
    const large = useScreen()
    const handleFull = () => {
        singleCatecoryRef.current.style.height='100%'
        singleCatecoryRef.current.style.overflow='scroll'
        setShowFull(true)
    }
    const handleShowLess = () => {
        singleCatecoryRef.current.scrollTo({top:0, behavior:'smooth'})
        singleCatecoryRef.current.style.height=large?'525px':'370px'
        singleCatecoryRef.current.style.overflow='hidden'

        setShowFull(false)
    }
  return (
    <div ref={singleCatecoryRef} style={{height:large?'525px':'370px'}} className=' mt-3 singleCatecory'>
        <div className=' relative  mt-5 w-full'>
            <hr style={{color:'rgba(221, 221, 221, 1)'}} className=''/>
            <button style={{backgroundColor:'rgba(153, 179, 255, 1)', color:'rgba(41, 78, 191, 1)'}} className=' w-32 absolute right-1/2 -top-2 rounded-md z-40'>Placoplâtre</button>
        </div>
        <div className=' relative w-full'>
            <div className=' flex justify-center'>
            <div className={`mt-9 grid ${large ? 'grid-cols-3':' grid-cols-2'} gap-2`}>
                {medias.map((elt,indx) => <Image key={indx} alt={`media no${indx}`} className={`${large ? (indx >=3 && !showFull && 'opacity-30'):(indx>=4 && !showFull && 'opacity-30')}`} src={fetchLink(elt.url)} width={400} height={400}/>)}
            </div>
            </div>
            {!showFull && <button onClick={handleFull} style={{top:large?'450px':'310px'}} className=' bg-white border-gray-400 absolute right-1/2 border p-1 rounded-lg'>Show more <KeyboardArrowDownIcon/></button>}
            {showFull && <button onClick={handleShowLess} className=' absolute right-1/2 bottom-20 bg-white border-gray-400 border p-1 rounded-lg'>Show less <KeyboardArrowDownIcon sx={{rotate:'180deg'}}/></button>}

        </div>
    </div>
  )
}

export default SingleCategory
