import useScreen from '@/hook/useScreen'
import React from 'react'

function Home() {
    const large = useScreen()
  return (
    <div className={` ${large ? 'col-span-10 border':'h-full'}  border-l-transparent p-4 w-full grid grid-rows-5 gap-5`} style={{borderTopColor:'rgba(226, 221, 221, 1)'}}>
        <div className=' row-span-3 border rounded-md p-3' style={{borderColor:'rgba(226, 221, 221, 1)'}}>
            <p className=' font-bold text-[16px]'>Latest comments</p>
        </div>
        <div className=' row-span-2 border h-full rounded-md' style={{borderColor:'rgba(226, 221, 221, 1)'}}></div>
    </div>
  )
}

export default Home
