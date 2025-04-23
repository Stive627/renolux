import useScreen from '@/hook/useScreen'
import React from 'react'
import SingleCom from './SingleCom'
import Image from 'next/image'
import fetchLink from '@/functions/fetchLink'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Home({comment, medias, setCurrIndx}) {
  const large = useScreen()
  const commentSize = large ? 3:2
  const mediaSize = large ? 4:2
  console.log(medias)
  return (
    <div className={` ${large ? 'col-span-10 overflow-y-scroll ':'h-full'}   p-4 w-full grid grid-rows-5 gap-5`}>
        <div className=' row-span-3 border overflow-y-scroll rounded-md p-3' style={{borderColor:'rgba(226, 221, 221, 1)'}}>
            <p className=' font-bold text-[16px]'>Latest comments</p>
            <>
              {
                comment ? <div className=' flex flex-col mt-3 gap-3'>
                            {comment.slice(0,commentSize).map((elt, indx) => <SingleCom key={indx} comment={elt} indx={indx}/>)}
                            <div className=' w-full flex justify-end'><button onClick={()=>setCurrIndx(1)} style={{backgroundColor:'rgba(217, 217, 217, 0.76)'}} className=' border w-24 rounded-md cursor-pointer'>See more</button></div>
                          </div> 
                          :
                          <div className=' animate-spin w-7 h-7 border border-blue-700 border-t-gray-300 rounded-full'></div>
              }
            </>
        </div>
        <div className=' row-span-2 border h-full rounded-md p-3' style={{borderColor:'rgba(226, 221, 221, 1)'}}>
          <p className=' font-bold text-[16px]'>Recently added</p>
          <>
          {
            medias ? <div className=' relative'>
                      <button onClick={()=> setCurrIndx(2)} style={{backgroundColor:'rgba(217, 217, 217, 0.63)'}} className=' absolute right-0 top-1/2 border rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'><ArrowForwardIosIcon/></button>
                      <div className={`grid ${large? 'grid-cols-4':'grid-cols-2'}`}>
                        {medias.slice(0, mediaSize).map((elt, indx) => <Image key={indx} alt={`home image no${indx}`} src={fetchLink(elt.url)} width={300} height={300}/>)}
                      </div>
                    </div>

                    :
                    <div className=' animate-spin w-7 h-7 border border-blue-700 border-t-gray-300 rounded-full'></div>
          }
          </>
        </div>
    </div>
  )
}

export default Home
