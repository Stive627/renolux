import useScreen from '@/hook/useScreen'
import React from 'react'
import SingleCom from './SingleCom'

function Home({comment, medias, setCurrIndx}) {
  const large = useScreen()
  return (
    <div className={` ${large ? 'col-span-10 overflow-y-scroll ':'h-full'}   p-4 w-full grid grid-rows-5 gap-5`}>
        <div className=' row-span-3 border overflow-y-scroll rounded-md p-3' style={{borderColor:'rgba(226, 221, 221, 1)'}}>
            <p className=' font-bold text-[16px]'>Latest comments</p>
            <>
              {
                comment ? <div className=' flex flex-col mt-3 gap-3'>
                            {comment.slice(0,3).map((elt, indx) => <SingleCom key={indx} comment={elt} indx={indx}/>)}
                            <div className=' w-full flex justify-end'><button onClick={()=>setCurrIndx(1)} style={{backgroundColor:'rgba(217, 217, 217, 0.76)'}} className=' border w-24 rounded-md'>See more</button></div>
                          </div> 
                          :
                          <div className=' animate-spin w-7 h-7 border border-blue-700 border-t-gray-300 rounded-full'></div>
              }
            </>
        </div>
        <div className=' row-span-2 border h-full rounded-md p-3' style={{borderColor:'rgba(226, 221, 221, 1)'}}>
          <p className=' font-bold text-[16px]'>Recently added</p>
        </div>
    </div>
  )
}

export default Home
