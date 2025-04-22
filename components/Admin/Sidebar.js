import React from 'react'

function Sidebar({currIndx, setCurrIndx}) {
  return (
    <div className='col-span-2 h-full border flex flex-col gap-2 pt-10 px-2 border-t-transparent' style={{borderRightColor:'rgba(221, 221, 221, 1)'}}>
      {['Home', 'Comments', 'Gallery'].map((elt, indx) =><button onClick={()=>setCurrIndx(indx)} key={indx} style={{backgroundColor:indx === currIndx ? 'rgba(217, 217, 217, 0.45)':'white'}} className={`w-full cursor-pointer py-1 rounded-md`}>{elt}</button>)}
    </div>
  )
}

export default Sidebar
